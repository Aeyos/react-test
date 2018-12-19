export const capitalize = (string) => `${string[0].toUpperCase()}${string.slice(1)}`;
export const onlyLetters = (string) => (string.match(/[A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]/gi) || []).join('');
