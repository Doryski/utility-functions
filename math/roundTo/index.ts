export default (value: string, roundTo: number): number =>
  Math.round(Number.parseFloat(value) / roundTo) * roundTo;
