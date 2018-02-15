document.addEventListener("DOMContentLoaded", function(){
	//console.log("DOCUMENT IS LOADED, SOCKET READY TO CONNECTTTTTTTTTTTTTTT");
	let socket = io.connect("http://localhost:3000");
	// LISTENING FOR RECOMMENDED PRODUCTS FROM SERVER
	socket.on("recProducts", function(data){
		console.log("ON recProducts!!!!!!!",data);
		let recProducts = document.getElementById("recProducts"); 
		let product = document.createElement("h2");
		product.innerHTML = `Type: ${data.keyword} Date: ${data.date}`;
		recProducts.prepend(product); 
		
	});

});