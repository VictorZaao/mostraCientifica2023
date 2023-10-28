const gameBox = document.getElementById("gameBox");

const larguraTela = gameBox.clientWidth-(gameBox.clientWidth%10);
const alturaTela = gameBox.clientHeight-(gameBox.clientHeight%10);

const robotDiv = document.getElementById("robot");
let robot = new Robot(robotDiv);

console.log(robotDiv)
// console.log(robot)


const timer = {
    start: new Date().getTime(),
    now: 0,
    dif: 0
};

function fps() {
    requestAnimationFrame(fps);
    timer.now = new Date().getTime();
    timer.dif = timer.now - timer.start;
    timer.start = timer.now;

    robot.control(teclas);
    robot.update(timer.dif);
}

fps();