// src/components/sections/Projects.tsx
"use client";

import { projectsSection } from "@/content/site";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";

export default function Projects() {
  return (
    <div className="py-24 section-fade">
      <Container id={projectsSection.id}>
        <SectionHeader
          title={projectsSection.heading}
          description={projectsSection.subheading}
          align="center"
          eyebrow="Work"
        />

        <div className="mt-10 space-y-8">
          {projectsSection.projects.map((project) => (
            <FadeIn key={project.title}>
              <article className="relative overflow-hidden rounded-3xl border border-neutral-700/70 bg-gradient-to-br from-neutral-950 via-black to-neutral-950 px-7 py-7 md:px-10 md:py-9 shadow-[0_24px_80px_rgba(0,0,0,1)]">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

                <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-5">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full border border-cyan-400/50 px-3 py-1 text-cyan-200 bg-black/60">
                      {project.category}
                    </span>
                    <span className="rounded-full border border-neutral-600 px-3 py-1 text-neutral-300 bg-black/60">
                      Status: {project.status}
                    </span>
                  </div>
                </header>

                <dl className="space-y-3 text-sm text-neutral-300">
                  <div>
                    <dt className="font-semibold text-neutral-100">Problem</dt>
                    <dd>{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-neutral-100">Solution</dt>
                    <dd>{project.solution}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-neutral-100">Result</dt>
                    <dd>{project.result}</dd>
                  </div>
                </dl>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </div>
  );
}
