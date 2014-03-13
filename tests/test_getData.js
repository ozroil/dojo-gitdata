require(["dojo/request/script", "doh/runner"],
function(script, doh){    
    doh.register("test get data", [
	    {
	    	name: "get data",
	    	runTest: function(){
	    		var deferred = new doh.Deferred();
	    		script.get("https://api.github.com/repos/dojo/dojo/pulls",{
	    			jsonp: "callback",
	    			timeout: 3000
	    		}).then(function(){
	    	  		    deferred.callback(true);
	    	  		},
	    	  		function(){
	    	  			deferred.errback(true);
	    	  		}
	    		);
	
	    		return deferred;
	    	}
	    }
    ]);
});
