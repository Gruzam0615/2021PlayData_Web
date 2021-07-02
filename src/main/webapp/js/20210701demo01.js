window.onload = () => {
	const $InputAll = document.querySelectorAll("input");
	const $InputFirst = $InputAll[0];
	
	$InputFirst.focus();
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

//complete 2021.07.01.Thu
const EmailHost = (event) => {
	//#email2 요소에 접근
	let email2El = document.getElementById("email2");
	let email2Option = document.getElementById("email2-option");
//	let regExp = //ig;
	
	if(event.target.value.trim() != "") {
		email2El.value = event.target.value;
		const elDisabled = document.createAttribute("disabled");		
		email2El.setAttributeNode(elDisabled);
	} else {
		email2El.value = "";		
		email2El.removeAttribute("disabled");
		email2El.removeAttribute("readonly");
	}
	
	
}


const submitCheck = () => {
	const accountVal = document.querySelector("#account");
	const accountSpec = document.querySelector("#account_Spec");
	let account = accountVal.value;
	
	//ID검증
	if(account == "" || account.trim() == "") {
		accountSpec.style.color = "rgba(255, 50, 0, 1)";
		accountSpec.innerHTML = "항목이 공백입니다 아이디를 입력해 주세요.";
		accountVal.focus();
	} else if(account.length < 5) {
		accountSpec.style.color = "rgba(255, 50, 0, 1)";
		accountSpec.innerHTML = "입력하신 ID는 너무 짧습니다. 5자 이상으로 입력해주세요.";
		accountVal.focus();
	} else if(account.length > 20) {
		accountSpec.style.color = "rgba(255, 50, 0, 1)";
		accountSpec.innerHTML = "입력하신 ID는 너무 깁니다. 20자 이하로 입력해주세요.";
		accountVal.focus();
	} else {
		accountSpec.style.color = "rgba(0, 0, 0, 1)";
		accountSpec.innerHTML = "";
	}
	
	const passwordVal = document.querySelector("#password");
	const passwordSpec = document.querySelector("#password_Spec");
	let password =  passwordVal.value;
	let passwordPatt = /[A-Za-z0-9]/g;
	
	if(password == "") {
		passwordSpec.style.color = "rgba(255, 50, 0, 1)";
		passwordSpec.innerHTML = "항목이 공백입니다 비밀번호를 입력해 주세요.";
		passwordVal.focus();
	} else {
		passwordSpec.style.color = "rgba(0, 0, 0, 1)";
		passwordSpec.innerHTML = "";
	}
	
	
	//<textarea> 검증
	const $textArea = document.querySelector("#free");
	let textAreaValue = $textArea.value;	
}

const $allCheck = document.querySelector("#AllCheck");	
$allCheck.addEventListener("click", () => {
	const $checkLists = document.querySelectorAll(".interestCheck");
		
	for(let i = 0; i < $checkLists.length; i++) {
		let $checkList = $checkLists[i];
		let $isChk = $checkList.getAttribute("checked");
		let $isChkValue = $checkList.getAttribute("value");
		
		// Attribute checked
		let $newChecked = document.createAttribute("checked");
		
		if($checkList.checked == false) {
			//$checkList.setAttributeNode($newChecked);
			$checkList.checked = true;
		} else{
			//$checkList.removeAttribute("checked");
			$checkList.checked = false;
		}
		//alert($checkLists[0].checked);
	}
});

// ID(account) 중복확인 새로운 창 열기
const $accountDupliBtn = document.querySelector("#accountDupli");
const $account = document.querySelector("#account");

$accountDupliBtn.addEventListener("click", (ev01) => {
	let specs = "width=400, height=300 top=300 left=150";
	//window.opener parent window 접근
	window.open("./20210701demo01AccountDupli.html", "_blank", specs);
});

