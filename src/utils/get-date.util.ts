export function getDayAndHour(date: Date) {
  const dateFormatted = date.toLocaleDateString('en-US', {
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
  });

  return dateFormatted;
}