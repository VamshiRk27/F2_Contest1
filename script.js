/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  let developers=arr.filter(arr => arr.profession === "developer");
  let developerNames = developers.map(developer => developer.name);
  return developerNames;
}

function PrintDeveloperbyForEach() {
  arr=arr.filter(arr => arr.profession === "developer");
  let employee=[];
  arr.forEach(function(arr){
      employee.push(arr.name);
  })
  return employee;
}

function addData() {
  let brr = { id: 4, name: "Rohit", age: 22, profession: "Student" };
  arr.push(brr);
  return arr;
}

function removeAdmin() {
  arr=arr.filter(arr=>arr.profession !== "admin");
    return arr;
}

function concatenateArray() {
  let newArr=[
    { id: 7, name: "Smith", age: "25", profession: "Batsman" },
    { id: 8, name: "Root", age: "23", profession: "Captain" },
    { id: 9, name: "Warner", age: "26", profession: "Vice-Captain" },
  ]
  let ans=arr.concat(newArr);
  return ans;
}

console.log(PrintDeveloperbyMap());
console.log(PrintDeveloperbyForEach());
console.log(addData());
console.log(removeAdmin());
console.log(concatenateArray());
