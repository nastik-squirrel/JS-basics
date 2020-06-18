    const openButton = document.getElementById("openPopupButton");
    const closeButton = document.getElementById("closePopupButton");

    openButton.addEventListener("click", openPopupButton);
    closeButton.addEventListener("click", closePopupButton);

    function openPopupButton() {
        document.querySelector(".popup").classList.add("visible");
    }

    function closePopupButton() {
        document.querySelector(".popup").classList.remove("visible");
    }
    
    function escapeClosePopupButton(event) {
        if (event.key == "Escape") {
            document.querySelector(".popup").classList.remove("visible");
        }
    }

    window.addEventListener("keydown", escapeClosePopupButton);
  
    function addCircle() {
        let circle = document.createElement("div");
        circle.classList.add("circle");
        container = document.querySelector(".circle-container")
        if (container.children.length % 2) {circle.classList.add("odd");}
        container.appendChild(circle);
    };

    const circleButton = document.getElementById("addCircleButton");

    circleButton.addEventListener("click", addCircle);

    function removeCircle() {
        container = document.querySelector(".circle-container");
        child = container.lastElementChild;
        if (child) child.remove();
    }

    const circleButtonRemove = document.getElementById("removeCircleButton");

    circleButtonRemove.addEventListener("click", removeCircle);
