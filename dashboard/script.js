// Replace with your actual Contentful Space ID and Access Token
const spaceId = 'cjcq93kvy9yu';
const accessToken = 'HbDW1Ble3qZvZR6j53wPmwmP1k4ABkds0iCYx8TPX9U';
const contentType = 'Components'; // Assuming 'Components' is your content type

// URL for Contentful API
const apiUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?content_type=${contentType}&access_token=${accessToken}`;

console.log('API URL:', apiUrl); // Log the API URL

// Function to fetch data from Contentful API
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching data from Contentful:', error);
    return [];
  }
}

// Function to populate data into the HTML structure
async function populateData() {
  // Fetch data from Contentful
  const entries = await fetchData();

  // Log the entries to see if they are fetched correctly
  console.log('Fetched Entries:', entries);

  // Your HTML structure update logic here...

  // Example: Loop through entries and log component names
  entries.forEach((entry) => {
    const componentName = entry.fields.componentName;
    console.log('Component Name:', componentName);
    // Add your logic to update HTML structure with the fetched data
  });
}

// Call the populateData function to initiate the process
populateData();
