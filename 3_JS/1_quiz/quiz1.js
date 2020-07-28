// let arr = []
// for (let i = 0; i <= 100; i++) {
// 	if (i%4 === 0) {
// 		if (i%5 !== 0) {
// 			arr.push(i)
// 		}
// 	}
// }
// console.log(arr.slice(0,10))

let arr = []
for (let i = 0; i <= 100; i+=4) {
    if (i%5 !== 0) {
		arr.push(i)
    }
    if (arr.length === 10) {
		break
	}
}
console.log(arr)
