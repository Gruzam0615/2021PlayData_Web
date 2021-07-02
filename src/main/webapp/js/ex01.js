// 2021-06-29

document.write("<h3>연습01</h3>");

var text1 = "textOne";
let text2 = "textTwo";

const ex01 = () => {
	let name = "PMJ";
	age = 30;
	
	document.write(`<h3>${name}, ${age}, ${text1}, ${text2}</h3>`);
	
	/*
	let answer = 0;
	for(let i = 1; i <= 10; i++) {
		answer += i;
		document.write(`<h3>${i}</h3>`);
	}
	document.write(`<h3>${answer}</h3>`);
	*/
	
	// let confirm01 = confirm("Are you sure?");
	// 확인 버튼을 누른다면 true
	// 취소 버튼을 누르면 false 를 반
	// alert(confirm01);
	
}

ex01();