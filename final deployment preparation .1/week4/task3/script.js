// script.js

// Mock data: List of businesses
const businesses = [
    { id: 1, name: "Tech Innovators", category: "Technology" },
    { id: 2, name: "Gourmet Paradise", category: "Food" },
    { id: 3, name: "Fit and Fine", category: "Health" },
    { id: 4, name: "Code Crafters", category: "Technology" },
    { id: 5, name: "Green Fingers", category: "Gardening" },
  ];
  
  // Select the search input and results list
  const searchBar = document.getElementById("search-bar");
  const resultsList = document.getElementById("results-list");
  
  // Display all businesses initially
  function displayAllBusinesses() {
    resultsList.innerHTML = ""; // Clear existing results
  
    businesses.forEach(business => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <strong>${business.name}</strong>
        <p>Category: ${business.category}</p>
      `;
      resultsList.appendChild(listItem);
    });
  }
  
  // Filter businesses based on search input
  function filterBusinesses() {
    const query = searchBar.value.trim().toLowerCase();
    resultsList.innerHTML = ""; // Clear previous results
  
    // Filter businesses by name or category
    const filtered = businesses.filter(business =>
      business.name.toLowerCase().includes(query) ||
      business.category.toLowerCase().includes(query)
    );
  
    // Display filtered results
    if (filtered.length > 0) {
      filtered.forEach(business => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
          <strong>${business.name}</strong>
          <p>Category: ${business.category}</p>
        `;
        resultsList.appendChild(listItem);
      });
    } else {
      resultsList.innerHTML = "<li>No results found.</li>";
    }
  }
  
  // Initialize page
  displayAllBusinesses();
//unit test
// Test the search functionality
function testSearchFunctionality() {
    // Mock search bar input and results rendering
    const mockInput = "Tech";
    searchBar.value = mockInput;
    filterBusinesses();
  
    const resultItems = document.querySelectorAll("#results-list li");
    console.assert(
      resultItems.length === 2,
      `Test Failed: Expected 2 results, got ${resultItems.length}`
    );
  
    const resultNames = Array.from(resultItems).map(item =>
      item.querySelector("strong").textContent
    );
  
    console.assert(
      resultNames.includes("Tech Innovators") &&
        resultNames.includes("Code Crafters"),
      `Test Failed: Results mismatch. Expected "Tech Innovators" and "Code Crafters".`
    );
  
    console.log("Test Passed: Search Functionality Works Correctly");
  }
  
  // Test for displaying all businesses
  function testDisplayAllBusinesses() {
    displayAllBusinesses();
  
    const resultItems = document.querySelectorAll("#results-list li");
    console.assert(
      resultItems.length === businesses.length,
      `Test Failed: Expected ${businesses.length} results, got ${resultItems.length}`
    );
  
    console.log("Test Passed: All Businesses Displayed");
  }
  
  // Run Tests
  testSearchFunctionality();
  testDisplayAllBusinesses();
  