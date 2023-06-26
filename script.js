let expression = document.querySelector("#equation");
let result = document.querySelector("#result");

const inputs = document.querySelectorAll(".input");

for (let input of inputs) {
	input.addEventListener("click", calculateResult);
}

function calculateResult(e) {
	expression.value += e.target.value;
	if (!e.target.classList.contains("operator")) {
		// console.log(eval(expression.value));
		result.value = parseInt(eval(expression.value));
	}
}

const equal = document.getElementById("equal");
equal.addEventListener("click", (e) => {
	// console.log(e);
	calculateResult(e);
	expression.value = parseInt(result.value);
	result.value = null;
});

const AC = document.getElementById("all-clear");
AC.addEventListener("click", () => {
	expression.value = "";
	result.value = "";
});

document.addEventListener('keyup', (e) => {
    var numbers = /^[0-9]+$/;
    var inputtxt=e.key;
        if(inputtxt.match(numbers))
        {
          addkeytoinput(inputtxt);
        }
        else
        {
        alert('Only Numbers are allowed!');
        
        }
   
 });

const DEL = document.getElementById("del");
DEL.addEventListener("click", () => {
	expression.value = expression.value.slice(0, -1);

	let len = expression.value.length;
	const lastChar = expression.value[len - 1];

	if (["+", "-", "*", "/"].includes(lastChar)) {
		result.innerText = eval(expression.value.slice(0, -1));
	} else {
		let ans = eval(expression.value);
		if (ans == undefined) result.innerText = "";
		else result.innerText = ans;
	}
});
