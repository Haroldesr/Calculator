const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", ()=> {
        const buttonPressed = button.textContent;

        if (button.id === "c") {
            screen.textContent = "0";
            return;
        }

        if (button.id === "delete") {
            if (screen.textContent.length === 1 || screen.textContent.length === "Syntax ERROR") {
                screen.textContent = "0";
            } else {
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }

        if (button.id === "equal") {
            try {
                screen.textContent = eval(screen.textContent);
            } catch {
                screen.textContent = "Syntax ERROR";
            }
            return;
        }

        if (screen.textContent === "0" || screen.textContent.length === "Syntax ERROR") {
            screen.textContent = buttonPressed;
        } else {
            screen.textContent += buttonPressed
        }
    })
})