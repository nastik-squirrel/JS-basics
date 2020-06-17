(function homeworkA1() {
    
    function moveBall() {
        let ball = document.getElementById("ball");
        let x = (ball.style.left != "") ? parseInt(ball.style.left) : 0
        let y = (ball.style.bottom != "") ? parseInt(ball.style.bottom) : 0
        ball.style.left = x + 15 + "px";
        ball.style.bottom = y + 15 + "px";
    }

    const ballButton = document.getElementById("moveBallXY");
    ballButton.addEventListener("click", () => setTimeout(moveBall, 500));

}());

(function homeworkA2() {
    
    // function escapeClosePopupButton(event) {
    //     if (event.key == "Escape") {
    //         document.querySelector(".popup").classList.remove("visible");
    //     }
    // }

    // window.addEventListener("keydown", escapeClosePopupButton);

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
