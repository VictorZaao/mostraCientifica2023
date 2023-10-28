function addResistor() {

    //Criando o resistor
    let resistor = document.createElement('div');
    resistor.style.border = "0.5px solid black";
    resistor.style.position = "absolute";
    resistor.style.left = "60%";
    resistor.style.width = "70px"
    resistor.style.height = "50px"
    addDrag(resistor)

    //Criando o fio esquerdo do resistor
    let fio1 = document.createElement('div');
    fio1.className = "steel";

    //Criando o fio direito do resistor
    let fio2 = document.createElement('div');
    fio2.className = "steel";
    fio2.style.right = "0%";

    //Criando a zona de resistencia
    let resImg = document.createElement('div');
    resImg.style.position = "absolute";
    resImg.style.top = "50%";
    resImg.style.left = "50%";
    resImg.style.transform = "translate(-50%,-50%)";
    resImg.style.width = "45%";
    resImg.style.height = "30%";
    resImg.style.backgroundColor = "rgb(250,200,60)";

    resistor.appendChild(fio1);
    resistor.appendChild(fio2);
    resistor.appendChild(resImg);
    document.body.appendChild(resistor);
}