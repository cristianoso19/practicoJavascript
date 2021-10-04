function calcularSalarios() {
   const salariosCol = colombia.map(
      function(persona) {
         return persona.salary
      }
   );

   const salariosColSorted = salariosCol.sort(
      function(salaryA, salaryB) {
         return salaryA - salaryB;
      }
   );
   console.log(salariosColSorted);

}

function esPar(number) {
   return (number % 2 === 0);
}

function medianaSalario(lista) {
   const mitad = parseInt(lista.length / 2);
   if (esPar(lista.length)) {
      const pesonaMitad1 = lista[mitad - 1];
      const personMitad2 = lista[mitad];
      const mediana = mediaAritmetica([personaMitad1, personaMitad2]);
      return mediana
   } else {
      const personaMitad = lista[mitad];
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
