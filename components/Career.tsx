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

export default function Career() {
  return (
    <section id="career" className="max-w-7xl mx-auto px-6 py-16">
      {/* Section header */}
      <div className="border-t border-black pt-3 flex items-baseline justify-between mb-10">
        <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-black">Карьера</h2>
        <span className="text-xs text-gray-400 tracking-widest">03</span>
      </div>

      {/* Cards layout: 2 stacked left + 3 in row right */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left: 2 stacked */}
        <div className="flex flex-col gap-4 md:w-2/5">
          {cards.slice(0, 2).map((card) => (
            <div
              key={card.num}
              className="border border-gray-200 rounded-2xl p-5 flex flex-col gap-3 flex-1"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-black leading-snug">{card.title}</h3>
                <span className="text-xs text-gray-400 shrink-0">{card.num}</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Right: 3 in row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:w-3/5">
          {cards.slice(2).map((card) => (
            <div
              key={card.num}
              className="border border-gray-200 rounded-2xl p-5 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-black leading-snug">{card.title}</h3>
                <span className="text-xs text-gray-400 shrink-0">{card.num}</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
