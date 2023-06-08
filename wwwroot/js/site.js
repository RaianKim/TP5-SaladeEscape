// Tiempo inicial en segundos
var tiempoInicial = 600;

// Función para actualizar el temporizador
function actualizarTemporizador() {
  // Obtenemos el elemento HTML donde se mostrará el temporizador
  var temporizador = document.getElementById("timer");
  
  // Obtenemos la hora actual
  var horaActual = new Date().getTime();
  
  // Obtenemos el tiempo restante almacenado en localStorage, o usamos el tiempo inicial si no hay ningún valor almacenado
  var tiempoRestante = parseInt(localStorage.getItem("tiempoRestante")) || tiempoInicial;
  
  // Calculamos el tiempo transcurrido desde que se cargó la página
  var tiempoTranscurrido = Math.floor((horaActual - tiempoInicio) / 1000);
  
  // Si se ha alcanzado un segundo completo, actualizamos el temporizador
  if (tiempoTranscurrido > tiempoAnterior) {
    tiempoRestante = tiempoRestante - 1;
    if (tiempoRestante <= 0) {
      clearInterval(intervalo);
      temporizador.innerHTML = "Tiempo agotado";
    } else {
      // Si el tiempo restante es mayor que cero, se actualiza el temporizador
      var minutos = Math.floor(tiempoRestante / 60);
      var segundos = tiempoRestante - minutos * 60;
      temporizador.innerHTML = minutos + ":" + (segundos < 10 ? "0" : "") + segundos;
    }
    
    // Almacenamos el tiempo restante en localStorage
    localStorage.setItem("tiempoRestante", tiempoRestante);
  }
  
  // Actualizamos el tiempo anterior
  tiempoAnterior = tiempoTranscurrido;
  
  // Esperamos hasta el siguiente segundo completo
  intervalo = setTimeout(actualizarTemporizador, 1000 - (horaActual % 1000));
}

// Almacenamos el tiempo inicial en localStorage para que sea accesible desde otras páginas
localStorage.setItem("tiempoInicial", tiempoInicial);

// Obtenemos la hora en que se cargó la página
var tiempoInicio = new Date().getTime();

// Obtenemos el tiempo restante almacenado en localStorage, o usamos el tiempo inicial si no hay ningún valor almacenado
var tiempoRestante = parseInt(localStorage.getItem("tiempoRestante")) || tiempoInicial;

// Si se accede a la página específica, disminuimos el tiempo restante en 1 segundo
if (window.location.href == "Habitacion1.cshtml" || window.location.href == "Habitacion2.cshtml" || window.location.href == "Habitacion3.cshtml" || window.location.href == "Habitacion1.cshtml") {
  tiempoRestante = tiempoRestante - 1;
  localStorage.setItem("tiempoRestante", tiempoRestante);
}

// Inicializamos el tiempo anterior
var tiempoAnterior = 0;

// Actualizamos el temporizador
actualizarTemporizador();