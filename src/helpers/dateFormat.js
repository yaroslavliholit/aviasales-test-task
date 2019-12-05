export const dateFormat = (date) => {
  return new Date(date).toLocaleDateString('ru', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
};
