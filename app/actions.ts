"use server";

import { supabase } from "@/lib/supabase";

export type FormState = {
  success?: boolean;
  error?: string;
} | null;

export async function submitContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name")?.toString().trim();
  const lastName = formData.get("lastName")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();

  if (!name || name.length < 2) {
    return { error: "Имя должно содержать не менее 2 символов." };
  }
  if (!lastName || lastName.length < 2) {
    return { error: "Фамилия должна содержать не менее 2 символов." };
  }

  const digits = phone?.replace(/\D/g, "") ?? "";
  const normalized = digits.startsWith("8") ? "7" + digits.slice(1) : digits;
  if (!/^7\d{10}$/.test(normalized)) {
    return { error: "Введите корректный российский номер телефона." };
  }

  const { error } = await supabase.from("contacts").insert({
    name,
    last_name: lastName,
    phone: normalized,
  });

  if (error) {
    console.error("Supabase error code:", error.code);
    console.error("Supabase error message:", error.message);
    console.error("Supabase error details:", error.details);
    return { error: "Не удалось отправить заявку. Попробуйте позже." };
  }

  return { success: true };
}
