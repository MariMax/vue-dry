export function toFixed(value, digits = 2) {
  if (value && value.toFixed) {
    return value.toFixed(digits);
  }
  return value;
}
