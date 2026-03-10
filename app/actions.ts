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
  const phone = formData.get("phone")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !phone) {
    return { error: "Пожалуйста, заполните имя и телефон." };
  }

  // Здесь можно добавить отправку на email / webhook / CRM
  console.log("Новая заявка:", { name, phone, email, message });

  return { success: true };
}
