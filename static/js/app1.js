// Import the data from data.js
const tableData=data;

// Reference the HTML table using d3
// Uses d3.select to look for the <tbody> tags
var tbody=d3.select("tbody");

// Make a function for a table to pull data into a table
function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) => {
        let row=tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell=row.append("td");
            cell.text(val);
            }
        );
    });
}

// Function for a button click
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData=tableData;
    if (date) {
        filteredData= filteredData.filter(row => row.datetime === date);
    };
    buildTable(filteredData);
};

/*Pseudo practice
if (a date is entered) {
    Filter the default data to show only the date entered
};*/

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);











