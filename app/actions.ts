"use server";

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
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

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

  // Здесь можно добавить отправку на email / webhook / CRM
  console.log("Новая заявка:", { name, lastName, phone, email, message });

  return { success: true };
}
