const imaId = "imaDiv";
const imaCampo = "imaCampo"
const ima = document.getElementById(imaId);

const campo = document.createElement('div');
campo.classList = "center campo";
campo.id = imaCampo
let isCampoOn = false;

addDrag(imaId);

const objNumbers = 1;
for (let x = 1; x <= objNumbers; x++) {
    addDrag(`obj${x}`);
}

function fps() {
    requestAnimationFrame(fps);

    if (statusDrag(imaId) && !isCampoOn) {
        ima.appendChild(campo);
        isCampoOn = true
    } else if (!statusDrag(imaId) && isCampoOn) {
        ima.removeChild(campo)
        isCampoOn = false
    }

    if (isCampoOn) {
        for (let x = 1; x <= objNumbers; x++) {
            if (isColiding(imaCampo, `obj${x}`)) {
                console.log(`Colisão entre:`);
                console.log(ima);
                console.log(document.getElementById(`obj${x}`));
            }
        }
    }
}
fps();