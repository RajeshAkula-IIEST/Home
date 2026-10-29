
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const redis = Redis.fromEnv();
const COUNTER_KEY = "portfolio:visitors";
const INITIAL_COUNT = 482;

export async function GET() {
  try {
    // Initialize the counter only if it does not already exist.
    await redis.set(COUNTER_KEY, INITIAL_COUNT, { nx: true });

    // Increment the count atomically.
    const visits = await redis.incr(COUNTER_KEY);

    return NextResponse.json(
      { value: visits },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("Visitor counter API error:", error);

    return NextResponse.json(
      { error: "Visitor count unavailable" },
      { status: 500 }
    );
  }
}
