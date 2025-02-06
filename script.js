// Sample airport data directly in the JavaScript
let airportsData = [
    {
        "code": "ABZ",
        "name": "Aberdeen Airport",
        "location": "Aberdeen Airport (ABZ)",
        "description": "Vaping is permitted within the dedicated smoking area which is adjacent to the main departure lounge near gate 5. There is a charge of £1 to access the shelter, with funds supporting the facility’s upkeep."
    },
    {
        "code": "BHD",
        "name": "Belfast Airport (BHD)",
        "location": "Belfast Airport",
        "description": "	Vaping is permitted in the airside smoking facility, situated after security beside the Lagan Bar. There is a charge of £1 to access the facility."
    },
    {
        "code": "BHX",
        "name": "Birmingham Airport (BHX)",
        "location": "Birmingham Airport",
        "description": "Birmingham Airport vape rules allow the use of e-cigarettes within designated smoking areas outside of the front of the terminal. Once you have checked in, you will not be allowed to vape until you reach your destination."
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

