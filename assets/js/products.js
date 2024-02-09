function getProductDetails(productId) {
    // Send an AJAX request to fetch product details using the ID
    const url = `/product_details/${productId}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Update the designated area on the page with the retrieved details
        const detailsContainer = document.querySelector('.product-details');
        detailsContainer.innerHTML = `
          <h3>${data.title}</h3>
          <p>${data.description}</p>
          <img src="${data.image}" alt="${data.title}">
          <span class="price">$${data.price}</span>
          <button>Add to Cart</button>
        `;
        // Show the details container
        detailsContainer.style.display = 'block';
      })
      .catch(error => {
        console.error(error);
        // Handle any errors in fetching or processing data
      });
  }
  


    function showAll() {
        var bouquets = document.querySelectorAll('.flower-bouquets .bouquet');
        bouquets.forEach(function(bouquet) {
            bouquet.classList.remove('hidden');
        });
    }

    function showFlowerHamper() {
        showAll();
        var bouquets = document.querySelectorAll('.flower-bouquets .bouquet');
        bouquets.forEach(function(bouquet) {
            if (!bouquet.querySelector('p').innerText.includes('Flower Hamper')) {
                bouquet.classList.add('hidden');
            }
        });
    }

    function showStunningArrangement() {
        showAll();
        var bouquets = document.querySelectorAll('.flower-bouquets .bouquet');
        bouquets.forEach(function(bouquet) {
            var productName = bouquet.querySelector('p').innerText;
            if (!productName.includes('Stunning Arrangement') && !productName.includes('Long stem roses') && !productName.includes('Love Heart Box')) {
                bouquet.classList.add('hidden');
            }
        });
    }
    // whatsapp icon
    function orderViaWhatsApp(productName) {
        var whatsappNumber = "+254103003189"; // Replace with your WhatsApp number
        var message = encodeURIComponent("Hello... I would like to order " + productName);
        var whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + message;
        window.open(whatsappUrl, "_blank");
    }
    // hamburger icon
    function toggleNavMenu() {
        console.log("Toggling navigation menu"); // Check if this message appears in the console
        var nav = document.getElementById("nav");
        nav.classList.toggle("active");
      }

      // JavaScript function to handle search functionality
      function searchProducts() {
        // Get the user's input from the search bar
        var input = document.getElementById('inputsearch').value.toLowerCase();
        
        // Get all product elements
        var products = document.querySelectorAll('.bouquet');
        
        // Loop through each product element
        products.forEach(function(product) {
            // Get the product name
            var productName = product.querySelector('p:first-of-type').textContent.toLowerCase();
            
            // Check if the product name contains the search input
            if (productName.includes(input)) {
                // If it matches, display the product
                product.style.display = 'block';
            } else {
                // If it doesn't match, hide the product
                product.style.display = 'none';
            }
        });
    }
    

