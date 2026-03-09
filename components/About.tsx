const stats = [
  { value: "10+", label: "лет опыта" },
  { value: "350+", label: "завершённых проектов" },
  { value: "98%", label: "довольных клиентов" },
  { value: "50+", label: "специалистов в штате" },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              О компании
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Строим надёжно<br />уже более 10 лет
            </h2>
            <p className="mt-5 text-gray-500 leading-relaxed">
              Компания «Большой дом» основана в 2013 году. За это время мы
              построили и отремонтировали сотни объектов — от небольших квартир
              до коммерческих помещений и частных домов.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              В нашей команде работают опытные прорабы, инженеры и дизайнеры.
              Мы берёмся только за те проекты, которые можем выполнить в полном
              соответствии с требованиями заказчика и в оговорённые сроки.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-colors"
            >
              Обсудить проект
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="text-4xl font-bold text-amber-600">{stat.value}</div>
                <div className="mt-1 text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
