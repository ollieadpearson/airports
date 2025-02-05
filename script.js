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
    
    // If the input is empty, clear the table and return
    if (input === "") {
        document.getElementById("resultsTable").getElementsByTagName('tbody')[0].innerHTML = "";
        return;
    }

    // Filter the airports based on the search input
    let filteredAirports = airportsData.filter(airport => {
        return airport.code.toLowerCase().includes(input) || airport.name.toLowerCase().includes(input);
    });

    // Update the table with the filtered results
    let tableBody = document.getElementById("resultsTable").getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ""; // Clear existing table rows

    // If there are no results, show an empty table or a "No results" message
    if (filteredAirports.length === 0) {
        let row = tableBody.insertRow();
        let cell = row.insertCell(0);
        cell.colSpan = 2;
        cell.textContent = "No results found.";
    } else {
        // Add filtered airports to the table
        filteredAirports.forEach(airport => {
            let row = tableBody.insertRow();
            let locationCell = row.insertCell(0);
            let descriptionCell = row.insertCell(1);
            locationCell.textContent = airport.location;
            descriptionCell.textContent = airport.description;
        });
    }
}

