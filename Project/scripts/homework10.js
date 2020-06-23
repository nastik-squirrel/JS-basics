    let ball = document.getElementById("ball");

    function changeCoordinate(coordinate) {
        let a = (coordinate != "") ? parseInt(coordinate) : 0;
        return `${a + 15}px`;
    }

    function moveBallDiagonal() {
        ball.style.left = changeCoordinate(ball.style.left);
        ball.style.bottom = changeCoordinate(ball.style.bottom);
    }

    const ballButton = document.getElementById("moveBallXY");
    ballButton.addEventListener("click", () => setTimeout(moveBallDiagonal, 500));

    function moveBallRight() {
        ball.style.left = `${ballInput.value}px`;
    }

    const ballInput = document.getElementById("moveBallX");
    ballInput.addEventListener("change", moveBallRight);

    function addRemoveClass(eventTarget ,isIncorrect) {
        isIncorrect ? eventTarget.classList.add("invalid") : eventTarget.classList.remove("invalid")
    }

    function checkForm(event) {
        if (event.target.type == "text") {
            addRemoveClass(
                event.target,
                typeof(event.target.value) != "string" || event.target.value.length <3 || event.target.value.length > 20
            )
        } else if (event.target.type == "number") {
            let v = parseInt(event.target.value, 10);
            addRemoveClass(
                event.target,
                isNaN(v) || v < 0 || v > 115
            )
        }
    }

    const form = document.getElementById("userForm");
    form.addEventListener("change", checkForm);
