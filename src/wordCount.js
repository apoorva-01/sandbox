export function wordCount(input) {
  const s = String(input).trim();
  return s ? s.split(/\s+/).length : 0;
}
