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
