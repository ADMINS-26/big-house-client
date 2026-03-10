export default function Contacts() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
      {/* Section header */}
      <div className="border-t border-black pt-3 flex items-baseline justify-between mb-10">
        <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-black">Контакты</h2>
        <span className="text-xs text-gray-400 tracking-widest">04</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact info */}
        <div className="space-y-3 text-sm text-gray-700">
          <p>
            <span className="text-black">Email:</span>{" "}
            <a href="mailto:info@bighouse.ru" className="hover:underline">
              info@bighouse.ru
            </a>
          </p>
          <p>
            <span className="text-black">Телефон:</span>{" "}
            <a href="tel:+78121112233" className="hover:underline">
              +7 (812) 111-22-33
            </a>
          </p>
          <p>
            <span className="text-black">Адрес:</span>{" "}
            Россия, 191186, Санкт-Петербург, ул. Большая Морская, 18
          </p>
        </div>

        {/* Map placeholder — replace with <iframe> embed or next/image */}
        <div className="bg-gray-200 rounded-xl overflow-hidden aspect-[4/3] w-full" />
      </div>
    </section>
  );
}
