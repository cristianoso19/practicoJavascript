function calcularAhorro() {
   const ingreso = document.getElementById("ingreso").value;
   const gasto = document.getElementById("gasto").value;
   const ahorro = calculaAhorro(ingreso, gasto);
   const spanAhorro = document.getElementById("ahorro");
   spanAhorro.textContent = ahorro;

}

function calculaAhorro(ingreso, gasto) {
   const restante = ingreso - gasto;
   if (restante <= 0) {
      return 0;
   } else {
      return restante * 0.10;
   }
}
