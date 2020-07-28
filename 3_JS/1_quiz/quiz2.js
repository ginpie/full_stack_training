
function twoSum(arr, target) {
    let i = 0
    let j = arr.length - 1
    while (i !== j) {
        if (target > arr[i] + arr[j]){
            i++
        } else if (target < arr[i] + arr[j]) {
            j--
        } else {
            console.log(`[${i}, ${j}]`)
            return
        }
    }
    console.log('no sum elements found')
}



const arr = [1,3,4,6,7,8,10,14,15]
const target = 14
twoSum(arr, target)
