const countOnly = function(allItems, itemsToCount) {
let filteredObj = {};
for (let item of allItems){
  
  if (itemsToCount[item]){
    if (filteredObj[item]){
      filteredObj[item] += 1; 
    } else {
      filteredObj[item] = 1;
    }

  }
}
console.log("filteredObj",filteredObj);
  return filteredObj;
  
}



// console.log("filteredObj",filteredObj);


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];



const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
const result2 = countOnly(firstNames,{ "Joe": true,"Jason": true, "Karima": true, "Fang": true, "Agouhanna": true })

console.log("result2", result2)


console.log("result1", result1)
console.log("result1[Jason]", result1["Jason"])
console.log("result1[Karima]", result1["Karima"])

