$(document).ready(function() {
    $.ajax ({
        type: "GET",
        url: "https://www.quandl.com/api/v3/datasets/WIKI/ATVI.json?api_key=5cESzn4hsyeJPnz88zci",
        datatype: 'json',
        success: function(data) {
            var closingTradeStatement = "";
            closingTradeStatement += JSON.stringify(data.dataset.name) + " closed at ";
            closingTradeStatement += JSON.stringify(data.dataset.data[0][4]);
            closingTradeStatement += " on " + JSON.stringify(data.dataset.end_date);

            $('#price').html(closingTradeStatement);
        }
    });
});