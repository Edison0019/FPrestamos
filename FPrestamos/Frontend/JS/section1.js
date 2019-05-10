"use strict"
function myLoan(){
    var ldetails = document.getElementsByTagName('select');//different selections
    var  tcuota = ldetails[0], monto = ldetails[1], cuota = ldetails[2]; //different values from the form
    var result = document.getElementById('outcome'); //the outcome tag
    var acumulado = "", restante = ""; //valores acumulados
    var resumen = document.getElementsByClassName('summary'); //valores totalizados en la parte superior de la tabla
    var int = (0.10 / 30).toPrecision(); //interes calculado por dia
    var aint = ""; //cuotas llevadas a dias
    if(tcuota.value == "" || monto.value == "" || cuota.value == ""){
        return result.innerHTML = "Debe completar todos los campos";
    }
    switch(tcuota.value){
        case "Semanal":
            aint = 7 * int;
            break;
        case "Quincenal":
            aint = 15 * int;
            break;
        case "Mensual":
            aint = 30 * int;
            break;
    };
    resumen[0].innerHTML = "Monto: " + monto.value;
    resumen[1].innerHTML = cuota.value + " cuotas";
    resumen[2].innerHTML = "Interes: " + (cuota.value * aint * monto.value)
}