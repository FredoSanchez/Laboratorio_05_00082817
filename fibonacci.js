var fibonacci = (numero = 0) => {

    a = 0;
    b = 1;
    c = 0;
    if (numero >= 2) {
        for (i = 0; i < numero; i++) {
            c = a + b
            a = b
            b = c
            console.log(a);
        }
    }
    else if(numero==0){
        console.log(0);
    }
    else if (numero==1){
        console.log(0);
        console.log(1);
    }
    else{
        console.log("Error");
    }

}
