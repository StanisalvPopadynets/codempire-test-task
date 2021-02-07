export const checkOrange = symbol => {
  switch (symbol) {
    case '/': return true;
    case 'm+': return true;
    case 'x': return true;
    case '-': return true;
    case '+': return true;
    case '=': return true;
    default: return false;
  }
};

export const checkGray = symbol => {
  switch (symbol) {
    case 'AC': return true;
    case '%': return true;
    case '+/-': return true;
    default: return false;
  }
};