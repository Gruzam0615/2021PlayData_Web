const addPeople = () => {
	const $insertName = document.querySelector("#insertName");
	const $peopleList = document.querySelector("#peopleList");
	const $listing = document.querySelectorAll(".listing");
	
	if($insertName.value == "") {
		alert("이름을 입력하지 않았습니다.\n드로우에 참가하는분의 이름을 입력해주세요.");
	} else {
		// for(let i = 0; i < $listing.length; 
	
		const $newLiEl = document.createElement("li");
		const $newLabelEl = document.createElement("label");
		const $newInputEl = document.createElement("input");
		
		$newInputEl.setAttribute("type", "checkbox");
		$newInputEl.setAttribute("id", $insertName.value);
		$newInputEl.setAttribute("class", "checkList");
		$newInputEl.setAttribute("value", $insertName.value);
		
		$newLabelEl.setAttribute("for", $insertName.value);
		$newLabelEl.innerHTML = $insertName.value;
		
		$newLiEl.setAttribute("class", "listing");
		
		$newLiEl.append($newLabelEl);
		$newLiEl.append($newInputEl);
		
		$peopleList.append($newLiEl);
		
		$insertName.value = "";
	}
}

const $allCheck = document.querySelector("#allCheck");	
$allCheck.addEventListener("click", () => {
	const $checkLists = document.querySelectorAll(".checkList");
			
	
	
	const $selectedList = document.querySelector("#selectedList");	

	for(let i = 0; i < $checkLists.length; i++) {
		let $checkList = $checkLists[i];
				
		// Attribute checked
		let $newChecked = document.createAttribute("checked");
		
		$checkList.checked = true;
		/*
		if($checkList.checked == false) {
			//$checkList.setAttributeNode($newChecked);
			$checkList.checked = true;
		} else{
			//$checkList.removeAttribute("checked");
			$checkList.checked = false;
		}*/
	}
});
