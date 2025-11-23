function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;

    debugger; // pause at start to inspect initial variables

    // Loop  items
    for (let i = 0; i < quantity; i++) { 
        totalPrice += pricePerItem;
        debugger; // inspect totalPrice after each addition
    }

    // Apply 10% discount for 10 or more items
    if (quantity >= 10) {
        totalPrice *= 0.9; 
        debugger; // inspect totalPrice after discount
    }

    return totalPrice;
}

// Example test (optional, you can keep it to see results)
console.log(calculateDiscountedPrice(5, 100));   // Should print 500
console.log(calculateDiscountedPrice(10, 100));  // Should print 900

// Export for testing in CodeGrade
module.exports = calculateDiscountedPrice;
