
const arr = [1, 2, 3, 4, 5, 6, 7, 98, 52, 12, 12, 45, 2, 54, 51, 2, 154, 5, 45, 1, 2, 1, 54, 8, 45, 87, 2, 5, 4, 6, 97, 5, 12, 3, 84, 2, 54, 87, 8, 54, 34, 58, 7]
// let shuzu = []
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === 10) {
//       shuzu.push([arr[i], arr[j]])
//     }
//   }
// }
// console.log(shuzu)
let obj = {}
let arr2 = []
for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = obj[arr[i]] === undefined ? 0 : obj[arr[i]] + 1
  if (obj[arr[i]] > 0) {
    arr2.push(arr[i])
  }
}

// for (const key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     const element = obj[key]
//     if (element > 0) {
//       arr2.push(key)
//     }
//   }
// }
const b = [...new Set(arr2)]
console.log(b)
console.log(obj)
