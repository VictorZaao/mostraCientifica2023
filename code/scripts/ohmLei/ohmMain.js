function addResistor() {

    //Criando o resistor
    let resistor = document.createElement('div');
    resistor.style.border = "0px solid black";
    resistor.style.position = "absolute";
    resistor.style.left = "60%";
    resistor.style.width = "70px"
    resistor.style.height = "50px"
    addDrag(resistor)

    //Criando o fio esquerdo do resistor
    let fio1 = document.createElement('div');
    fio1.className = "steel";
    fio1.style.position = "absolute";
    fio1.style.top = "50%"
    fio1.style.transform = "translate(0%,-50%)"
    fio1.style.width = "30%";
    fio1.style.height = "20%";

    //Criando o fio direito do resistor
    let fio2 = document.createElement('div');
    fio2.className = "steel";
    fio2.style.position = "absolute";
    fio2.style.top = "50%";
    fio2.style.right = "0%";
    fio2.style.transform = "translate(0%,-50%)";
    fio2.style.width = "30%";
    fio2.style.height = "20%";

    //Criando a zona de resistencia
    let resImg = document.createElement('div');
    resImg.style.position = "absolute";
    resImg.style.top = "50%";
    resImg.style.left = "50%";
    resImg.style.transform = "translate(-50%,-50%)";
    resImg.style.width = "40%";
    resImg.style.height = "30%";
    resImg.style.backgroundColor = "brown";

    resistor.appendChild(fio1);
    resistor.appendChild(fio2);
    resistor.appendChild(resImg);
    document.body.appendChild(resistor);
}