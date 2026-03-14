import { ReactNode } from "react";

interface SectionBlockProps {
  id?: string;
  title?: string;
  number?: string;
  subtitle?: string;
  children: ReactNode;
}

export default function SectionBlock({ id, title, number, subtitle, children }: SectionBlockProps) {
  return (
    <section id={id} className="site-container py-16">
      <div className="mb-10">

      <div className="border-b border-[#0F1F17] pt-3 flex items-baseline justify-between pb-5 mb-2.5 ">
        <h2
          className="font-display font-[500] text-[#1B4332] uppercase"
          style={{
            fontSize: "clamp(20px, 2.604vw, 50px)",
            lineHeight: "clamp(20px, 2.604vw, 50px)",
          }}
          >
          {title}
        </h2>
        {number && (
          <span
          className="font-display font-[500] text-[#1B4332] shrink-0 ml-4"
          style={{
            fontSize: "clamp(20px, 2.604vw, 50px)",
            lineHeight: "clamp(20px, 2.604vw, 50px)",
          }}
          >
            {number}
          </span>
        )}
      </div>

      {subtitle && (
        <div className="md:grid md:grid-cols-2 mb-2.5">
          <div className="hidden md:block" />
          <p
            className="font-sans font-[200] text-[#0F1F17]"
            style={{
              fontSize: "clamp(13px, 1.146vw, 22px)",
              lineHeight: "clamp(20px, 2.083vw, 40px)",
            }}
            >
            {subtitle}
          </p>
        </div>
      )}

      </div>
      {children}
    </section>
  );
}
