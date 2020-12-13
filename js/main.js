//card function
function cardFn() {
  //get toggle label
  const toggleLabel = document.querySelector("label");
  //monthly price
  const monthlyPriceArr = ["$19.99", "$24.99", "$39.99"];
  //annual price
  const annualPriceArr = ["$199.99", "$249.99", "$399.99"];

  //toggleFn
  function toggleFn(e) {
    e.preventDefault();
    //get toggleButton
    const toggleButton = toggleLabel.querySelector("button");
    toggleButton.classList.toggle("move");
    //get h2 to change the state
    const titles = document.querySelectorAll("h2");
    //now add and remove current class
    //note query-selectorALL gives the node list not array only foreach works
    titles.forEach((title) => title.classList.toggle("current"));
    //get prices
    const prices = document.querySelectorAll(".price");
    prices.forEach(togglePrice);

    //toggle price function
    function togglePrice(price, index) {
      //checking if its contains annual class or not
      if (price.classList.contains("annual")) {
        //if its then add monthly price
        price.textContent = `${monthlyPriceArr[index]}`;
        //remove annual
        price.classList.remove("annual");
      } else if (!price.classList.contains("annual")) {
        //if its not then add monthly price
        price.textContent = `${annualPriceArr[index]}`;
        //then add class annual
        price.classList.add("annual");
      }
    }
  }

  //cardFN-event-listeners
  toggleLabel.addEventListener("click", toggleFn);
}
