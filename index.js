const userInput = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let value = input.value;
    if(value === "") return;
    userInput.innerText = `Name: ${value}`;
    input.value = ``;
})

input.addEventListener("keypress", (e) => {
    if(e.keyCode === 13) {
        let value = input.value;
        if(value === "") return;
        userInput.innerText = `Name: ${value}`;
        input.value = ``;
    }
});

