import test from "node:test";
import assert from "node:assert/strict";

import { calculateQuote, formatCurrency } from "../src/calculator.js";

test("calcula mão de obra, subtotal, margem e total", () => {
  const result = calculateQuote({
    hours: 20,
    hourlyRate: 80,
    extraCosts: 200,
    safetyMargin: 10,
  });

  assert.deepEqual(result, {
    labor: 1600,
    subtotal: 1800,
    marginValue: 180,
    total: 1980,
  });
});

test("assume custos e margem iguais a zero quando omitidos", () => {
  assert.equal(calculateQuote({ hours: 8, hourlyRate: 50 }).total, 400);
});

test("aceita valores numéricos recebidos como texto", () => {
  assert.equal(calculateQuote({ hours: "2", hourlyRate: "100" }).total, 200);
});

test("rejeita valores negativos", () => {
  assert.throws(
    () => calculateQuote({ hours: -1, hourlyRate: 50 }),
    /Horas estimadas deve ser um número maior ou igual a zero/,
  );
});

test("formata o resultado em reais", () => {
  const formatted = formatCurrency(1234.5);
  assert.match(formatted, /R\$\s*1\.234,50/);
});
