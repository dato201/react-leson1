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


let mns = "The car is not moving";

class Car {
    constructor(brand, model, speed, motion) {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
        this.motion = motion;
    }
    check_motion() {
        if (this.speed > 0) {
            mns = "The car is moving";
            console.log(mns);
            return this.motion;
        }
    }
}
console.log(mns);

const myCar1 = new Car("tesla", "tesla-X", 230 , mns);

document.getElementById("p2").innerHTML = myCar1.brand + " " + myCar1.model + " " + myCar1.speed + "kms" + " " + myCar1.motion

let avv = 1