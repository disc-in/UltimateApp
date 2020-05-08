export const convertMinsToTime = mins => {
  const hours = Math.floor(mins / 60);
  let minutes = mins % 60;
  if (minutes !== 0) {
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours} h ${minutes}`;
  }
  return `${hours} h`;
};
