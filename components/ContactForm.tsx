"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "@/app/actions";

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, null);

  return (
    <section id="contact" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Связаться с нами
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Оставьте заявку
          </h2>
          <p className="mt-4 text-gray-500">
            Перезвоним в течение 30 минут и ответим на все вопросы.
          </p>
        </div>

        {state?.success ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <svg
              className="w-12 h-12 text-green-500 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Заявка отправлена!
            </h3>
            <p className="text-gray-500">Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <form
            action={action}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col gap-5"
          >
            {state?.error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                {state.error}
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Ваше имя <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Иван Иванов"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition text-gray-900 placeholder:text-gray-400"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Телефон <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+7 (999) 000-00-00"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                Опишите задачу
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Расскажите о вашем проекте — что нужно сделать, площадь, сроки..."
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition resize-none text-gray-900 placeholder:text-gray-400"
              />
            </div>

            <button
              type="submit"
              disabled={pending}
              className="w-full py-3.5 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {pending ? "Отправляем..." : "Отправить заявку"}
            </button>

            <p className="text-xs text-gray-400 text-center">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
