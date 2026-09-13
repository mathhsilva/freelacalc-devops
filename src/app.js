import { calculateQuote, formatCurrency } from "./calculator.js";

const form = document.querySelector("#quote-form");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const quote = calculateQuote(Object.fromEntries(data.entries()));

  document.querySelector("#labor-result").textContent = formatCurrency(quote.labor);
  document.querySelector("#extras-result").textContent = formatCurrency(
    quote.total - quote.labor,
  );
  document.querySelector("#total-result").textContent = formatCurrency(quote.total);
  result.hidden = false;
});

