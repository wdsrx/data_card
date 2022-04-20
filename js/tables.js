// Enter the following line in the terminal to activate the server
// python -m http.server
// http://127.0.0.1:8000


function init() {
  // Select the dropdown menu with id 'selDataset'
  var selector = d3.select("#selDataset");
  // Read data from samples.json and store it into argument 'data'
  d3.json("data/card.json").then((data) => {
    console.log(data);
    console.log(Object.keys(data));

    var warehouses = Object.keys(data['Picking']);
    console.log(warehouses)

    warehouses.forEach((sample) => {
      selector
        .append("option")
        .text('Warehouse ' + sample)
        .property("value", sample);
    });
})}
init();



// var tbody = d3.select("tbody");
// function fillTable(warehouse) {
//   d3.json("data/waves.json").then((data) => {
//     // console.log(data);
      
//     tbody.html("");

//     [data].forEach((dataRow) => {
//       //console.log(Object.keys(dataRow.id).length);
//       //console.log(Object.values(dataRow.Warehouse)[1]);
      
//       for (var i = 0; i < Object.keys(dataRow.id).length; i++) {
//         if (Object.values(dataRow.Warehouse)[i] == warehouse) {
//           let row = tbody.append("tr");
//           Object.values(dataRow).forEach((val) => {
//             let cell = row.append("td");
//             cell.text(val[i]);
//           });
//         }
//       }
//     });
//   });  
// };
// fillTable(10);


//////////////////////////////////////////////////////////////////////////////////////////


var tbody_outbound = d3.select("#table-outbound");
function fillDataCard(warehouse) {
  d3.json("data/card.json").then((data) => {
    // console.log(data);
    
    tbody_outbound.html("");

    [data].forEach((dataRow) => {
      // console.log(Object.keys(dataRow).length);
      // console.log(Object.keys(dataRow));
      // console.log(Object.keys(dataRow)[0]);

      // console.log(Object.values(dataRow)[0]);
      // console.log(Object.values(dataRow)[0]['10']);
      // console.log(Object.values(dataRow));

      // console.log(data['Batch Move']);
      // console.log(data['Batch Move']['10']);

      
      let row = tbody_outbound.append("tr");
      let cell = row.append("th");
      cell.text('Total Open (Created) Orders');

      // row = tbody_outbound.append("tr");
      cell = row.append("td");
      cell.text(data['Picking'][warehouse]);
      cell = row.append("td");
      cell.text(data['Picking'][warehouse]);
      cell = row.append("td");
      cell.text(data['Picking'][warehouse]);
      cell = row.append("td");
      cell.text(data['Picking'][warehouse]);
      cell = row.append("td");
      cell.text(data['Picking'][warehouse]);



      row = tbody_outbound.append("tr");
      cell = row.append("th");
      cell.text('Total New (Created) Orders');
      cell = row.append("td");
      cell.text(data['LicensePlateMove'][warehouse]);
      cell = row.append("td");
      cell.text(data['LicensePlateMove'][warehouse]);
      cell = row.append("td");
      cell.text(data['LicensePlateMove'][warehouse]);
      cell = row.append("td");
      cell.text(data['LicensePlateMove'][warehouse]);
      cell = row.append("td");
      cell.text(data['LicensePlateMove'][warehouse]);


      row = tbody_outbound.append("tr");
      cell = row.append("th");
      cell.text('Open Aged Orders > 24 Hours');
      cell = row.append("td");
      cell.text(data['Receiving'][warehouse]);
      cell = row.append("td");
      cell.text(data['Receiving'][warehouse]);
      cell = row.append("td");
      cell.text(data['Receiving'][warehouse]);
      cell = row.append("td");
      cell.text(data['Receiving'][warehouse]);
      cell = row.append("td");
      cell.text(data['Receiving'][warehouse]);


      // for (var i = 0; i < Object.keys(dataRow.id).length; i++) {
      //   if (Object.values(dataRow.Warehouse)[i] == warehouse) {
      //     let row = tbody_outbound.append("tr");
      //     Object.values(dataRow).forEach((val) => {
      //       let cell = row.append("td");
      //       cell.text(val[i]);
      //     });
      //   }
      // }

      
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
