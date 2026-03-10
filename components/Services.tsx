const projects = [
  { name: "Коттедж «Северный лес», 260 м²", price: "от 32.500.000 руб" },
  { name: "Дом «Зелёная терраса», 180 м²", price: "от 12.000.000 руб" },
  { name: "Коттедж «Северный лес», 220 м²", price: "от 18.900.000 руб" },
  { name: "Коттедж «Тихая долина», 420 м²", price: "от 41.000.000 руб" },
];

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-16">
      {/* Section header */}
      <div className="border-t border-black pt-3 flex items-baseline justify-between mb-3">
        <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-black">
          Мы выполним весь комплекс работ под ключ
        </h2>
        <span className="text-xs text-gray-400 tracking-widest">02</span>
      </div>
      <p className="text-xs text-gray-500 mb-10">
        — от фундамента до внутренней отделки помещений
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer group"
          >
            {/* Image placeholder */}
            <div className="absolute inset-0 bg-gray-300 group-hover:scale-105 transition-transform duration-500" />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white text-xs font-medium leading-snug">{project.name}</p>
              <p className="text-white/70 text-xs mt-1">цена: {project.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
