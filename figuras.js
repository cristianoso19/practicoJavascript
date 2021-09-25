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
   return lado1 + lado2 + base;
}
//console.log("La altura del triangulo: " + alturaTriangulo + "cm")
//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
function areaTriangulo(base, altura) {
   return (base * altura) / 2;
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
