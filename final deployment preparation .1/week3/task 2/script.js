// script.js

// Sample data
const businesses = [
    {
      id: 1,
      name: "Tech Solutions",
      location: "New York",
      category: "Tech",
      popularity: "High",
      services: [
        { name: "Website Development", price: 500 },
        { name: "IT Consulting", price: 300 }
      ]
    },
    {
      id: 2,
      name: "Design Studio",
      location: "Los Angeles",
      category: "Design",
      popularity: "Medium",
      services: [
        { name: "Logo Design", price: 250 },
        { name: "Graphic Design", price: 400 }
      ]
    },
    {
      id: 3,
      name: "SEO Experts",
      location: "Chicago",
      category: "Marketing",
      popularity: "High",
      services: [
        { name: "SEO Analysis", price: 150 },
        { name: "Ad Campaigns", price: 350 }
      ]
    }
  ];
  
  // Function to filter results
  function applyFilters() {
    const location = document.getElementById("location").value;
    const priceRange = document.getElementById("price-range").value;
    const popularity = document.getElementById("popularity").value;
  
    // Filter logic
    const filtered = businesses.filter(business => {
      return (
        (location === "" || business.location === location) &&
        (popularity === "" || business.popularity === popularity) &&
        business.services.some(service => {
          if (priceRange === "low") return service.price <= 200;
          if (priceRange === "medium") return service.price > 200 && service.price <= 500;
          if (priceRange === "high") return service.price > 500;
          return true;
        })
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
  
      // Display business name, location, popularity, and service prices
      li.innerHTML = `<strong>${result.name}</strong> (${result.location} - ${result.popularity} Popularity)
        <ul>
          ${result.services
            .map(service => `<li>${service.name}: <span class="price">$${service.price}</span></li>`)
            .join("")}
        </ul>`;
      resultsList.appendChild(li);
    });
  }
  
  // Event listener for the Apply Filters button
  document.getElementById("apply-filters").addEventListener("click", applyFilters);
//unit test
function testFilters() {
    console.assert(
      businesses.filter(b => b.location === "New York").length === 1,
      "Test Failed: Location Filter"
    );
  
    console.assert(
      businesses.filter(b => b.services.some(s => s.price > 200 && s.price <= 500)).length === 3,
      "Test Failed: Medium Price Range Filter"
    );
  
    console.assert(
      businesses.filter(b => b.popularity === "High").length === 2,
      "Test Failed: Popularity Filter"
    );
  
    console.log("All tests passed!");
  }
  
  testFilters();
  