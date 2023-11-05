function addDrag(id = "id") {

    const element = document.getElementById(id);
    let offSetX, offSetY;

    const move = (e) => {
        element.style.left = `${e.clientX - offSetX}px`;
        element.style.top = `${e.clientY - offSetY}px`;
    }

    element.addEventListener("mousedown", (e) => {
        offSetX = e.clientX - element.offsetLeft
        offSetY = e.clientY - element.offsetTop
        document.addEventListener("mousemove", move);
        element.classList.add("isMoving");
    });

    document.addEventListener("mouseup", (e) => {
        document.removeEventListener("mousemove", move);
        element.classList.remove("isMoving");
    });
}

function statusDrag(id = "id") {
    return document.getElementById(id).classList.contains("isMoving");
}