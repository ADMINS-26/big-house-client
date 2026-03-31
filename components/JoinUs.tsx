"use client";

import { useActionState, useState } from "react";
import { submitContact } from "@/app/actions";
import SectionBlock from "./SectionBlock";

type FieldErrors = {
  name?: string;
  lastName?: string;
  phone?: string;
};

export default function JoinUs() {
  const [state, action, pending] = useActionState(submitContact, null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [phone, setPhone] = useState("");

  const formatPhone = (digits: string): string => {
    if (!digits) return "";
    let result = "";
    for (let i = 0; i < digits.length && i < 11; i++) {
      if (i === 0) result += "+" + digits[i];
      else if (i === 1) result += " (" + digits[i];
      else if (i === 4) result += ") " + digits[i];
      else if (i === 7) result += "-" + digits[i];
      else if (i === 9) result += "-" + digits[i];
      else result += digits[i];
    }
    return result;
  };

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let digits = e.target.value.replace(/\D/g, "");
    if (digits.length > 0) {
      if (digits[0] === "8") digits = "7" + digits.slice(1);
      else if (digits[0] !== "7") digits = "7" + digits;
    }
    setPhone(digits.slice(0, 11));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement).value.trim();
    const errors: FieldErrors = {};

    if (name.length < 2) {
      errors.name = "Имя должно содержать не менее 2 символов";
    }
    if (lastName.length < 2) {
      errors.lastName = "Фамилия должна содержать не менее 2 символов";
    }

    const normalized = phone.startsWith("8") ? "7" + phone.slice(1) : phone;
    if (!/^7\d{10}$/.test(normalized)) {
      errors.phone = "Введите корректный российский номер (11 цифр, начиная с 7 или 8)";
    }

    if (Object.keys(errors).length > 0) {
      e.preventDefault();
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
  };

  return (
    <SectionBlock id="join" title="Присоединяйся к нам">
      <p className="font-sans font-[200] text-[#0F1F17] mb-8" style={{ fontSize: "clamp(13px, 1.146vw, 22px)", lineHeight: "clamp(20px, 2.083vw, 40px)" }}>
        Мы ищем специалистов, которые готовы развиваться вместе с компанией.
        Заполните форму ниже, и мы свяжемся с вами для обсуждения карьерных
        возможностей.
      </p>

      {state?.success ? (
        <div className="border border-[#1B4332] bg-[#f0f7f4] text-[#1B4332] px-6 py-4 rounded-[20px] inline-flex items-center gap-3">
          <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="font-sans font-[200]" style={{ fontSize: "clamp(14px, 1.302vw, 25px)" }}>
            Заявка отправлена. Мы свяжемся с вами в ближайшее время.
          </p>
        </div>
      ) : (
        <form action={action} onSubmit={handleSubmit} className="flex flex-col gap-4">
          {state?.error && (
            <div className="border border-red-300 bg-red-50 text-red-700 px-5 py-3 rounded-[20px] flex items-center gap-3">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
              <p className="font-sans font-[200] text-sm">{state.error}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-start flex-wrap">
            <div className="flex flex-col">
              <input
                name="name"
                type="text"
                placeholder="Имя"
                className={`border px-4 py-2.5 outline-none transition-colors placeholder:text-gray-400 rounded-[20px] ${fieldErrors.name ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-[#0F1F17]"}`}
                style={{ fontSize: "clamp(14px, 1.302vw, 25px)", width: "clamp(140px, 14vw, 270px)" }}
              />
              <div className="min-h-[18px] mt-1">
                {fieldErrors.name && <p className="text-xs text-red-600 pl-2 truncate" style={{ maxWidth: "clamp(140px, 14vw, 270px)" }}>{fieldErrors.name}</p>}
              </div>
            </div>

            <div className="flex flex-col">
              <input
                name="lastName"
                type="text"
                placeholder="Фамилия"
                className={`border px-4 py-2.5 outline-none transition-colors placeholder:text-gray-400 rounded-[20px] ${fieldErrors.lastName ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-[#0F1F17]"}`}
                style={{ fontSize: "clamp(14px, 1.302vw, 25px)", width: "clamp(140px, 14vw, 270px)" }}
              />
              <div className="min-h-[18px] mt-1">
                {fieldErrors.lastName && <p className="text-xs text-red-600 pl-2 truncate" style={{ maxWidth: "clamp(140px, 14vw, 270px)" }}>{fieldErrors.lastName}</p>}
              </div>
            </div>

            <div className="flex flex-col">
              <input
                name="phone"
                type="tel"
                value={formatPhone(phone)}
                onChange={handlePhoneInput}
                placeholder="+7 (___) ___-__-__"
                className={`border px-4 py-2.5 outline-none transition-colors placeholder:text-gray-400 rounded-[20px] ${fieldErrors.phone ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-[#0F1F17]"}`}
                style={{ fontSize: "clamp(14px, 1.302vw, 25px)", width: "clamp(140px, 14vw, 270px)" }}
              />
              <div className="min-h-[18px] mt-1">
                {fieldErrors.phone && <p className="text-xs text-red-600 pl-2 truncate" style={{ maxWidth: "clamp(140px, 14vw, 270px)" }}>{fieldErrors.phone}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={pending}
              className="shrink-0 px-6 py-2.5 border border-[#0F1F17] text-[#0F1F17] hover:bg-[#0F1F17] hover:text-white disabled:opacity-50 transition-colors whitespace-nowrap rounded-[20px]"
              style={{ fontSize: "clamp(14px, 1.302vw, 25px)" }}
            >
              {pending ? "Отправка..." : "Отправить заявку"}
            </button>
          </div>
        </form>
      )}
    </SectionBlock>
  );
}
