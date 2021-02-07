export const checkOrange = symbol => {
  const symbols = ['/', 'm+', 'x', '-', '+', '='];
  return symbols.includes(symbol);
};

export const checkGray = symbol => {
  const symbols = ['AC', '%', '+/-'];
  return symbols.includes(symbol);
};