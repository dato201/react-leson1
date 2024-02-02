let array1 = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

let filterArr = array1.filter((item) => {
    if (item > 0) {
        return item
    }
});

let reduceArr = filterArr.reduce((item, mun) => {
    return item + mun
});

document.getElementById('p1').innerHTML = reduceArr;



let array2 = ['q', 'q', 'b', 'a', 'e', 'a', 'a', 'g', 'e'];

let reduceArr2 = Array.prototype.reduce.call(array2, (a, b) => {
    a[b] = (a[b] ?? 0) + 1;
    return a
},
    {}
);

console.log(reduceArr2);

class Car {
    constructor(brand, model, speed, motion) {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
        this.motion = motion;
    }
    check_motion() {
        if (this.speed > 0) {
            return this.motion = "The car is moving"
        } else {
            return this.motion = "The car is stopped"
        }
    }
    accelerate() {
        return this.speed + 40;
    }
    brake() {
        return this.speed - 40;
    }
    emergency_brake() {
        return this.speed = 0;
    }
}

let mns = "The car is not moving";

const myCar1 = new Car("tesla", "X", 80, mns);

document.getElementById("li1").innerHTML = `<spen style = "font-weight: 900;"> brand: </spen>` + myCar1.brand;
document.getElementById("li2").innerHTML = `<spen style = "font-weight: 900;"> model: </spen>` + myCar1.model;
document.getElementById("li3").innerHTML = `<spen style = "font-weight: 900;"> speed: </spen>` + myCar1.accelerate() + " kms";
document.getElementById("li4").innerHTML = `<spen style = "font-weight: 900;"> motion: </spen>` + myCar1.check_motion();




function addAsync(some) {
    document.getElementById("demo").innerHTML = some;
    console.log(some);
}

let myPromise = new Promise(function (resolve, reject) {
    let x;
    let v;

    if (x === undefined && v === undefined) {
        resolve("OK");
    } else {
        reject("Error");
    }
});

myPromise.then(
    function (value) { addAsync(value); },
    function (error) { addAsync(error); }
);