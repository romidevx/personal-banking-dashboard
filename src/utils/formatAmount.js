
export function formatAmount(value) {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
}