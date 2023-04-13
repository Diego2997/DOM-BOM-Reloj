function actualizarDia(){
    let dia = new Date(),
        diaSemana = dia.getDay(),
        numeroDia = dia.getDate(),
        mes = dia.getMonth(),
        anio = dia.getFullYear();

        //Enviar al html las variables
        let pDiaSemana = document.getElementById('data-diaSemana'),
            pDia = document.getElementById('data-dia'),
            pMes = document.getElementById('data-mes'),
            pAnio = document.getElementById('data-anio');

        //Asignar valores a los objetos del html
        let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        
        pDiaSemana.innerText = semana[diaSemana];
        pDia.innerText = numeroDia;
        pMes.innerText = meses[mes];
        pAnio.innerText = anio;
}

function actualizarHora(){
    let fecha = new Date(),
        hora = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();

        //Enviar al html las variables
        let pHora = document.getElementById('data-horas'),
            pMinutos = document.getElementById('data-minutos'),
            pSegundos = document.getElementById('data-segundos'),
            pAmPm = document.getElementById('data-ampm');

        //Asignar valores a los objetos del html    
        if(hora >= 12){
            pAmPm.innerText = 'PM';
        } else {
            pAmPm.innerText = 'AM';
        }
        if(segundos < 10){
            pSegundos.innerText = '0' + segundos;
        } else {
            pSegundos.innerText = segundos;
        }

        if(minutos < 10){
            pMinutos.innerText = '0' + minutos;
        } else {
            pMinutos.innerText = minutos;
        }
            
        if(hora < 10){
            pHora.innerText = '0' + hora;
        } else {
            pHora.innerText = hora;
        }
}

window.setInterval(actualizarHora, 1000);
actualizarDia();