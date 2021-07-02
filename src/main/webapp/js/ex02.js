// 2021-06-29

/*
	사용자 주문을 받는 프로그램
	상품가격: 10,000
	주문수량: 1 ~ 10개
*/

const T02 = () => {

	let item_quantity = 100;
	let price = 10000;
	let payment = 0;
	let confirm01;
	let prompt01;

	prompt01 = prompt("상품을 몇 개 주문하십니까? 주문 가능 수량은 1~100개 입니다.");
	item_quantity = item_quantity - prompt01;
	payment = prompt01 * price;

	if(confirm01 = confirm(`상품을 ${prompt01}개 주문합니다. 가격은 ${numberWithComma(payment)} 입니다.\n주문하시겠습니까?`)) {
		(prompt01 > 0) && (prompt01 < 101) ?
		document.write(`<h3> 재고 수: ${item_quantity}</h3>`) +
		document.write(`<h3> 주문 수량: ${prompt01}</h3>`) +
		document.write(`<h3> 주문 가격: ${numberWithComma(payment)}</h3>`)
		: alert("주문 수량이 잘못되었습니다.\n주문을 취소합니다.");		
		
	}else {
		alert("상품을 주문하지 않습니다.");
	}

}

const numberWithComma = (n) => {
	return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}

T02();