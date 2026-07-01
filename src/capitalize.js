export function capitalize(input) {
  const s = String(input);
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}
