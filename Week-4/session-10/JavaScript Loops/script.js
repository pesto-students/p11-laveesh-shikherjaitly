function drawTriangle(){
    var x = "*";
    
    for(let i = 0;i<4;i++){
        var row = "";
        for(let j=i;j>=0;j--){
            row += x; 
        }
        console.log(row);
    }
}

drawTriangle();