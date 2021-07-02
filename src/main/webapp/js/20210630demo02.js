/*
window.onload = function() {
	alert("window open!!!!");
}
*/

const showHide = (event) => {
	$value = event.target.value;
	let x = document.getElementsByClassName("section");
	for(let i = 0; i < x.length; i++) {
		if(x[i].getAttribute("id") == $value) {
			x[i].style.display = "initial";
		} else {
			x[i].style.display = "none";
		}
	}
}