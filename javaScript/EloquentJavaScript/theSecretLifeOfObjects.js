//Program Structure Exercises
console.log('--------------------------- The Secret Life of Objects Exercises ---------------------------');


// .d888888     dP     dP                     dP                        d888888P                                   
//d8'    88     88     88                     88                           88                                      
//88aaaaa88a    88    .8P .d8888b. .d8888b. d8888P .d8888b. 88d888b.       88    dP    dP  88d888b. .d8888b.       
//88     88     88    d8' 88ooood8 88'  `""   88   88'  `88 88'  `88       88    88    88  88'  `88 88ooood8       
//88     88     88  .d8P  88.  ... 88.  ...   88   88.  .88 88             88    88.  .88  88.  .88 88.  ...       
//88     88     888888'   `88888P' `88888P'   dP   `88888P' dP             dP    `8888P88  88Y888P' `88888P'       
//oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo~~~~.88~~88~ooooooooooooooooooooo
//                                                                                d8888P   dP                        
console.log('\n---------------------------\n A Vector Type \n---------------------------');

function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function (vectorIn) {
    return new Vector(this.x + vectorIn.x, this.y + vectorIn.y);
};

Vector.prototype.minus = function (vectorIn) {
    return new Vector(this.x - vectorIn.x, this.y - vectorIn.y);
};

//Add getter
console.log(new Vector(2, 2).plus(new Vector(2, 2)));
console.log(new Vector(4, 4).minus(new Vector(2, 2)));


//Class solution

class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vectorIn) {
        return new Vector2(this.x + vectorIn.x, this.y + vectorIn.y);
    }

    minus(other) {
        return new Vector2(this.x - vectorIn.x, this.y - vectorIn.y);
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

console.log(new Vector2(2, 2).plus(new Vector2(2, 2)));
console.log(new Vector2(4, 4).minus(new Vector2(2, 2)));
console.log(new Vector2(4, 4).length);