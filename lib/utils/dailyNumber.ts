function getDailyNumber() {
  const today = new Date();
  const dateString = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

  // Create a simple hash from the date string
  let hash = 0;
  for (let i = 0; i < dateString.length; i++) {
    hash = (hash << 5) - hash + dateString.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  // Use the hash to generate a number between 2 and 7
  const normalizedHash = Math.abs(hash) / 2147483647; // Normalize to 0-1
  const range = 5; // 7 - 2 = 5
  const value = 2 + normalizedHash * range;

  // Round to 2 decimal places
  return parseFloat(value.toFixed(2));
}

export default getDailyNumber;
