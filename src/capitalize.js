export default function capitalize(string) {
  const lString = string.toLowerCase();
  return lString.charAt(0).toUpperCase() + lString.slice(1);
}
