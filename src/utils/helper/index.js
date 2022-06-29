export const truncateString = (str, n = 180) => {
  return str.length > n ? str.substr(0, n - 1) + ' ...' : str;
};
