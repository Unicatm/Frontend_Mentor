let detailsOnCard = document.querySelectorAll("#onCard");
let inputs = document.querySelectorAll("#inputCard");

const contentFront = document.querySelectorAll(".content-front");

const warning = document.createElement("p");

function validation() {
  if (detailsOnCard[1].textContent.length < 12) {
    warning.textContent = "Uncompleted";
    contentFront.appendChild(warning);
  }
}

inputs.forEach((input, index) => {
  input.addEventListener("change", () => {
    detailsOnCard[index].textContent = input.value;
    console.log(detailsOnCard[1].textContent.length);
    validation();
  });
});
