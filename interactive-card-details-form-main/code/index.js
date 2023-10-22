let detailsOnCard = document.querySelectorAll("#onCard");
let inputs = document.querySelectorAll("#inputCard");

inputs.forEach((input, index) => {
  input.addEventListener("change", () => {
    detailsOnCard[index].textContent = input.value;
  });
});
console.log(detailsOnCard);
