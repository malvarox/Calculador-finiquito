function $finiquito(){
  var vacaciones = prompt("¿Cuántos dias de vacaciones tiene?");
  var $vacaciones = parseFloat(vacaciones);
  var dias = prompt("¿Cuántos dias lleva trabajado?");
  var $dias = parseFloat(dias);
  document.write("el resultado del número de <strong>días hábiles de vacaciones que debe indemnizar</strong> el empleador por cada mes trabajado "+ $vacaciones / 12);
  var dhv = parseFloat($vacaciones / 12);
  document.write(" el resultado del número de <strong>días hábiles que deben indemnizarse</strong> "+ dhv * $dias)
  var dhi = parseFloat(dhv * $dias);






  console.log(vacaciones, dias, dhv, dhi, $dias, $vacaciones)
}
