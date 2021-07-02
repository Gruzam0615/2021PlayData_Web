//2021-06-3

const $colorChngBtn = document.querySelector("#color-chng-btn");
$colorChngBtn.addEventListener("click", () => {
	
	const $section1 = document.querySelector("#section1");
	const $section1P = document.querySelector(".section1P");
	
	const colorIndex = [
		"rgba(10, 10, 10, 1)", // black
		"rgba(255, 30, 0, 1)", // red
		"rgba(255, 0, 150, 1)", // magenta
		"rgba(255, 190, 0, 1)", // gold?
		"rgba(30, 130, 0, 1)", // green
		"rgba(0, 20, 240, 1)", // blue
		"rgba(230, 230, 230, 1)" // white-gray?
	];
	
	let randomNum = Math.ceil(Math.random()*4)+1;
	let randomNum2 = Math.ceil(Math.random()*4)+1;
	
	$section1.style.background = colorIndex[randomNum];
	$section1P.style.color = colorIndex[randomNum2];	
	
	
});


