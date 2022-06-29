// Enter the following line in the terminal to activate the server
// python -m http.server
// http://127.0.0.1:8000





//////////////////////////////////////////////////////////////////////////////////////////


var tbody_outbound = d3.select("#table-outbound");

function fillDataCard(warehouse) {
  d3.json("data/data_card.json").then((data) => {
    //console.log(data);
    
    tbody_outbound.html("");

    data.forEach((dataRow) => {
      //console.log(dataRow)
      if (dataRow.Warehouse == warehouse) {
        console.log(dataRow)
        let row = tbody_outbound.append("tr");
        let cell = row.append("th");
        cell.text(dataRow.Description);
        cell = row.append("td");
        cell.text(dataRow.Monday);
        cell = row.append("td");
        cell.text(dataRow.Tuesday);
        cell = row.append("td");
        cell.text(dataRow.Wednesday);
        cell = row.append("td");
        cell.text(dataRow.Thursday);
        cell = row.append("td");
        cell.text(dataRow.Friday);
      }
    });
  });  
};
fillDataCard(10);






d3.selectAll("#selDataset").on("change", updateData);

function updateData() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");

  // Assign the dropdown menu item ID to a variable
  var dropdownMenuID = dropdownMenu.property("id");

  // Assign the dropdown menu option to a variable
  var selectedOption = dropdownMenu.property("value");

  //fillTable(selectedOption);
  fillDataCard(selectedOption);
  

  // console.log(dropdownMenuID);
  // console.log(selectedOption);
}
