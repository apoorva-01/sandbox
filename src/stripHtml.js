export function stripHtml(input) {
  return String(input).replace(/<[^>]*>/g, '');
}
