function fibs(n){
    let numBefore = 0
    let numAfter = 1
    let sum = 0
    let sequence = [0, 1]
    if(n <= 0)
        return []
    if(n == 1)
        return [0]
    else if(n == 2)
        return sequence
    else{
        while (n-2 > 0){
        sum = numBefore + numAfter
        numBefore = numAfter
        numAfter = sum
        sequence.push(sum)
        n--
    }
    return sequence
    }
}

function fibsRec(n){
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
  
    const sequence = fibsRec(n - 1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
}

num = 5
console.log(fibs(num))
console.log(fibsRec(num))