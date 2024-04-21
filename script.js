// Array of possible names and occupations
const names = ["Alice", "Bob", "Carol", "David", "Emma", "Frank"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer"];

// Array of freelancers
let freelancers = [];

// Function to generate a random integer within a range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random freelancer
function generateRandomFreelancer() {
    const name = names[getRandomInt(0, names.length - 1)];
    const occupation = occupations[getRandomInt(0, occupations.length - 1)];
    const price = getRandomInt(20, 100); // Random price between $20 and $100
    return { name, occupation, price };
}

// Function to render freelancers
function renderFreelancers() {
    const freelancersList = document.getElementById("freelancers-list");
    freelancersList.innerHTML = ""; // Clear previous list

    freelancers.forEach(freelancer => {
        const freelancerItem = document.createElement("div");
        freelancerItem.innerHTML = `<strong>${freelancer.name}</strong> - ${freelancer.occupation}, starting at $${freelancer.price}`;
        freelancersList.appendChild(freelancerItem);
    });
}

// Function to calculate average starting price
function calculateAveragePrice() {
    const totalPrices = freelancers.reduce((acc, curr) => acc + curr.price, 0);
    const averagePrice = totalPrices / freelancers.length || 0; // Avoid division by zero
    return averagePrice.toFixed(2);
}

// Function to update average price on the page
function updateAveragePrice() {
    const averagePriceElement = document.getElementById("average-price");
    const averagePrice = calculateAveragePrice();
    averagePriceElement.textContent = `Average starting price: $${averagePrice}`;
}

// Function to add a new freelancer
function addFreelancer() {
    const newFreelancer = generateRandomFreelancer();
    freelancers.push(newFreelancer);
    renderFreelancers();
    updateAveragePrice();
}

// Initial render
renderFreelancers();
updateAveragePrice();

// Set interval to add a new freelancer every 3 seconds
setInterval(addFreelancer, 3000);
