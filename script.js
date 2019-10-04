//selecting the card content
var content = document.querySelector(".card-text");
document.onkeydown = function(e){
			// if(e.keyCode == 32){
			// 	flapping= true;
			// 	console.log(angle);
			// 	if ( angle>=0.1){
			// 		angle+= 10* DEGREE;
			// 	}else{
			// 	angle += 38 * DEGREE;
			// 	}
			// }
			content.innerText=e.keyCode;
}