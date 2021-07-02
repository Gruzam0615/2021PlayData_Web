// 2021-06-29

const ex03 = (a, b) => {
	let answer = [];
	for(let i = a; i <= b; i++){
		for(let j = 1; j < 10; j++) {
			answer.push(`${i} x ${j} = ${i*j}`);
		}
	}
	// console.log(answer);
	return answer;
}

console.log(ex03(2,4));