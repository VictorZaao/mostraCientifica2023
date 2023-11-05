function toRad(deg) {
    return deg*Math.PI/180
}

function toDeg(rad) {
    return rad*180/Math.PI
}

function isColiding(ima = "id", item = "id") {
    const bx1 = document.getElementById(ima);
    const bx2 = document.getElementById(item);

    const obj1 = {
        x: bx1.offsetLeft+(bx1.clientWidth/2),
        y: bx1.offsetTop+(bx1.clientWidth/2),
        r: bx1.clientWidth/2
    }

    const obj2 = {
        x: bx2.offsetLeft,
        y: bx2.offsetTop,
        w: bx2.clientWidth,
        h: bx2.clientHeight
    }

    let dx = Math.abs(obj1.x - (obj2.x+(obj2.w/2)));
    let dy = Math.abs(obj1.y - (obj2.y+(obj2.h/2)));

    if (dx > obj1.r+(obj2.w/2)) {return false}
    if (dy > obj1.r+(obj2.h/2)) {return false}

    if (dx < obj1.r+(obj2.w/2)) {return true}
    if (dy < obj1.r+(obj2.h/2)) {return true}

    let cantoObj2 = (dx - obj2.w/2)^2 + (dy - obj2.h/2)^2;

    return (cantoObj2 <= (obj1.r^2));
}