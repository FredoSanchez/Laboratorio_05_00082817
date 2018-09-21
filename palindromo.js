var prueba = prompt("Ingrese una palabra para ver si es palindroma");


var  isPalindroma=(palabra="") =>{
    aux = "";
    for(i=1; i<=palabra.length; i++){
        aux=aux+palabra[palabra.length-i];
    }
    if(aux==palabra){
        console.log("La palabra "+palabra+" es palindroma");
    }else{
        console.log("No es palindroma :(");
    }
}

isPalindroma(prueba);