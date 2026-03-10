"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions";

export default function JoinUs() {
  const [state, action, pending] = useActionState(submitContact, null);

  return (
    <section id="join" className="max-w-7xl mx-auto px-6 py-16">
      <div className="border-t border-black pt-3 mb-6" />

      <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3 uppercase tracking-tight">
        Присоединяйся к нам
      </h2>
      <p className="text-sm text-gray-600 mb-8 max-w-xl leading-relaxed">
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
            className="border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-black transition-colors placeholder:text-gray-400 flex-1 min-w-0"
          />
          <input
            name="email"
            type="email"
            placeholder="Ваша почта"
            className="border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-black transition-colors placeholder:text-gray-400 flex-1 min-w-0"
          />
          <input
            name="phone"
            type="tel"
            required
            placeholder="Ваш телефон"
            className="border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-black transition-colors placeholder:text-gray-400 flex-1 min-w-0"
          />
          <button
            type="submit"
            disabled={pending}
            className="shrink-0 text-sm px-6 py-2.5 border border-black text-black hover:bg-black hover:text-white disabled:opacity-50 transition-colors whitespace-nowrap"
          >
            {pending ? "Отправка..." : "Отправить заявку"}
          </button>
        </form>
      )}
    </section>
  );
}
