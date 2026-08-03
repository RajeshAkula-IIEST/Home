"use client";

import { useState } from "react";

import Section from "@/components/ui/Section";

import AwardsHero from "./AwardsHero";
import AwardStats from "./AwardStats";
import FeaturedPatent from "./FeaturedPatent";
import CareerTimeline from "./CareerTimeline";
import AwardsGallery from "./AwardsGallery";
import Recognition from "./Recognition";
import AchievementSummary from "./AchievementSummary";

import DocumentViewer from "@/components/ui/DocumentViewer";

export default function Awards() {
  const [viewerOpen, setViewerOpen] = useState(false);

  const [viewerFile, setViewerFile] = useState(
    "/certificates/PatentCertificate.pdf"
  );

  const [viewerTitle, setViewerTitle] = useState(
    "Granted Indian Patent"
  );

  const [viewerSubtitle, setViewerSubtitle] = useState(
    "Patent Certificate"
  );

  const openViewer = (
    file: string,
    title: string,
    subtitle: string = "Certificate"
  ) => {
    setViewerFile(file);
    setViewerTitle(title);
    setViewerSubtitle(subtitle);
    setViewerOpen(true);
  };

  return (
    <Section id="awards">

      {/* Hero */}
      <AwardsHero />

      {/* Statistics */}
      {/* <AwardStats /> */}

      {/* Featured Patent */}
      {/*
      <FeaturedPatent
        onViewPatent={() =>
          openViewer(
            "/certificates/PatentCertificate.pdf",
            "Granted Indian Patent",
            "Patent Certificate"
          )
        }
      />
      */}

      {/* Timeline + Recognition */}
      <div className="mt-4 items-start grid gap-8 xl:grid-cols-[1.55fr_1fr]">

        <CareerTimeline
          onOpen={openViewer}
        />

        <div className="xl:sticky xl:top-24 h-fit">
          <Recognition />
        </div>

      </div>

      {/* Awards Gallery */}
      {/*
      <AwardsGallery
        onOpen={(file: string, title: string) =>
          openViewer(file, title)
        }
      />
      */}

      {/* Achievement Summary */}
      {/* <AchievementSummary /> */}

      {/* Shared Document Viewer */}
      <DocumentViewer
        open={viewerOpen}
        title={viewerTitle}
        subtitle={viewerSubtitle}
        file={viewerFile}
        onClose={() => setViewerOpen(false)}
      />

    </Section>
  );
}