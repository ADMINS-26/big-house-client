import SectionBlock from "./SectionBlock";

export default function Contacts() {
  return (
    <SectionBlock id="contact" title="Контакты" number="04">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-3 font-sans font-[200] text-[#0F1F17]" style={{ fontSize: "clamp(13px, 1.146vw, 22px)", lineHeight: "clamp(20px, 2.083vw, 40px)" }}>
          <p>
            <span className="font-[400]">Email:</span>{" "}
            <a href="mailto:info@bighouse.ru" className="hover:underline">
              info@bighouse.ru
            </a>
          </p>
          <p>
            <span className="font-[400]">Телефон:</span>{" "}
            <a href="tel:+78121112233" className="hover:underline">
              +7 (812) 111-22-33
            </a>
          </p>
          <p>
            <span className="font-[400]">Адрес:</span>{" "}
            Россия, 191186, Санкт-Петербург, ул. Большая Морская, 18
          </p>
        </div>

        <div className="rounded-xl overflow-hidden aspect-[4/3] w-full">
          <iframe
            src="https://maps.google.com/maps?q=59.9351,30.3147&hl=ru&z=14&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта офиса"
          />
        </div>
      </div>
    </SectionBlock>
  );
}
