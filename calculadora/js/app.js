function toggleVisible(section) {
   let geometric = document.getElementById("geometry");
   let discount = document.getElementById("discount");
   let average = document.getElementById("average");
   let salary = document.getElementById("salary");

   let gButton = document.getElementById("gButton");
   let dButton = document.getElementById("dButton");
   let aButton = document.getElementById("aButton");
   let sButton = document.getElementById("sButton");

   geometric.classList.add("no-visible");
   discount.classList.add("no-visible");
   average.classList.add("no-visible");
   salary.classList.add("no-visible");
   gButton.classList.remove("active");
   dButton.classList.remove("active");
   aButton.classList.remove("active");
   sButton.classList.remove("active");



   switch (section) {
      case "geometry":
         geometric.classList.remove("no-visible");
         gButton.classList.add("active");
         break;
      case "discount":
         discount.classList.remove("no-visible");
         dButton.classList.add("active");
         break;
      case "average":
         average.classList.remove("no-visible");
         aButton.classList.add("active");
         break;
      case "salary":
         salary.classList.remove("no-visible");
         sButton.classList.add("active");
         break;
      default:
         console.log("Boton Incorrecto");
         break;
   }
}
