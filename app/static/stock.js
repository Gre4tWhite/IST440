
var fetch = function(tble, queryString) {
	console.log("fetched");
	let _url = "https://www.quandl.com/api/v3/datasets/WIKI/" + queryString + ".json?api_key=";
    
	//$(document).ready(function() {
					  $.ajax ({
							  type: "GET",
							  url: _url,
							  datatype: 'json',
							  success: function(data) {
							  let closingTradeStatement = "\n";
							  closingTradeStatement += JSON.stringify(data.dataset.dataset_code) + " closed at $";
							  closingTradeStatement += JSON.stringify(data.dataset.data[0][4]);
							  closingTradeStatement += " on " + JSON.stringify(data.dataset.end_date);
                                  
							  node(tble, closingTradeStatement);
							  
							  }
						});
	//				  });

	
	console.log("node'd");
}

var node = function(t, cTS) {
	

	let tr = document.createElement("tr");
	let node = document.createTextNode(cTS);
	
	tr.appendChild(node);
	
	t.appendChild(tr);
	console.log("leave node");

}


$(document).ready(function() {

		setInterval(function(){
					
					let companies = ["aapl", "msft", "atvi", "goog", "twtr", "fb", "siri", "xom", "amzn", "vzio"];
					
					let tableStock = document.getElementById("price");
					$("#price tr").remove();
					let r1 = Math.floor((Math.random() * 9) + 0), r2 = Math.floor((Math.random() * 9) + 0);
					
					if(r1 !== r2) {
					
					  fetch(tableStock, companies[r1]);
					  fetch(tableStock, companies[r2]);
					}
					
					
		}, 20000);
	  
});

