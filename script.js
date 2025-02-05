// Sample airport data directly in the JavaScript
let airportsData = [
    {
        "code": "LAX",
        "name": "Los Angeles International Airport",
        "location": "Los Angeles, California, USA",
        "description": "The primary international airport serving Los Angeles."
    },
    {
        "code": "JFK",
        "name": "John F. Kennedy International Airport",
        "location": "New York City, New York, USA",
        "description": "One of the busiest airports in the United States, located in Queens, NYC."
    },
    {
        "code": "ORD",
        "name": "O'Hare International Airport",
        "location": "Chicago, Illinois, USA",
        "description": "A major airport in Chicago, known for high passenger traffic."
    }
    // Add more airports as needed...
];

// Function to filter airports and update the table
function filterAirports() {
    let input = document.getElementById("search").value.toLowerCase();
    let filteredAirports = airportsData.filter(airport => {
        return airport.code.toLowerCase().includes(input) || airport.name.toLowerCase().includes(input);
    });

    // Update the table
    let tableBody = document.getElementById("resultsTable").getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ""; // Clear existing table rows

    filteredAirports.forEach(airport => {
        let row = tableBody.insertRow();
        let locationCell = row.insertCell(0);
        let descriptionCell = row.insertCell(1);
        locationCell.textContent = airport.location;
        descriptionCell.textContent = airport.description;
    });
}
