export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPhoneForLink(phone: string): string {
  return phone.replace(/[^0-9+]/g, "");
}
