export function formatPrice(price: number): string {
  return price
    .toFixed(2) // round to 2 decimal places
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // add commas
}

export function formatPercent(percent: number): string {
  const sign = percent > 0 ? "+" : "";
  return `${sign}${percent.toFixed(2)}%`;
}

export function trimLength(num: number, maxDigits = 8) {
  const [intPart, decPart = ""] = num.toString().split(".");

  if (intPart.length >= maxDigits) {
    return intPart;
  }

  const allowedDecLength = maxDigits - intPart.length;

  const trimmedDec = decPart.slice(0, allowedDecLength);

  return trimmedDec ? `${intPart}.${trimmedDec}` : intPart;
}
