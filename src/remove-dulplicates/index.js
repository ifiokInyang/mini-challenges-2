function removeDuplicates(obj) {
let keyObject;
let valueObject;
let keyArray = Object.keys(obj)
let sortedArray = keyArray.sort((a,b) => (a-b))
let rearrangedObject = {}
for (let i = 0; i<sortedArray.length; i++){
keyObject = sortedArray[i]
valueObject = obj[sortedArray[i]]
rearrangedObject[keyObject] = valueObject
// start from length-1
valueObject.flat().filter(arrayElement => arrayElement.indexOf()> -1)
}
return rearrangedObject
}
console.log(removeDuplicates(
{
    "1": ["A", "B", "C"],
    "2": ["A", "B", "D", "A"]
  }))
module.exports = removeDuplicates;
