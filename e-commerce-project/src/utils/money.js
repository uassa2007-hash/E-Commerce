export function formateMoney(amountCents) {
  return `RS.${(amountCents / 100).toFixed(2)}`;
}
