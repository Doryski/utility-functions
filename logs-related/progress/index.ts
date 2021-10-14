export default (n: number, max: number): string =>
  `${n} / ${max} | ${((n / max) * 100).toFixed(2)}%`;
