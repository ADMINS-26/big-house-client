import SectionBlock from "./SectionBlock";

export default function About() {
  return (
    <SectionBlock id="about" title="О нас" number="01">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="space-y-5 font-sans font-[200] text-[#0F1F17]" style={{ fontSize: "clamp(13px, 1.146vw, 22px)", lineHeight: "clamp(20px, 2.083vw, 40px)" }}>
          <p>
            Большой дом стремится выполнять высококачественные, экономичные и
            своевременные проекты, которые постоянно превышают стандарты и
            гарантируют исключительную удовлетворённость клиентов.
          </p>
          <p>
            Мы стремимся обеспечить отличное качество и инновационные
            строительные решения. Наш совместный подход является ключом к
            нашему успеху, и наши проекты демонстрируют навыки и талант нашей
            команды во всех сферах нашей деятельности.
          </p>
        </div>

        {/* Two photos */}
        <div className="grid grid-cols-2 gap-3 items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about-1.png"
            alt="Проект 1"
            className="rounded-xl aspect-[3/4] w-full object-cover"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/abour-2.png"
            alt="Проект 2"
            className="rounded-xl aspect-square w-full object-cover "
          />
        </div>
      </div>
    </SectionBlock>
  );
}
