let teclas = [];

document.addEventListener('keydown', (e) => {
    if (!teclas.includes(e.key)) {
        teclas.push(e.key);
    }
});

document.addEventListener('keyup', (e) => {
    teclas.splice(teclas.indexOf(e.key), 1);
});