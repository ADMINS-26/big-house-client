export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-8">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-3 items-start gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 shrink-0" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 14L14 3L26 14V26H18V18H10V26H2V14Z" stroke="black" strokeWidth="1.5" fill="none" />
          </svg>
          <span className="text-xs font-semibold tracking-wide text-black">Большой дом</span>
        </div>

        {/* Contact info */}
        <div className="text-xs text-gray-500 space-y-1 text-center">
          <p>Email: info@bighouse.ru</p>
          <p>Телефон: +7 (812) 111-22-33</p>
          <p>Адрес: Россия, 191186, Санкт-Петербург,</p>
          <p>ул. Большая Морская, 18</p>
        </div>

        {/* Scroll to top */}
        <div className="flex justify-end">
          <a
            href="#"
            aria-label="Наверх"
            className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:border-black transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 15l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
