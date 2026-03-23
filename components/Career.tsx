import SectionBlock from "./SectionBlock";
import FadeIn from "./FadeIn";

const cards = [
  {
    num: "01",
    title: "Командная работа и развитие",
    text: "Большой дом создаёт среду, которая поощряет совместный подход в сочетании с профессиональным ростом.",
  },
  {
    num: "02",
    title: "Возможности для профессионалов",
    text: "Мы хотим привлечь самых талантливых и увлечённых людей присоединиться к нашему бизнесу.",
  },
  {
    num: "03",
    title: "Талант и инициатива",
    text: "У нас работают талантливые и целеустремлённые, те, кто может доказать, что они работают по собственной инициативе в прогрессивной и сложной среде, и те, у кого есть необходимые навыки и опыт, чтобы использовать успех нашей процветающей компании.",
  },
  {
    num: "04",
    title: "Равные возможности",
    text: "Большой дом стремится к равной оплате труда и обеспечению полноценной карьеры для наших сотрудников независимо от пола, религии, сексуальной ориентации, инвалидности или любых других защищённых характеристик.",
  },
  {
    num: "05",
    title: "Люди — наша главная ценность",
    text: "Мы признаём, что наши сотрудники являются нашим самым большим достоянием, и наша цель — предоставить им наилучшие возможности для роста и развития вместе с компанией, чтобы они могли реализовать свой потенциал.",
  },
];

function CareerCard({ card, className = "" }: { card: typeof cards[0]; className?: string }) {
  return (
    <div className={`border border-[#1B4332] rounded-[30px] px-5 py-5 flex flex-col justify-center gap-4 ${className}`}>
      <div className="flex items-baseline justify-between gap-2">
        <h3
          className="font-sans font-[400] text-[#1B4332]"
          style={{
            fontSize: "clamp(15px, 1.563vw, 30px)",
            lineHeight: "clamp(15px, 1.563vw, 30px)",
          }}
        >
          {card.title}
        </h3>
        <span
          className="font-sans font-[400] text-[#1B4332] shrink-0"
          style={{
            fontSize: "clamp(15px, 1.563vw, 30px)",
            lineHeight: "clamp(15px, 1.563vw, 30px)",
          }}
        >
          {card.num}
        </span>
      </div>
      <p
        className="font-sans font-[200] text-[#0F1F17]"
        style={{
          fontSize: "clamp(12px, 1.146vw, 22px)",
          lineHeight: "clamp(18px, 1.563vw, 30px)",
        }}
      >
        {card.text}
      </p>
    </div>
  );
}

export default function Career() {
  return (
    <SectionBlock id="career" title="Карьера" number="03">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        <FadeIn className="flex flex-col gap-4">
          {cards.slice(0, 2).map((card) => (
            <CareerCard key={card.num} card={card} className="flex-1" />
          ))}
        </FadeIn>
        {cards.slice(2).map((card, i) => (
          <FadeIn key={card.num} delay={(i + 1) * 100}>
            <CareerCard card={card} className="h-full" />
          </FadeIn>
        ))}
      </div>
    </SectionBlock>
  );
}
