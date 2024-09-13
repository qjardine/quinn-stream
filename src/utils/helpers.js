export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

export function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}