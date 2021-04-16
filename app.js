const checkbox = document.querySelector("#checkbox");
const lowPrice = document.querySelectorAll(".lower-price");
const bigPrice = document.querySelectorAll(".bigger-price");

function check() {
      const annually = document.querySelector(".annually");
      const monthly = document.querySelector(".monthly");

      if (checkbox.checked == true) {
            monthly.classList.toggle("active", true)
            annually.classList.toggle("active", false)
            lowerPrice()

      } else {
            annually.classList.toggle("active", true)
            monthly.classList.toggle("active", false)
            biggerPrice()
      }
}

function lowerPrice() {
      for (let i = 0; i < lowPrice.length; i++) {
            lowPrice[i].style.display = "block";
      }

      for (let i = 0; i < bigPrice.length; i++) {
            bigPrice[i].style.display = "none";
      }
}

function biggerPrice() {
      for (let i = 0; i < bigPrice.length; i++) {
            bigPrice[i].style.display = "block";
      }

      for (let i = 0; i < lowPrice.length; i++) {
            lowPrice[i].style.display = "none";
      }
}

checkbox.addEventListener("change", check);
