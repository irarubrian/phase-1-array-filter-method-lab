// Code your solution here
// Function to find matching drivers (case insensitive)
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

// Function for fuzzy matching (names that start with the provided letters)
function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

// Function to match driver objects by name
function matchName(driverObjects, query) {
    return driverObjects.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}

// Example usage:
const drivers = ['Alice', 'Bob', 'Charlie', 'alex'];
const driverObjects = [
    { name: 'Alice', hometown: 'Seattle' },
    { name: 'Bob', hometown: 'Denver' },
    { name: 'Charlie', hometown: 'Austin' },
    { name: 'Alex', hometown: 'New York' }
];

// Test cases
console.log(findMatching(drivers, 'alice')); // Output: ['Alice', 'alex']
console.log(fuzzyMatch(drivers, 'Al'));      // Output: ['Alice', 'alex']
console.log(matchName(driverObjects, 'Alex')); // Output: [{ name: 'Alex', hometown: 'New York' }]
s