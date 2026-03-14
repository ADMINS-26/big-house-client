"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions";
import SectionBlock from "./SectionBlock";

export default function JoinUs() {
  const [state, action, pending] = useActionState(submitContact, null);

  return (
    <SectionBlock id="join" title="Присоединяйся к нам">
      <p className="font-sans font-[200] text-[#0F1F17] mb-8" style={{ fontSize: "clamp(13px, 1.146vw, 22px)", lineHeight: "clamp(20px, 2.083vw, 40px)" }}>
        Мы ищем специалистов, которые готовы развиваться вместе с компанией.
        Заполните форму ниже, и мы свяжемся с вами для обсуждения карьерных
        возможностей.
      </p>

      {state?.success ? (
        <p className="text-sm text-gray-700 border border-gray-200 px-6 py-4 inline-block">
          Заявка отправлена. Мы свяжемся с вами в ближайшее время.
        </p>
      ) : (
        <form action={action} className="flex flex-col sm:flex-row gap-3 items-start sm:items-end">
          {state?.error && (
            <p className="text-xs text-red-600 w-full">{state.error}</p>
          )}
          <input
            name="name"
            type="text"
            required
            placeholder="Ваше имя"
            className="border border-gray-300 px-4 py-2.5 outline-none focus:border-[#0F1F17] transition-colors placeholder:text-gray-400 flex-1 min-w-0 rounded-[20px]" style={{ fontSize: "clamp(14px, 1.302vw, 25px)", maxWidth: "270px" }}
          />
          <input
            name="email"
            type="email"
            placeholder="Ваша почта"
            className="border border-gray-300 px-4 py-2.5 outline-none focus:border-[#0F1F17] transition-colors placeholder:text-gray-400 flex-1 min-w-0 rounded-[20px]" style={{ fontSize: "clamp(14px, 1.302vw, 25px)", maxWidth: "270px" }}
          />
          <input
            name="phone"
            type="tel"
            required
            placeholder="Ваш телефон"
            className="border border-gray-300 px-4 py-2.5 outline-none focus:border-[#0F1F17] transition-colors placeholder:text-gray-400 flex-1 min-w-0 rounded-[20px]" style={{ fontSize: "clamp(14px, 1.302vw, 25px)", maxWidth: "270px" }}
          />
          <button
            type="submit"
            disabled={pending}
            className="shrink-0 px-6 py-2.5 border border-[#0F1F17] text-[#0F1F17] hover:bg-[#0F1F17] hover:text-white disabled:opacity-50 transition-colors whitespace-nowrap rounded-[20px]" style={{ fontSize: "clamp(14px, 1.302vw, 25px)" }}
          >
            {pending ? "Отправка..." : "Отправить заявку"}
          </button>
        </form>
      )}
    </SectionBlock>
  );
}
