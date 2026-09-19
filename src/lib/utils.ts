export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes
    .filter((value) => value !== false && value !== null && value !== undefined)
    .join(" ");
}