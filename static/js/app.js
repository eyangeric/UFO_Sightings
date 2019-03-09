// from data.js
var tableData = data;

// get a reference to table from index.html
var ufoTable = d3.select("#ufo-table").select("tbody");

// append UFO data to table in index.html
tableData.forEach((ufo) => {
    var row = ufoTable.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    })
});

// get reference to filter button from index.html
var ufoFilter = d3.select("#filter-btn");

ufoFilter.on("click", function() {

    d3.event.preventDefault();

    // set up input values
    var inputDate = d3.select("#datetime").property("value");

    // clear text of the tds
    // d3.selectAll("td").property("textContent", "");

    // delete all table rows in the table body
    d3.select("tbody").selectAll("tr").remove();

    // filter the data by the input date value
    var filteredData = tableData.filter(function(ufo) {
        return ufo.datetime === inputDate;
    })

    // append the values of the filtered date to the table
    filteredData.forEach((ufo) => {
        var row = ufoTable.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        })
    });
});