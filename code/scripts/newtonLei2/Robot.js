class Robot {

    constructor(div) {
        //Quem é o robô no html
        this.id = div.id;

        this.moving = false;

        //Propriedades desse robô
        this.direction = 0
        this.position = {
            x: document.getElementById(this.id).clientLeft,
            y: document.getElementById(this.id).clientTop
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.acceleration = {
            x: 0,
            y: 0
        }
    }

    //Controle
    control(inputs = []) {
        if (inputs.includes('w') || inputs.includes('W')) {
            this.acceleration.y = Math.sin(toRad(this.direction+90))*-0.2;
            this.acceleration.x = Math.cos(toRad(this.direction+90))*-0.2;
            
            this.moving = true;
        } else if (inputs.includes('s') || inputs.includes('S')) {
            this.acceleration.y = Math.sin(toRad(this.direction+90))*0.2;
            this.acceleration.x = Math.cos(toRad(this.direction+90))*0.2;

            this.moving = true;
        } else {
            if (this.moving) {
                this.acceleration.x = this.acceleration.x*-1;
                this.acceleration.y = this.acceleration.y*-1;
            }
            this.moving = false;
        }

        if (inputs.includes('a') || inputs.includes('A')) {
            this.direction = this.direction > 0? this.direction-1 : 359; 
        } 
        if (inputs.includes('d') || inputs.includes('D')) {
            this.direction = this.direction < 359? this.direction+1 : 0;
            
        }
        
    }
    
    //Atualização
    update(difTime) {

        difTime = difTime/1000

        this.velocity.y = Math.abs(this.velocity.y+this.acceleration.y)>10e-3? this.velocity.y+this.acceleration.y*difTime : 0;
        this.velocity.x = Math.abs(this.velocity.x+this.acceleration.x)>10e-3? this.velocity.x+this.acceleration.x*difTime : 0;

        console.log(this.velocity)

        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        document.getElementById(this.id).style.transform = `rotate(${this.direction}deg)`
        document.getElementById(this.id).style.top = this.position.y+"px";
        document.getElementById(this.id).style.left = this.position.x+"px";
    }

}