var $tbody=document.querySelector("tbody");
var $dataInput=document.querySelector("#datetime");
var $stateInput=document.querySelector("#state");
var $searchBtn=document.querySelector("#search");
var $cityInput=document.querySelector("#country");
var $shapeInput=document.querySelector("#shape");

$searchBtn.addEventListener("click",handleSearchButtonClick);

var filteredTable=dataSet;

function renderTable() {
    $tbody.innerHTML="";
    for (var x=0;x<filteredTable.length;x++) {
        var address=filteredTable[x];
        console.log(address)
        var fields=Object.keys(address);
        var $row=$tbody.insertRow(x);
        for (var y=0;y<fields.length;y++) {
            var field=fields[y];
            var $cell=$row.insertCell(y);
            $cell.innerText=address[field];
        }
    }
}

function handleSearchButtonClick() {
    var filterDate=$dateInput.value;
    var filterState=$stateInput.value.trim().toLowerCase();
    var filterCity = $cityInput.value.trim().toLowerCase();
    var filterCountry = $countryInput.value.trim().toLowerCase();
    var filterShape = $shapeInput.value.trim().toLowerCase();
}

if (filterDate !="") {
    filteredTable=dataSet.filter(function(address))
    {
        var addressDate=address.datetime;
    
    return addressDate===filterDate;
    });
}
else {filteredTable};

if(filterState != "")
  {
    filteredTable = filteredTable.filter(function(address)
    {
      var addressState = address.state;
      return addressState === filterState;
    });
  }
  else{filteredTable};

  if(filterCity != "")
  {
    filteredTable = filteredTable.filter(function(address)
    {
      var addressCity = address.city;
      return addressCity === filterCity;
    });
  }

  else{filteredTable};

  if(filterCountry != "")
  {
    filteredTable = filteredTable.filter(function(address)
    {
      var addressCountry = address.country;
      return addressCountry === filterCountry;
    });
  }
  else{filteredTable};

  if(filterShape != "")
  {
    filteredTable = filteredTable.filter(function(address)
    {
      var addressShape = address.shape;
      return addressShape === filterShape;
    });
  }
  else{filteredTable};

renderTable();

}


$(document).ready(function() {
  $('#table').DataTable();
});