const add = function add(a, b){
    return a + b;
}

const sub = function sub(a, b){
    return a - b;
}

function expression (f1, f2, x1, x2){
    return f1(x1, x2) * f2(x1, x2);
}

const result = expression(add, sub, 1, 2);
console.log(result)

function f(a, b){
    if (a <=b ){
        return function(x, y){
            return x + y;
        }
    } 
    return function(x, y){
        return x - y;
    }
}

const f1 = f(1, 2);
const f2 = f(2, 1);

console.log(f1);
console.log(f2);

console.log(f1(3, 4));
console.log(f2(3, 4));

console.log(f(1, 2)(3, 4));

[1, 2, 3, 4].forEach(function (element) {
    console.log(element);
});

const array_sum = [1, 2, 3, 4].reduce((acc, element) => acc + element);

console.log(array_sum);

const double_array = [1, 2, 3, 4].map((element) => element * 2)
console.log(double_array);

const even_array = [1, 2, 3, 4].filter((element) => element % 2 == 0);

console.log(even_array);