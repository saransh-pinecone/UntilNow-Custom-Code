// Replace with your Webflow API token
const API_TOKEN = "YOUR_WEBFLOW_API_TOKEN";

// Function to fetch data from Webflow CMS collections
async function fetchCollectionData(collectionId) {
  const response = await fetch(
    `https://api.webflow.com/collections/${collectionId}/items`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Error fetching collection ${collectionId}: ${response.statusText}`
    );
  }

  const data = await response.json();
  return data.items;
}
