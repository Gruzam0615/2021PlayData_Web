window.onload = () => {
	const $Input = document.querySelectorAll("input");		
	

}

const $main = document.querySelector(".main");

const ToTheBack = () => {
	alert("이전 페이지로 되돌아갑니다");
	window.history.back();
}

const ToMain = () => {
	alert("메인화면으로 돌아갑니다.");
	// 현재 host name 출력 window.location.hostname
	window.location.href = "/mms01/index.html";
}

//signup.html의 #check_password를 위한 함수
const ShowPassword = () => {
	//Checkbox의 checked여부 회수
	let chkTag = document.getElementById("show_password");
	let isChk = chkTag.getAttribute("checked");
	
	//새로 만든 checked Attribute
	let attChecked = document.createAttribute("checked");
	
	//class="password"인 input id="check_password" 에 접근
	let inTag1 = document.getElementById("check_password");
	let inTag2 = document.querySelector(".password");
	//접근한 요소의 속성생성
	let inTagAttType = document.createAttribute("type");
	let inTagAttType2 = document.createAttribute("type");
	
	
	if(isChk == null) {
		chkTag.setAttributeNode(attChecked);
		//생성한 요소 속성의 값 지정 및 요소에 반영
		inTagAttType.value = "text";
		inTagAttType2.value = "text";
		inTag1.setAttributeNode(inTagAttType);
		inTag2.setAttributeNode(inTagAttType2);
	} else {
		chkTag.removeAttribute("checked");
		inTagAttType.value = "password";
		inTagAttType2.value = "password";
		inTag1.setAttributeNode(inTagAttType);
		inTag2.setAttributeNode(inTagAttType2);
	}
}

const EmailHost = (event) => {
	//#email2 요소에 접근
	let email2El = document.getElementById("email2");
	let email2AttVal = document.createAttribute("value");

	email2AttVal.value = "";	
	
	email2AttVal.value = event.target.value;
	email2El.setAttributeNode(email2AttVal);
}

