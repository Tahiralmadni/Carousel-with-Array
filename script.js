// Array of image URLs
const images = [
  "./images/img (1).jpg",
  "./images/img (2).jpg",
  "./images/img (3).jpg",
  "./images/img (4).jpg",
  "./images/img (5).jpg",
  "./images/img (6).jpg",
];

// Initialize carousel elements
const carouselItems = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSlide = 0;

// Function to show previous slide
const previous = () => {
  currentSlide--; // Decrement current slide index
  if (currentSlide < 0) {
    currentSlide = images.length - 1; // Wrap around to the last image
  }
  console.log(currentSlide);
  carouselItems.src = images[currentSlide]; // Update image source
};

// Function to show next slide
const next = () => {
  currentSlide++; // Increment current slide index
  if (currentSlide > images.length - 1) {
    currentSlide = 0; // Wrap around to the first image
  }
  console.log(currentSlide);
  carouselItems.src = images[currentSlide]; // Update image source
};

// Event listeners for previous and next buttons
prevBtn.addEventListener("click", previous);
nextBtn.addEventListener("click", next);
