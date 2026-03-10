export default function Hero() {
  return (
    <section className="pt-14">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="relative w-full rounded-2xl overflow-hidden" style={{ minHeight: "68vh" }}>
          {/* Image placeholder */}
          <div className="absolute inset-0 bg-gray-400" />

          {/* Dark gradient overlay on left for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-lg">
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
              Большой дом&nbsp;–
            </h1>
            <p className="text-sm text-white/80 leading-relaxed mb-6 max-w-xs">
              динамичная многопрофильная проектно-строительная компания,
              работающая в следующих секторах
            </p>

            {/* Sector pills */}
            <div className="flex flex-wrap gap-2 mb-7">
              {["ТЕХНИЧЕСКИЙ", "ЖИЛОЙ", "КОММЕРЧЕСКИЙ"].map((sector) => (
                <span
                  key={sector}
                  className="text-xs font-semibold tracking-widest text-white border border-white/50 rounded-full px-3 py-1 bg-white/10 backdrop-blur-sm"
                >
                  {sector}
                </span>
              ))}
            </div>

            <a
              href="#join"
              className="inline-block text-sm px-6 py-2.5 border border-white text-white hover:bg-white hover:text-black transition-colors"
            >
              Оставить заявку
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
