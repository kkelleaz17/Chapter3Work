
let phones = ["Photon 6E", "Photon 6X", "Photon 7E", "Photon 7X", "Photon 8P"];

let sales = [10281, 12255, 25718, 21403, 16142];

let totalSales = 0;

sales.forEach(addToTotal);

for (let i = 0; i < phones.length; i++) { 

   let barChart = "";   
   let barPercent = (sales[i] / totalSales) * 100; 
   let cellTag;   

   switch (phones[i]) { 
      case "Photon 6E": cellTag = "<td class='group1'>"; break;
      case "Photon 6X": cellTag = "<td class='group2'>"; break;
      case "Photon 7E": cellTag = "<td class='group3'>"; break;
      case "Photon 7X": cellTag = "<td class='group4'>"; break;
      case "Photon 8P": cellTag = "<td class='group5'>"; break;
   }

   barChart += `<tr><th>${phones[i]}(${formatNumber(sales[i])})</th>`

   for (j in barPercent) {
      barChart += cellTag + "</td>";
   }
   barChart += "</tr>";

   document.getElementsByTagName("tbody")[0].insertAdjacentHTML("beforeEnd", barChart)
}

function addToTotal(arrValue) {
   totalSales += arrValue;
}

function formatNumber(value) {
   return value.toLocaleString();
}
