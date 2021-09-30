let lista = [];

function agregaElemento() {
   const inputElemento = document.getElementById("elemento");
   if (inputElemento.value != "") {
      const elemento = parseInt(inputElemento.value);
      lista.push(elemento);
      muestraElementos();
      inputElemento.value = "";

      if (lista.lenght != 0) {
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
   let listaUl = document.getElementById("lista-ordenada");
   listaUl.innerHTML = "";
}

function imprimirElementos(element, index, array) {
   let listaUl = document.getElementById("lista-ordenada");
   let li = document.createElement('li');
   li.textContent = element;
   listaUl.appendChild(li);

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

function toggleVisible() {
   let geometric = document.getElementById("geometry");
   let discount = document.getElementById("discount");
   let average = document.getElementById("average");
   geometric.classList.toggle("no-visible");
   discount.classList.toggle("no-visible");
   average.classList.toggle("no-visible");
}

function calcularDescuento() {
   const input1 = document.getElementById("precioOriginal");
   const input2 = document.getElementById("descuento");
   const input3 = document.getElementById("cupon");

   const precio = input1.value;
   const descuento = input2.value;
   const cupon = input3.value;

   const valorDescuento = calculaValorDscto(precio, descuento);
   const valorCupon = calcularCuponDscto(precio, cupon);
   const precioFinal = precio - valorDescuento - valorCupon;
   const spanPrecio = document.getElementById("precioDescuento");
   spanPrecio.textContent = precioFinal;
}

function calcularCuponDscto(precio, cupon) {
   const porcentaje = getCuponDsctoValue(cupon);
   const valorCupon = calculaValorDscto(precio, porcentaje);
   return valorCupon;
}

function getCuponDsctoValue(cuponBuscado) {
   const cupones = [{
         name: "JuanDC_es_Batman",
         discount: 15,
      },
      {
         name: "pero_no_le_digas_a_nadie",
         discount: 30,
      },
      {
         name: "es_un_secreto",
         discount: 25,
      },
   ];
   const userCupon = cupones.find(cupon => cupon.name === cuponBuscado);

   if (typeof userCupon === 'undefined') {
      return 0;
   } else {
      return userCupon.discount;
   }
}

function calculaValorDscto(precio, descuento) {
   const descuentoPorcentaje = 1 - (descuento / 100);
   return precio - (precio * descuentoPorcentaje);
}


//GEOMETRIA
function calcularCuadrado() {
   const input = document.getElementById("ladocuadrado");
   const lado = input.value;
   const perimetro = perimetroCuadrado(lado);
   const area = areaCuadrado(lado);
   const spanPerimetro = document.getElementById("perimetroCuadrado")
   const spanArea = document.getElementById("areaCuadrado")
   spanPerimetro.textContent = perimetro;
   spanArea.textContent = area;
}

function calcularIsoceles() {
   const input1 = document.getElementById("lado1i");
   const input2 = document.getElementById("lado2i");
   const inputbase = document.getElementById("basei");
   const lado1 = parseInt(input1.value, 10);
   const lado2 = parseInt(input2.value, 10);
   const base = parseInt(inputbase.value, 10);
   let altura;
   if (chequearLados(lado1, lado2) === true) {
      altura = calcularAltura(lado1, base);
   } else {
      altura = "Los lados no son iguales";
   }
   const perimetro = perimetroTriangulo(lado1, lado2, base);
   const area = areaTriangulo(base, altura);
   console.log(altura);
   const spanAltura = document.getElementById("alturaIsoceles");
   const spanPerimetro = document.getElementById("perimetroIsoceles");
   const spanArea = document.getElementById("areaIsoceles");
   spanAltura.textContent = altura;
   spanPerimetro.textContent = perimetro;
   spanArea.textContent = area;
}

function calcularTriangulo() {
   const input1 = document.getElementById("lado1");
   const input2 = document.getElementById("lado2");
   const inputbase = document.getElementById("base");
   const inputaltura = document.getElementById("altura");
   const lado1 = parseInt(input1.value, 10);
   const lado2 = parseInt(input2.value, 10);
   const base = parseInt(inputbase.value, 10);
   const altura = parseInt(inputaltura.value, 10);
   const perimetro = perimetroTriangulo(lado1, lado2, base);
   const area = areaTriangulo(base, altura);
   const spanPerimetro = document.getElementById("perimetroTriangulo")
   const spanArea = document.getElementById("areaTriangulo")
   spanPerimetro.textContent = perimetro;
   spanArea.textContent = area;
}

function calcularCirculo() {
   const input = document.getElementById("radio");
   const radio = input.value;
   const perimetro = perimetroCirculo(radio);
   const area = areaCirculo(radio);
   const spanPerimetro = document.getElementById("perimetroCirculo")
   const spanArea = document.getElementById("areaCirculo")
   spanPerimetro.textContent = perimetro;
   spanArea.textContent = area;
}


//Código cuadrado
console.group("Cuadrados");
/*const ladoCuadrado = 5;*/
/*console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");*/

function perimetroCuadrado(lado) {
   return lado * 4;
}
//console.log("El perimetro del cuadrado: " + perimetroCuadrado + "cm");
function areaCuadrado(lado) {
   return lado * lado;
}
/*const areaCuadrado = ladoCuadrado * ladoCuadrado;*/
/*console.log("El area del cuadrado es: " + areaCuadrado + "cm2");*/
console.groupEnd();

//Código Triangulo
console.group("Triangulos")
/*const ladoTriangulo1 = 6;*/
/*const ladoTriangulo2 = 6;*/
/*const baseTriangulo = 4;*/
/*const alturaTriangulo = 5.5;*/

/*console.log(*/
/*"Los lados del triangulo miden " +*/
/*ladoTriangulo1 + "cm, " +*/
/*ladoTriangulo2 + "cm, " +*/
/*baseTriangulo + "cm."*/
/*);*/
function perimetroTriangulo(lado1, lado2, base) {
   return (lado1 + lado2) + base;
}
//console.log("La altura del triangulo: " + alturaTriangulo + "cm")
//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
function areaTriangulo(base, altura) {
   return (base * altura) / 2;
}

function chequearLados(lado1, lado2) {
   if (lado1 === lado2) {
      return true;
   } else {
      return false;
   }
}

function calcularAltura(lado, base) {
   return (Math.sqrt(Math.pow(lado, 2) - (Math.pow(base, 2) / 4)));
}
//console.log("El perimetro del triangulo: " + perimetroTriangulo + "cm");
//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log("El area del triangulo: " + areaTriangulo + "cm2");
console.groupEnd();

//Código Circulo
console.group("Circulo");
//radio, diametro, pi, circunferencia, area
/*const radioCirculo = 4;*/
/*const diametroCirculo = radioCirculo * 2;*/
/*const pi = Math.PI;*/
/*const circunferencia = diametroCirculo * pi;*/
/*const areaCirculo = (radioCirculo * radioCirculo) * pi;*/
function diametroCirculo(radio) {
   return radio * 2;
}

function perimetroCirculo(radio) {
   const diametro = diametroCirculo(radio);
   return diametro * Math.PI;
}

function areaCirculo(radio) {
   return (radio * radio) * Math.PI;
}
/*console.log("El radio del circulo: " + radioCirculo + "cm");*/
/*console.log("El diametro del circulo: " + diametroCirculo + "cm");*/
/*console.log("El pi del circulo: " + pi + "cm");*/
/*console.log("La circunferencia del círculo: " + circunferencia + "cm");*/
/*console.log("El área del circulo: " + areaCirculo + "cm2");*/
console.groupEnd();
