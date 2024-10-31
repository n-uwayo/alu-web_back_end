export default function appendToEachArrayValue(array, appendString) {
  const res = []; // Create a new array to hold the results

  for (const value of array) {
    res.push(appendString + value); // Append modified values to the new array
  }

  return res; // Return the new array
}
