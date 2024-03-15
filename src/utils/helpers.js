export function stringToColor(str) {
  // Simple hashing function to generate a numeric hash code
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  // Convert the hash code to a 6-digit hexadecimal color code
  let color = "#";
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff; // Extract byte from hash
    color += ("00" + value.toString(16)).substr(-2); // Convert byte to hexadecimal
  }
  return color;
}
