/* eslint-disable @next/next/no-img-element */
import SectionBlock from "./SectionBlock";
import ArrowUp from "./icons/ArrowUp";

export default function Footer() {
  return (
    <footer>
      <SectionBlock id="footer">
        <div className="grid grid-cols-2 items-center gap-8 py-8">
          <a href="#" className="flex items-center gap-3">
            <img src="/images/logo.svg" alt="Большой дом" style={{ height: "clamp(28px, 2.865vw, 55px)" }} />
            <span
              className="font-display font-[400] text-[#0F1F17]"
              style={{ fontSize: "clamp(14px, 1.302vw, 25px)" }}
            >
              Большой дом
            </span>
          </a>

          <div className="flex items-center justify-between gap-8">
            <div
              className="font-sans font-[200] text-[#0F1F17] space-y-1"
              style={{
                fontSize: "clamp(13px, 1.302vw, 25px)",
                lineHeight: "clamp(20px, 2.083vw, 40px)",
              }}
            >
              <p>Email: info@bighouse.ru</p>
              <p>Телефон: +7 (812) 111-22-33</p>
              <p>Адрес: Россия, 191186, Санкт-Петербург, ул. Большая Морская, 18</p>
            </div>

            <a href="#" aria-label="Наверх" className="shrink-0 hover:opacity-60 transition-opacity">
              <ArrowUp />
            </a>
          </div>
        </div>
      </SectionBlock>
    </footer>
  );
}
