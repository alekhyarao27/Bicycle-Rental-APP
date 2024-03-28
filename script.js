
// Function to redirect to the login page
function redirectToLogin() {
    window.location.href = 'login.html';
}

// Function to redirect to the index page
function redirectToIndex() {
    window.location.href = 'index.html';
}

// Function to handle registration form submission
function register() {
    // Your registration logic here
    // After successful registration, redirect to the login page
    redirectToLogin();
}

// Function to handle login form submission
function login() {
    // Your login logic here
    // After successful login, redirect to the index page
    redirectToIndex();
}
// Function to handle form submission
function updateProfile() {
    window.location.href = 'index.html';
}

// Add event listener to the form for form submission
document.getElementById('profile-form').addEventListener('submit', updateProfile);


function viewRentalHistory() {
    // Simulate fetching user rental history from backend
    var data = {
        rentalHistory: [
            { bicycleType: 'Mountain Bike', rentalDate: '2024-03-25', returnDate: '2024-03-27' },
            { bicycleType: 'Road Bike', rentalDate: '2024-03-20', returnDate: '2024-03-24' }
            // Add more data as needed
        ]
    };

    // Update UI with rental history data
    var rentalHistoryList = document.getElementById('rental-history');
    rentalHistoryList.innerHTML = '';
    data.rentalHistory.forEach(rental => {
        var li = document.createElement('li');
        li.textContent = `${rental.bicycleType} - ${rental.rentalDate} to ${rental.returnDate}`;
        rentalHistoryList.appendChild(li);
    });
}

function viewCurrentBookings() {
    // Simulate fetching user current bookings from backend
    var data = {
        currentBookings: [
            { bicycleType: 'City Bike', bookingDate: '2024-03-28', returnDate: '2024-03-30' },
            { bicycleType: 'Electric Bike', bookingDate: '2024-03-26', returnDate: '2024-03-29' }
            // Add more data as needed
        ]
    };

    // Update UI with current bookings data
    var currentBookingsList = document.getElementById('current-bookings');
    currentBookingsList.innerHTML = '';
    data.currentBookings.forEach(booking => {
        var li = document.createElement('li');
        li.textContent = `${booking.bicycleType} - ${booking.bookingDate} to ${booking.returnDate}`;
        currentBookingsList.appendChild(li);
    });
}

function reserveBicycle() {
    var bicycleType = document.getElementById('bicycle-type').value;
    var bookingDate = document.getElementById('booking-date').value;
    var returnDate = document.getElementById('return-date').value;

    // Simulate reservation process
    alert('Bicycle reserved successfully!');
}

// Function to navigate to the rent page
function navigateToRent() {
    window.location.href = 'rent.html';
}
function navigateToHeart() {
    window.location.href = 'heart.html';
}

// Function to navigate to profile page
function navigateToProfile() {
    // Redirect to profile page
    window.location.href = 'profile.html';
}

function navigateToCart() {
    // Redirect to cart page
    window.location.href = 'cart.html';
}

// Function to add item to wishlist
function toggleWishlist(bicycleName) {
    // Retrieve existing wishlist items from localStorage or initialize as empty array
    var wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    // Check if the item is already in the wishlist
    if (!wishlistItems.some(item => item.name === bicycleName)) {
        // If the item is not already in the wishlist, add it
        wishlistItems.push({ name: bicycleName });
        // Update localStorage with the updated wishlist items
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    }
    // Redirect to the wishlist page
    window.location.href = 'heart.html';
}


// Function to add bicycle to cart
function addToCart(bicycleName, price) {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var newItem = { name: bicycleName, price: price };
    cartItems.push(newItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert('Bicycle added to cart!');
}


function makePayment() {
    var cardNumber = document.getElementById('card-number').value;
    var expiryDate = document.getElementById('expiry-date').value;
    var cvv = document.getElementById('cvv').value;

    // Simulate payment process
    alert('Payment successful!');
}

window.onload = function() {
    // Simulate fetching bicycles from backend and updating UI
    var data = {
        bicycles: [
            { type: 'Mountain Bike', rental_rate: '$20/day' },
            { type: 'Road Bike', rental_rate: '$25/day' },
            { type: 'City Bike', rental_rate: '$15/day' },
            { type: 'Electric Bike', rental_rate: '$30/day' }
            // Add more data as needed
        ]
    };

    var bicyclesList = document.getElementById('bicycles');
    data.bicycles.forEach(bicycle => {
        var option = document.createElement('option');
        option.value = bicycle.type;
        option.textContent = `${bicycle.type} - Rental Rate: ${bicycle.rental_rate}`;
        bicyclesList.appendChild(option);
    });
};
