const ensureNonNegative = (value, field) => {
  const number = Number(value);

  if (!Number.isFinite(number) || number < 0) {
    throw new TypeError(`${field} deve ser um número maior ou igual a zero.`);
  }

  return number;
};

export function calculateQuote({ hours, hourlyRate, extraCosts = 0, safetyMargin = 0 }) {
  const validHours = ensureNonNegative(hours, "Horas estimadas");
  const validHourlyRate = ensureNonNegative(hourlyRate, "Valor por hora");
  const validExtraCosts = ensureNonNegative(extraCosts, "Custos adicionais");
  const validSafetyMargin = ensureNonNegative(safetyMargin, "Margem de segurança");

  const labor = validHours * validHourlyRate;
  const subtotal = labor + validExtraCosts;
  const marginValue = subtotal * (validSafetyMargin / 100);
  const total = subtotal + marginValue;

  return { labor, subtotal, marginValue, total };
}

export function formatCurrency(value, locale = "pt-BR", currency = "BRL") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);
}
