
const apiResult = fetch("https://api.bd.irfans.dev");

apiResult
  .then((response) => response.json()) // Parse JSON from response
  .then((data) => console.log(data)) // Log the actual data
  .catch((error) => console.error("Error fetching data:", error)); // Handle errors