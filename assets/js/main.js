console.log("script ok");

let button = document.getElementById("submit-form");

let lastname = document.getElementById("lastname");

let result = document.getElementById("result")

console.log(button, lastname);

lastname.value

function test(params) {
    let inner = lastname.value;
    result.innerHTML = inner;
}

button.addEventListener("click", test);