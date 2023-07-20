let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};

let [, name2, , name4] = data.names;
let [, age2, , age4] = data.ages;

console.log(name2); // Tom
console.log(age2); // 24
console.log(name4); // Bob
console.log(age4); // 26
