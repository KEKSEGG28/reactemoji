export const dublLetter = (str) => {
  return Array.from(new Set(str.split(" "))).join(" ");
};
