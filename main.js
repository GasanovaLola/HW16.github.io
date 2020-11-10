/*Создать класс SuperMath. Добавить к экземпляру метод - check(obj), 
параметр obj которого имеет свойства X, Y, znak. 
Метод должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У. 
Если - да, сделать математическое действие znak(которое описано в прототипе), 
иначе - запросить ввод новых данных через метод input() класса SuperMath. 
Пример обекта: obj = { X:12, Y:3, znak: “/”}, возможные варианты znak=> + - / * %. 
При вводе znak нужно сделать проверку корректности ввода на возможные математические действия*/

function SuperMath(obj) {
    for (var key in obj) {
        this[key] = obj[key];
    }

    console.log(this);
}

var obj = { 
    x: 12,
    y: 3,
    znak: "+"
}

var p = new SuperMath(obj);

SuperMath.prototype.check = function() {
    var flag = true; // Хотите ли Вы произвести действие znak c Х и У?

    if (flag) {
        if (this.znak === "+" || "-" || "/" || "*" || "%") {
            if (this.znak === "+") {
                console.log(this.x + this.y);
            }       
            else if (this.znak === "-") {
                console.log(this.x - this.y);
            }
            else if (this.znak === "/") {
                console.log(this.x / this.y);
            }
            else if (this.znak === "*") {
                console.log(this.x * this.y);
            }
            else if (this.znak === "%") {
                console.log(this.x % this.y);
            }
        }
    }
    else {
        p.input(this);
    }
};

SuperMath.prototype.input = function() {
    this.x = prompt("X");
    this.y = prompt("Y");
    this.znak = prompt("Znak");

    while (true) {
        if (this.znak === "+" || this.znak === "-" || this.znak === "/" || this.znak === "*" || this.znak === "%") {
            break;
        }
        this.znak = prompt("Znak");
    }
}

p.check(); // --> no p.input() -> 3 prompt -> считает