//Código cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

//Código Triangulo
console.group("Triangulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
   "Los lados del triangulo miden " +
   ladoTriangulo1 + "cm, " +
   ladoTriangulo2 + "cm, " +
   baseTriangulo + "cm."
);
console.log("La altura del triangulo: " + alturaTriangulo + "cm")
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo: " + perimetroTriangulo + "cm");
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo: " + areaTriangulo + "cm2");
console.groupEnd();

//Código Circulo
console.group("Circulo");
//radio, diametro, pi, circunferencia, area
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const pi = Math.PI;
const circunferencia = diametroCirculo * pi;
const areaCirculo = (radioCirculo * radioCirculo) * pi;

console.log("El radio del circulo: " + radioCirculo + "cm");
console.log("El diametro del circulo: " + diametroCirculo + "cm");
console.log("El pi del circulo: " + pi + "cm");
console.log("La circunferencia del circulo: " + circunferencia + "cm");
console.log("El área del circulo: " + areaCirculo + "cm2");
console.groupEnd();
