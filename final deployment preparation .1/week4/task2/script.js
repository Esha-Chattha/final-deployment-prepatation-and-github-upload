// Placeholder business details
const business = {
    id: 1,
    name: "Sample Business",
    address: "123 Main Street",
    services: ["Web Development", "Design"],
    reviews: []
  };
  
  // Initialize business details
  document.getElementById("business-name").textContent = business.name;
  document.getElementById("business-address").textContent = business.address;
  document.getElementById("business-services").textContent = business.services.join(", ");
  
  // Handle review form submission
  document.getElementById("review-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Get form input values
    const rating = parseInt(document.getElementById("rating").value);
    const comment = document.getElementById("comment").value.trim();
  
    // Validate inputs
    if (!rating || !comment) {
      alert("Please provide both a rating and a comment.");
      return;
    }
  
    // Add review to business reviews array
    const newReview = { rating, comment };
    business.reviews.push(newReview);
  
    // Clear form
    document.getElementById("review-form").reset();
  
    // Update reviews and average rating
    displayReviews();
  });
  
  // Display reviews dynamically
  function displayReviews() {
    const reviewsList = document.getElementById("reviews-list");
    reviewsList.innerHTML = "";
  
    // Calculate average rating
    const totalRatings = business.reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = business.reviews.length ? (totalRatings / business.reviews.length).toFixed(1) : "N/A";
    document.getElementById("average-rating").textContent = averageRating;
  
    // Display each review
    business.reviews.forEach((review, index) => {
      const reviewItem = document.createElement("li");
      reviewItem.innerHTML = `
        <strong>Rating: ${review.rating} / 5</strong>
        <p>${review.comment}</p>
      `;
      reviewsList.appendChild(reviewItem);
    });
  }
  