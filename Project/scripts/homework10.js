   
    function changeCoordinate(coordinate) {
        let a = (coordinate != "") ? parseInt(coordinate) : 0;
        return a + 15 + "px";
    }

    function moveBallDiagonal() {
        let ball = document.getElementById("ball");
        ball.style.left = changeCoordinate(ball.style.left);
        ball.style.bottom = changeCoordinate(ball.style.bottom);
    }

    const ballButton = document.getElementById("moveBallXY");
    ballButton.addEventListener("click", () => setTimeout(moveBallDiagonal, 500));

    function moveBallRight() {
        let ball = document.getElementById("ball");
        ball.style.left = ballInput.value + "px";
    }

    const ballInput = document.getElementById("moveBallX");
    ballInput.addEventListener("change", moveBallRight);

    function checkForm(event) {
        let et = event.target;
        if (et.type == "text") {
            if (typeof(et.value) != "string" || et.value.length <3 || et.value.length > 20) {
                console.error(`${et.name} should be a string from 3 to 20 characters`);
                et.classList.add("invalid");
            } else {
                et.classList.remove("invalid");
            }
        } else if (et.type == "number") {
            let v = parseInt(et.value, 10);
            console.log(v)
            if (isNaN(v) || v < 0 || v > 115) {
                console.error(`${et.name} should be a number from 0 to 115`);
                et.classList.add("invalid");
            } else {
                et.classList.remove("invalid");
            }
        }
    }

    const form = document.getElementById("userForm");
    form.addEventListener("change", checkForm);
