export const numberFormatter = (number) => {
  const digits = Math.abs(Math.floor(number)).toString().length;

  if (digits < 4) {
    return number.toFixed(2);
  }
  if (digits < 7) {
    return `${(number / 1000).toFixed(2)}K`;
  }

  return `${(number / 1000000).toFixed(2)}M`;
};

export const randomNumber = (min, max) => Math.floor(min + (Math.random() * (max - min + 1)));
