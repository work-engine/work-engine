document.addEventListener("DOMContentLoaded", function(){
	//console.log("DOCUMENT IS LOADED, SOCKET READY TO CONNECTTTTTTTTTTTTTTT");
	this.socket = io.connect("http://localhost:3000");
	// LISTENING FOR RECOMMENDED PRODUCTS FROM SERVER
	socket.on("recProducts", function(data){
		let recProducts = document.getElementById("recProducts"); 
		data.forEach(function(product){
			let productDiv = document.createElement("div");
			recProducts.append(productDiv); 
		});
	});

});