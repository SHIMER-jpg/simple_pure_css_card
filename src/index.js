window.addEventListener("DOMContentLoaded", main);

function main() {
  const state = {
    selectedValue: "0",
  };

  //Add event listener to checkboxes
  document
    .querySelector(".number-selector")
    .addEventListener("change", function (e) {
      if (state.selectedValue !== "0")
        document.querySelector("#cbox" + state.selectedValue).checked = false;

      state.selectedValue = e.target.value;
    });

  //Add event listener to submit button
  document
    .querySelector(".submit-button")
    .addEventListener("click", function (e) {
      //disable rating card
      if (state.selectedValue !== "0") {
        document.querySelector(".rating").style.display = "none";

        document.querySelector(
          ".selected-text"
        ).innerHTML = `You selected ${state.selectedValue} out of 5`;
        //enable thank-you card
        document.querySelector(".thank-you").style.display = "flex";
      }
    });
}
