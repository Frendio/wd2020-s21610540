//Array

let nilai=[90, 80, 75, 100, 85];

for(let i=0; i<nilai.length; i++ ){
    console.log("nilai =", nilai[1] + 5);
} //menampilkan array dan modifikasi
console.log(nilai);

nilai[2] = 105; 
console.log(nilai[nilai.length-1]); //menampilkan indeks terakhir

let john = ["John", "Doe", 33, true];
console.log(john);

//toString
console.log(john.toString());

//join
console.log(john.join(" - "));

//pop
john.pop();
console.log(john.join(" - "));

//push
john.push(true);
john.push("Hello");
console.log(john.join(" - "));

//shift
john.shift();
console.log(john.join(" - "));

//unshift
john.unshift("john");
john.unshift("prof");
console.log(john.join(" - "));

//exercise #8 Array Javascript Lanjutan

//splice
let number = ["satu", "dua", "tiga", "empat"];
number.splice(2, 0, "lima", "6");

console.log(number);

//concat 

let drink = ["kopi", "susu", "teh"];
let cake = ["bronis", "biapong", "tart"];

let food = drink.concat(cake);

console.log(food);

//slice 

let minuman = ["teh", "susu", "air", "kopi", "coklat", "cappucino"];
let minumanhangat = minuman.slice(0, 3);
let minumandingin = minuman.slice(3);
console.log(minumanhangat);
console.log(minumandingin);

//sort 
let clothes = ["kemeja", "jeans", "mantel", "kaos"];

clothes.sort();

console.log(clothes); 

// terkecil - terbesar dan sebaliknya
let bilangan = [20, 1, 12, 3.4, 43, 85];

let urutDariTerkecil = function(a, b) {
  return a - b;
};

let urutDariTerbesar = function(a, b) {
  return b - a;
};

console.log(bilangan.sort(urutDariTerkecil)); 
console.log(bilangan.sort(urutDariTerbesar)); 

//reverse 
let mahasiswa = ["anto", "ari", "tia", "max"];
mahasiswa.reverse();
console.log(mahasiswa); 

// urutkan element

let grade = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D", "F"];
grade.sort().reverse();
console.log(grade); 