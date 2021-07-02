// 2021-06-29
/* Date() */
const ex04 = () => {
	let anawer = "";
	const currentTime = new Date();
	
	let year = currentTime.getFullYear();
	let month = currentTime.getMonth()+1;
	let date = currentTime.getDate();
	
	let hour = currentTime.getHours();
	let hour12 = (currentTime.getHours() + 24) % 12 || 22;
	let minute = currentTime.getMinutes();
	let second = currentTime.getSeconds();
	let milliSec = currentTime.getMilliseconds();
	
	answer = `${year}-${month}-${date} ${hour}:${minute}:${second}.${milliSec}`;
	alert(answer);
}

const Test04_2 = () => {
	let test01 = "This is test String";
	
	// slice(startIndex, endIndex)
	// endIndex를 -n으로 지정하면 문자열의 끝에서 부터 카운팅을 하여 문자열을 자른다.
	console.log(test01.slice(0, -11)); // This is 
}

Test04_2();