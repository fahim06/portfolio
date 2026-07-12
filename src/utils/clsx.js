export function clsx(...parts) {
  return parts.flat(Infinity).filter(Boolean).join(' ');
}
