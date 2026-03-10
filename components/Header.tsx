"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 14L14 3L26 14V26H18V18H10V26H2V14Z" stroke="black" strokeWidth="1.5" fill="none" />
          </svg>
          <span className="text-sm font-semibold tracking-wide text-black">Большой дом</span>
        </a>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-6">
          <a href="mailto:info@bighouse.ru" className="text-sm text-gray-500 hover:text-black transition-colors">
            info@bighouse.ru
          </a>
          <a
            href="#contact"
            className="text-sm px-5 py-1.5 border border-black text-black hover:bg-black hover:text-white transition-colors"
          >
            Обратная связь
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1.5 text-black"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 flex flex-col gap-4">
          <a href="mailto:info@bighouse.ru" className="text-sm text-gray-500">info@bighouse.ru</a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-sm border border-black px-4 py-2 text-center">
            Обратная связь
          </a>
        </div>
      )}
    </header>
  );
}
