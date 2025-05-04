/**
 * Generates initials from a user's first and last name
 * @param firstName The user's first name
 * @param lastName The user's last name
 * @returns The initials (max 2 characters) in uppercase
 */
export function getInitials(firstName?: string, lastName?: string): string {
  if (!firstName && !lastName) return "";

  const first = firstName?.[0] || "";
  const last = lastName?.[0] || "";

  return `${first}${last}`.toUpperCase();
}
