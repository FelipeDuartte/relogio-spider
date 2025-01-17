var hora = document.getElementById('hora');
var minuto = document.getElementById('minutos');
var segundo = document.getElementById('segundos');

var relogio = setInterval(function time(){
var agora = new Date();
var hr = agora.getHours();
var min = agora.getMinutes();
var s = agora.getSeconds();

if (hr < 10) hr = '0' + hr;

if (min < 10) min = '0' + min;

if (s < 10) s = '0' + s;

 hora.innerHTML = hr
 minuto.innerHTML = min
 segundo.innerHTML = s
})


