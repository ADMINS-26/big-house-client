/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div
        className="site-container flex items-center justify-between"
        style={{ height: "clamp(56px, 8.073vw, 155px)" }}
      >
        {/* Logo + name */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <img
            src="/images/logo.svg"
            alt="Большой дом"
            style={{ height: "clamp(28px, 2.865vw, 55px)" }}
          />
          <span
            className="font-display font-[400] text-[#0F1F17]"
            style={{ fontSize: "clamp(14px, 1.302vw, 25px)" }}
          >
            Большой дом
          </span>
        </a>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="mailto:info@bighouse.ru"
            className="font-sans font-[200] text-gray-500 hover:text-[#1B4332] transition-colors"
            style={{ fontSize: "clamp(14px, 1.302vw, 25px)" }}
          >
            info@bighouse.ru
          </a>
          <a
            href="#contact"
            className="font-sans font-[200] px-5 py-1.5 border border-[#0F1F17] text-[#0F1F17] hover:bg-[#0F1F17] hover:text-white transition-colors rounded-[20px]"
            style={{ fontSize: "clamp(14px, 1.302vw, 25px)" }}
          >
            Обратная связь
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1.5 text-[#0F1F17]"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <div style={{ position: "relative", width: "20px", height: "15px" }}>
            <span style={{
              position: "absolute", left: 0, right: 0, height: "1.5px",
              backgroundColor: "currentColor",
              top: open ? "calc(50% - 0.75px)" : 0,
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
              transition: "top 0.3s ease, transform 0.3s ease",
            }} />
            <span style={{
              position: "absolute", left: 0, right: 0, height: "1.5px",
              backgroundColor: "currentColor",
              top: "calc(50% - 0.75px)",
              opacity: open ? 0 : 1,
              transition: "opacity 0.2s ease",
            }} />
            <span style={{
              position: "absolute", left: 0, right: 0, height: "1.5px",
              backgroundColor: "currentColor",
              top: open ? "calc(50% - 0.75px)" : "calc(100% - 1.5px)",
              transform: open ? "rotate(-45deg)" : "rotate(0deg)",
              transition: "top 0.3s ease, transform 0.3s ease",
            }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="animate-slide-down md:hidden border-t border-gray-200 bg-white px-6 py-4 flex flex-col gap-4">
          <a href="mailto:info@bighouse.ru" className="font-sans font-[200] text-gray-500 text-sm">info@bighouse.ru</a>
          <a href="#contact" onClick={() => setOpen(false)} className="font-sans font-[200] text-sm border border-[#0F1F17] px-4 py-2 text-center rounded-[20px]">
            Обратная связь
          </a>
        </div>
      )}
    </header>
  );
}
