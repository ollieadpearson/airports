let airportsData = []; // Will hold airport data from JSON

// Fetch JSON data from a file or API (you can use static or dynamic JSON data)
fetch('airports.json')
  .then(response => response.json())
  .then(data => {
      airportsData = data;
  });

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
