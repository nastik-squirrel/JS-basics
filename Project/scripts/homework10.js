(function homeworkA1() {
    
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

}());

(function homeworkA2() {

    function moveBallRight() {
        let ball = document.getElementById("ball");
        ball.style.left = ballInput.value + "px";
    }

    const ballInput = document.getElementById("moveBallX");
    ballInput.addEventListener("change", moveBallRight);

}());

(function homeworkA3() {
    
    // function addCircle() {
    //     let circle = document.createElement("div");
    //     circle.classList.add("circle");
    //     container = document.querySelector(".circle-container")
    //     if (container.children.length % 2) {circle.classList.add("odd");}
    //     container.appendChild(circle);
    // };

    // const circleButton = document.getElementById("addCircleButton");

    // circleButton.addEventListener("click", addCircle);
    
}());
