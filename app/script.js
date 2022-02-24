const input = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const clear = document.querySelector(".clear");

const addTask = () => {
	const newLi = document.createElement("li");
	const delBtn = document.createElement("button");

	delBtn.innerHtml = '<i class="fas fa-trash-alt"></i>';
	
	if(input.value!==""){
		newLi.textContent = input.value;
		newLi.appendChild(delBtn);
		todoList.appendChild(newLi);
		input.value = "";
		console.log('input value = '+input.value);
	}else{
		
	}
}
