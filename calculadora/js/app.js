function toggleVisible(section) {
   const geometric = document.getElementById("geometry");
   const discount = document.getElementById("discount");
   const average = document.getElementById("average");
   const salary = document.getElementById("salary");
   const save = document.getElementById("saver");

   const gButton = document.getElementById("gButton");
   const dButton = document.getElementById("dButton");
   const aButton = document.getElementById("aButton");
   const sButton = document.getElementById("sButton");
   const saButton = document.getElementById("saButton");

   geometric.classList.add("no-visible");
   discount.classList.add("no-visible");
   average.classList.add("no-visible");
   salary.classList.add("no-visible");
   save.classList.add("no-visible");
   gButton.classList.remove("active");
   dButton.classList.remove("active");
   aButton.classList.remove("active");
   sButton.classList.remove("active");
   saButton.classList.remove("active");


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
      case "saver":
         save.classList.remove("no-visible");
         saButton.classList.add("active");
         break;
      default:
         console.log("Boton Incorrecto");
         break;
   }
}
