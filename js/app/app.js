function getData(){
    require(["dojo/dom", "dojo/request/script", "dojo/_base/array", "dojo/domReady!"],
    function(dom, script, array){
        
        var deferred = script.get("https://api.github.com/repos/dojo/dojo/pulls",{
            jsonp: "callback",
            timeout: 3000
        });
                
        deferred.then(function(response){
            var html ="<table>";
            array.forEach(response.data, function(item){
                html += "<tr>" + 
                        "<td>" + item.title + "</td>" +
                        "<td>" + item.state + "</td>" +
                        "</tr>";
                });
            html += "</table>";
            dom.byId("resultDiv").innerHTML = html;
        },function(err){
            dom.byId("resultDiv").innerHTML = err;
        });
    });
}
