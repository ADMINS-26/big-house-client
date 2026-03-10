export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-16">
      {/* Section header */}
      <div className="border-t border-black pt-3 flex items-baseline justify-between mb-10">
        <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-black">О нас</h2>
        <span className="text-xs text-gray-400 tracking-widest">01</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Text */}
        <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
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
          <div className="bg-gray-200 rounded-xl aspect-[3/4]" />
          <div className="bg-gray-300 rounded-xl aspect-square mt-6" />
        </div>
      </div>
    </section>
  );
}
