/*  Original code: Coding Artist
link: https://www.youtube.com/watch?v=b13NSWyQ0tw
adapted by: Splantapot
*/
function addDrag(element) {
    let initialX = 0, initialY = 0;
    let moveElement = false;

    let events = {
        mouse: {
            down: "mousedown",
            move: "mousemove",
            up: "mouseup"
        },
        touch: {
            down: "touchstart",
            move: "touchmove",
            up: "touchend"
        }
    };

    let deviceType = "";

    const isTouchDevice = () => {
        try {
            document.createEvent("TouchEvent");
            deviceType = "touch"
            return true;
        }  catch (e) {
            document.createEvent("MouseEvent");
            deviceType = "mouse"
            return false;
        }
    }

    isTouchDevice();

    element.addEventListener(events[deviceType].down, (e) => {
        e.preventDefault();
        initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        moveElement = true;
    });

    element.addEventListener(events[deviceType].move, (e) => {
        if (moveElement) {

            if (teclas.includes("Delete")) {
                document.body.removeChild(element);
            } else {

                e.preventDefault();
                let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
                let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
    
                element.style.top =
                    element.offsetTop - (initialY - newY) + "px";
    
                element.style.left =
                    element.offsetLeft - (initialX - newX) + "px";
    
                initialX = newX;
                initialY = newY;

            }
        }
    });

    element.addEventListener(events[deviceType].up, (stopMovement = (e) => {
        moveElement = false;
    }));

    element.addEventListener(events[deviceType].up, (e) => {
        moveElement = false; 
    });
}
