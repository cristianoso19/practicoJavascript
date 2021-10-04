let lista = [];

function calcularPromedios() {
   const promedio = calculaPromedio();
   const mediana = calculaMediana();
   const moda = calcularModa();
   const geometrica = calcularGeometrica();
   console.log("PROMEDIO: " + promedio);
   console.log("MEDIANA: " + mediana);
   console.log("MODA: Valor " + moda.valor + ", se repite: " + moda.contar);
   console.log("GEOMETRICA: " + geometrica);
   const spanPromedio = document.getElementById("promedio");
   const spanMediana = document.getElementById("mediana");
   const spanModa = document.getElementById("moda");
   const spanGeometrica = document.getElementById("geometrica");

   spanPromedio.textContent = promedio;
   spanMediana.textContent = mediana;
   spanModa.textContent = "Valor " + moda.valor + ", se repite: " + moda.contar;
   spanGeometrica.textContent = geometrica;
   lista = [];

}

function calcularGeometrica() {
   const multiplicacion = multiplicarElementos();
   console.log("Mult" + multiplicacion);
   const geometrica = Math.pow(multiplicacion, 1 / lista.length);
   return geometrica;
}

function calcularModa() {
   let modaElementos = [];
   let cuentaValor = {};
   let contar = 0;
   let valor = 0;

   for (let i = 0; i < lista.length; i++) {
      if (i != 0) {
         if (lista[i - 1] == lista[i]) {
            contar++;
         } else {
            cuentaValor = {
               valor,
               contar
            };
            modaElementos.push(cuentaValor);
            contar = 1;
            valor = lista[i];
         }
         if (i == lista.length - 1) {
            cuentaValor = {
               valor,
               contar
            };
            modaElementos.push(cuentaValor);
         }
      } else {
         contar = 1;
         valor = lista[i]
      }
   }
   modaElementos.sort(ordenaCuenta);
   //retornamos el ultimo elemento del array ordenado
   return modaElementos.at(-1);
}

function ordenaCuenta(a, b) {
   if (a.contar < b.contar) {
      return -1;
   } else if (a.contar > b.contar) {
      return 1;
   }
   return 0;
}

function calculaMediana() {
   let mediana = 0;
   const elementoMediana = Math.round(lista.length / 2);
   if (lista.length % 2 === 0) {
      //es par
      mediana = (lista[elementoMediana] + lista[elementoMediana - 1]) / 2;
   } else {
      //es impar
      mediana = lista[elementoMediana];
   }
   return mediana
}

function calculaPromedio() {
   let sumaElementos = 0;

   for (let i = 0; i < lista.length; i++) {
      sumaElementos = sumaElementos + lista[i];
   }
   const promedio = sumaElementos / lista.length;
   return promedio;
}

//Agregar, eliminar, ordenar lista
function agregaElemento() {
   const inputElemento = document.getElementById("elemento");
   if (inputElemento.value != "") {
      const elemento = parseInt(inputElemento.value);
      lista.push(elemento);
      muestraElementos();
      inputElemento.value = "";

      if (lista.length != 0) {
         activarBotonEliminar();
      }
   }
   inputElemento.focus();
}

function muestraElementos() {
   lista.sort(comparar);
   limpiarLista();
   lista.forEach(imprimirElementos)
}

function limpiarLista() {
   const listaUl = document.getElementById("lista-ordenada");
   listaUl.innerHTML = "";
}

function imprimirElementos(element, index, array) {
   const listaUl = document.getElementById("lista-ordenada");
   const li = document.createElement('li');
   li.textContent = element;
   listaUl.appendChild(li);

}

function multiplicarElementos() {
   let resultado = 1;
   for (let i = 0; i < lista.length; i++) {
      resultado = resultado * lista[i];
   }
   return resultado;
}

function comparar(a, b) {
   return a - b;
}

function eliminarLista() {
   limpiarLista();
   lista = [];
   quitarBotonEliminar();
}

function activarBotonEliminar() {
   let botonEliminar = document.getElementById("botonEliminar");
   botonEliminar.classList.remove("no-visible");
}

function quitarBotonEliminar() {
   let botonEliminar = document.getElementById("botonEliminar");
   botonEliminar.classList.add("no-visible");
}
