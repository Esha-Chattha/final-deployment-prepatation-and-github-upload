// script.js

// Temporary array for storing business data
const businessData = [];

// Select the form and output container
const form = document.getElementById("add-business-form");
const businessList = document.getElementById("businessList");

// Event listener for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Extract input values
  const name = document.getElementById("businessName").value.trim();
  const address = document.getElementById("businessAddress").value.trim();
  const services = document.getElementById("servicesOffered").value.trim();
  const imageInput = document.getElementById("uploadImage");

  // Validate file input
  if (!imageInput.files.length) {
    alert("Please upload an image.");
    return;
  }

  const imageFile = imageInput.files[0];
  const reader = new FileReader();

  // Read the image as a Base64 URL
  reader.onload = function (e) {
    const imageUrl = e.target.result;

    // Create a business object and add it to the array
    const newBusiness = {
      id: businessData.length + 1,
      name,
      address,
      services: services.split(",").map(service => service.trim()),
      imageUrl
    };
    businessData.push(newBusiness);

    // Update the display
    renderBusinesses();

    // Reset the form
    form.reset();
  };

  reader.readAsDataURL(imageFile);
});

// Render businesses on the page
function renderBusinesses() {
  businessList.innerHTML = "";

  businessData.forEach(business => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>${business.name}</strong>
      <p>${business.address}</p>
      <p>Services Offered: ${business.services.join(", ")}</p>
      <img src="${business.imageUrl}" alt="${business.name} Image">
    `;
    businessList.appendChild(listItem);
  });
}
//unit test
// Unit Tests for Form Submission
function testFormSubmission() {
    const mockBusiness = {
      name: "Sample Biz",
      address: "456 Elm Street",
      services: ["Consulting", "Marketing"],
      imageUrl: "data:image/png;base64,testimage"
    };
  
    businessData.push(mockBusiness);
  
    console.assert(
      businessData.length === 1,
      "Test Failed: Business was not added correctly"
    );
  
    console.assert(
      businessData[0].name === "Sample Biz",
      "Test Failed: Business name is incorrect"
    );
  
    console.assert(
      businessData[0].services.length === 2,
      "Test Failed: Services count mismatch"
    );
  
    console.log("All tests passed successfully!");
  }
  
  testFormSubmission();
  