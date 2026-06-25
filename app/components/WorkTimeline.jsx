"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export default function WorkTimeline({ jobs }) {
  const data = (jobs || []).map((job) => ({
    title: job.time || job.period || "",
    content: (
      <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          {job.image && (
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-white shadow-sm shrink-0">
              <Image
                src={job.image}
                alt={job.company || job.org || "Company"}
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
              {job.position || job.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="text-sm font-medium text-[hsl(var(--color-secondary))]">
                {job.company || job.org}
              </span>
              {job.current && (
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-[10px] px-2 py-0.5">
                  Current
                </Badge>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-xs text-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{job.time || job.period}</span>
              </div>
              {job.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{job.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        {job.description && (
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {job.description}
          </p>
        )}

        {/* Responsibilities */}
        {job.responsibilities && job.responsibilities.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-bold text-foreground/50 uppercase tracking-widest mb-2.5">
              Key Responsibilities
            </h4>
            <ul className="space-y-1.5">
              {job.responsibilities.map((resp, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--color-secondary))] mt-2 shrink-0" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech stack */}
        {job.technologies && job.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {job.technologies.slice(0, 8).map((tech, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="border-border text-muted-foreground/70 text-[11px] font-normal px-2 py-0.5"
              >
                {tech}
              </Badge>
            ))}
            {job.technologies.length > 8 && (
              <span className="text-[11px] text-muted-foreground/40 self-center">
                +{job.technologies.length - 8}
              </span>
            )}
          </div>
        )}
      </div>
    ),
  }));

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="section-industry mb-4 sm:mb-8 md:px-10">
        <div className="meta-label">01 · Professional</div>
        <h2>Work Experience</h2>
        <p className="subtitle">
          Building production systems in blockchain infrastructure and backend engineering.
        </p>
      </div>
      <Timeline data={data} />
    </div>
  );
}
