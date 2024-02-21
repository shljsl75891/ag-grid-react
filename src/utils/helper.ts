export const pascalize = (str: string): string =>
  str.replace(
    /\w+/g,
    (word) => word[0].toUpperCase() + word.slice(1).toLowerCase(),
  );

export const dateLocalize = (str: string): string => {
  return new Date(str).toDateString();
};
