function sendRequest(){
    var requestID = '12343'
    $.ajax({
        url: "/myURL",
        success: function(response){
            alrt('Request ' + requestID + ' returned')
        }
    })
}