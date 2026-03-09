export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-white font-bold text-lg">
          Большой <span className="text-amber-500">дом</span>
        </span>
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Большой дом. Все права защищены.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#services" className="hover:text-amber-400 transition-colors">Услуги</a>
          <a href="#about" className="hover:text-amber-400 transition-colors">О нас</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">Контакты</a>
        </div>
      </div>
    </footer>
  );
}
