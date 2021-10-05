function calcularSalarios() {
   const salariosCol = colombia.map(
      function(persona) {
         return parseInt(persona.salary);
      }
   );

   const salariosColSorted = salariosCol.sort(
      function(salaryA, salaryB) {
         return salaryA - salaryB;
      }
   );
   const medianaGeneral = medianaSalario(salariosColSorted);
   const medianaTop10 = medianaTop(salariosColSorted);
   const sMediana = document.getElementById("mediana-salarios");
   const sTop = document.getElementById("mediana-top");

   sMediana.textContent = medianaGeneral;
   sTop.textContent = medianaTop10;

}

function medianaTop(lista) {
   const top10 = parseInt(lista.length - (lista.length * 0.9));
   const topInicio = lista.length - top10;
   const topFin = lista.length - 1;
   const listaTop = lista.splice(topInicio, topFin);
   const medianaTop = medianaSalario(listaTop);
   return medianaTop;
}

function esPar(number) {
   return (number % 2 === 0);
}

function medianaSalario(lista) {
   const mitad = parseInt(lista.length / 2);
   if (esPar(lista.length)) {
      const personaMitad1 = lista[mitad - 1];
      const personaMitad2 = lista[mitad];
      const mediana = mediaAritmetica([personaMitad1, personaMitad2]);
      return mediana;
   } else {
      const personaMitad = lista[mitad];
      return personaMitad;
   }
}

function mediaAritmetica(lista) {
   const sumaLista = lista.reduce(
      function(valorAcumulado = 0, nuevoElemento) {
         return valorAcumulado + nuevoElemento
      }

   )
   const promedioLista = sumaLista / lista.length;
   return promedioLista;
}
