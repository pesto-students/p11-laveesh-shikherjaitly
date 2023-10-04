function divideArray(num){
    let evenNums = [];
    let oddNums = [];

    for(let n in num){
        if(num[n] % 2 == 0){
            evenNums.push(num[n]);
        }
        else{
            oddNums.push(num[n]);
        }
    }
    evenNums.sort();
    oddNums.sort();
    
    if(evenNums.length == 0){
        console.log("Even Numbers:" + "\n" + " None");
    }
    else{
        console.log("Even Numbers:" + "\n" + evenNums);
    }

    if(oddNums.length == 0){
        console.log("Odd Numbers:" + "\n" + " None");
    }
    else{
        console.log("Odd Numbers:" + "\n" + oddNums);
    }

}



