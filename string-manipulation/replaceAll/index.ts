export default (text: string, value: string, newValue: string): string =>
  text.replace(new RegExp(value, "g"), newValue);
