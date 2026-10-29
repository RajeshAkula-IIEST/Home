
import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const redis = Redis.fromEnv();
const COUNTER_KEY = "portfolio:visitors";
const INITIAL_COUNT = 512;
const COOKIE_NAME = "portfolio_visitor_counted";
const FIVE_MINUTES = 1 * 60;

export async function GET(request: NextRequest) {
  try {
    // Initialize only if the counter does not already exist.
    await redis.set(COUNTER_KEY, INITIAL_COUNT, { nx: true });

    const alreadyCounted =
      request.cookies.get(COOKIE_NAME)?.value === "1";

    let visits: number;

    if (alreadyCounted) {
      visits = Number(
        (await redis.get(COUNTER_KEY)) ?? INITIAL_COUNT
      );
    } else {
      visits = await redis.incr(COUNTER_KEY);
    }

    const response = NextResponse.json(
      { value: visits },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );

    // Count this browser again only after the 5-minute cooldown.
    if (!alreadyCounted) {
      response.cookies.set(COOKIE_NAME, "1", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: FIVE_MINUTES,
      });
    }

    return response;
  } catch (error) {
    console.error("Visitor counter API error:", error);

    return NextResponse.json(
      { error: "Visitor count unavailable" },
      { status: 500 }
    );
  }
}
