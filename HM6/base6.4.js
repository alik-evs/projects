
const submitBtn = document.querySelector(".btn");
const outBlock = document.querySelector(".out");
const inputFields = document.querySelectorAll(".arr");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault(); 

  const dataArray = [];

  inputFields.forEach(function(input) {
    const dataForm = input.dataset.form;
    const value = input.value;
    const data = `${dataForm}: ${value}`;
    dataArray.push(data);
  });

  outBlock.textContent = dataArray.join("\n");
});
