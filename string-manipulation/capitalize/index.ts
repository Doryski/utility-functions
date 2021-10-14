const capitalize = (word: string): string =>
  word.slice(0, 1).toUpperCase() + word.slice(1);

const capitalizeAll = (sentence: string): string =>
  sentence
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");

export { capitalizeAll, capitalize };
