"use strict"

function enable(){
    document.getElementById('dis').disabled = false;
}

function myLoan(){
    var ldetails = document.getElementsByTagName('select');//different selections
    var  tcuota = ldetails[0], monto = ldetails[1], cuota = ldetails[2]; //different values from the form
    var result = document.getElementById('outcome'); //the outcome tag
    var acumulado = "", restante = ""; //valores acumulados
    var resumen = document.getElementsByClassName('summary'); //valores totalizados en la parte superior de la tabla
    var int = (0.10 / 30).toPrecision(); //interes calculado por dia
    var aint = ""; //interes llevado a periodos
    var txt = ""; //texto para desplegar la tabla de amortizacion (loop)
    var interes; //calculo del interes total
    var pcapital, pinteres, ptotal; //valores detallados de tabla de amortizacion
    var doc = document.getElementById('overgf');
    if(tcuota.value == "" || monto.value == "" || cuota.value == ""){
        return result.innerHTML = "*Debe completar todos los campos";
    }
    switch(tcuota.value){
        case "Semanal":
            aint = (7 * int).toPrecision();
            break;
        case "Quincenal":
            aint = (15 * int).toPrecision();
            break;
        case "Mensual":
            aint = (30 * int).toPrecision();
            break;
    };
    /* VARIABLES A SER UTILIZADAS EN LA TABLA */
    interes = (cuota.value * aint * monto.value).toFixed(0);
    pcapital = (monto.value / cuota.value).toFixed(2);
    pinteres = (interes / cuota.value).toFixed(2);
    ptotal = (pinteres * 1 + pcapital * 1).toFixed(2);
    acumulado = 0;
    acumulado = Number(acumulado);
    restante = ptotal * cuota.value;

    /* VALORES A COLORCARSE EN EL INICIO DE LA TABLA DE AMORTIZACION */
    resumen[0].innerHTML = "Monto: " + monto.value;
    resumen[1].innerHTML = cuota.value + " cuotas";
    resumen[2].innerHTML = ptotal + " " + tcuota.value;
    resumen[3].innerHTML = "Interes: " + interes;

    /* VALORES A COLOCARSE COMO CUERPO DE TABLA DE AMORTIZACION */
    txt += "<table class=" + "tdata" + "><tr><th>Cuota no.</th><th>Capital</th><th>Interes</th>" + 
    "<th>Cuota</th><th>Total Pago</th><th>Total pendiente</th></tr>"
    
    for(var i = 0; i < cuota.value; i++){
        txt += "<tr>" + "<td>" + (i + 1) + "</td>" +
        "<td>" + pcapital + "</td>" +
        "<td>" + pinteres + "</td>" +
        "<td>" + ptotal + "</td>" +
        "<td>" + (acumulado += (ptotal * 1)).toFixed(2) + "</td>" +
        "<td>" + (restante -= ptotal).toFixed(2) + "</td>" + "</tr>";
    };

    txt += "</table>"
    document.getElementById('stable').style.display = "block"
    doc.innerHTML = txt;
};