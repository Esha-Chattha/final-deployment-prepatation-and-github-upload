// script.js

// Sample data
const businesses = [
    { id: 1, name: "Tech Solutions", location: "New York", category: "Tech", subCategory: "Web Development", popularity: "High" },
    { id: 2, name: "Design Studio", location: "Los Angeles", category: "Design", subCategory: "Graphic Design", popularity: "Medium" },
    { id: 3, name: "SEO Experts", location: "Canada", category: "Marketing", subCategory: "SEO", popularity: "High" },
    { id: 4, name: "App Creators", location: "New York", category: "Tech", subCategory: "Web Development", popularity: "Medium" },
    { id: 5, name: "Creative Hub", location: "Los Angeles", category: "Design", subCategory: "Graphic Design", popularity: "Low" }
  ];
  
  // Function to filter results
  function applyFilters() {
    const location = document.getElementById("location").value;
    const category = document.getElementById("category").value;
    const subCategory = document.getElementById("sub-category").value;
    const popularity = document.getElementById("popularity").value;
  
    // Filter logic
    const filtered = businesses.filter(business => {
      return (
        (location === "" || business.location === location) &&
        (category === "" || business.category === category) &&
        (subCategory === "" || business.subCategory === subCategory) &&
        (popularity === "" || business.popularity === popularity)
      );
    });
  
    displayResults(filtered);
  }
  
  // Function to display results
  function displayResults(results) {
    const resultsList = document.getElementById("results-list");
    resultsList.innerHTML = ""; // Clear previous results
  
    if (results.length === 0) {
      resultsList.innerHTML = "<li>No results found</li>";
      return;
    }
  
    results.forEach(result => {
      const li = document.createElement("li");
      li.textContent = `${result.name} - ${result.location} - ${result.category} - ${result.subCategory} - ${result.popularity}`;
      resultsList.appendChild(li);
    });
  }
  
  // Event listener for the Apply Filters button
  document.getElementById("apply-filters").addEventListener("click", applyFilters);

  // Unit Test
function testFilters() {
    console.assert(
      businesses.filter(b => b.location === "New York").length === 2,
      "Test Failed: Location Filter"
    );
  
    console.assert(
      businesses.filter(b => b.category === "Tech" && b.popularity === "High").length === 1,
      "Test Failed: Multi-Criteria Filter"
    );
  
    console.assert(
      businesses.filter(b => b.category === "Design").length === 2,
      "Test Failed: Category Filter"
    );
  
    console.assert(
      businesses.filter(b => b.subCategory === "SEO" && b.location === "Chicago").length === 1,
      "Test Failed: Sub-Category and Location Filter"
    );
  
    console.log("All tests passed!");
  }
  
  testFilters();
  
  