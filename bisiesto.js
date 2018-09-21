var isBisiesto = (numero = 0) => {
    if ((((numero%100)!=0)&&((numero%4)==0))||((numero%400)==0)){
        console.log("El año " + numero+" es bisiesto");
    }
    else{
        console.log("El año "+numero+ " no es Bisiesto")
    }
}