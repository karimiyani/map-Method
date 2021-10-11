const users = [
    {name : "A" , isActive:true, id:1},
    {name : "B" , isActive:false, id:2},
    {name : "C" , isActive:true, id:3},
    {name : "D", isActive:false, id:4},
];

// we want select id and put them  in new array. how??


// ex1
const num = [10, 20, 30, 40];
const doubleNumber = num.map ((n) => {
    return n*2;
});
console.log(doubleNumber)
//(4) [20, 40, 60, 80]

// ex2
const doubleNumber2 = num.map ((n) => {
    return {value : n*2};
});
console.log(doubleNumber2);
// (4) [{…}, {…}, {…}, {…}]
// 0: {value: 20}
// 1: {value: 40}
// 2: {value: 60}
// 3: {value: 80}
// length: 4
// [[Prototype]]: Array(0)

const userName = users.map ( (u)=> {
    return u.name;
});
console.log(userName);
//["A" , "B", "C", "D"]


const userName2 = users.map ( (u)=> {
    return { name : u.name};
});
console.log(userName2);
// (4) [{…}, {…}, {…}, {…}]
// 0: {name: 'A'}
// 1: {name: 'B'}
// 2: {name: 'C'}
// 3: {name: 'D'}
// length: 4
// [[Prototype]]: Array(0)

const userName3 = users.map ( (u)=> {
    return `<li>${u.name}</li>`;
});
console.log(userName3);
// (4) ['<li>A</li>', '<li>B</li>', '<li>C</li>', '<li>D</li>']

