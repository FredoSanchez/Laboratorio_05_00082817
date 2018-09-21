var radio = (numero = 0) => {
    if(numero<=0){
        console.log("ERROR:El radio debe ser mayor que cero.");
    }else if (numero >0){
        console.log("El radio del circulo es: " + numero*Math.PI);
    }
    else{
        console.log("Debe ingresar un numero");
    }
}