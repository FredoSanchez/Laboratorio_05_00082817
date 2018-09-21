

var  binario=(decimal=0) =>{
    cad="";
    num=1;
    while(num>0){
        num = decimal/2;
        bin = decimal%2;
        cad = bin + cad;

        a=num;
    }
    console.log(cad);
}