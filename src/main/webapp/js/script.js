const toTheBack = () => {
	alert("이전 페이지로 되돌아갑니다");
	window.history.back();
}

const toMain = () => {
	alert("메인화면으로 돌아갑니다.");
	// 현재 host name 출력 window.location.hostname
	window.location.href = "/mms01/index.html";
}