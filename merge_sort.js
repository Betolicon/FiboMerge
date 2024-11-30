function merge(left, right){
    let result = []
    let i = 0, j = 0
    while (i < left.length && j < right.length) {
        if(left[i] < right[j]){
            result.push(left[i])
            i++
        }
        else{
            result.push(right[j])
            j++
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))
}

function mergeSort(array){
    if (array.length <= 1){
        return array 
    }
    const mid = Math.floor(array.length / 2)
    const left = array.slice(0, mid)
    const right = array.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}


console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))