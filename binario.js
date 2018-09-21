

var  binario=(decimal=0) =>{
    cad="";
    while(true){
        num = decimal/2;
        bin = decimal%2;
        cad = bin + cad;

        if (num <= 0){
            break;
        }
        a=num;
    }
    console.log(cad);
}