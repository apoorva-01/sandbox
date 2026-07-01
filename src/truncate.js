export function truncate(input, max, suffix = '…') {
  const s = String(input);
  if (s.length <= max) return s;
  return s.slice(0, Math.max(0, max - suffix.length)) + suffix;
}
