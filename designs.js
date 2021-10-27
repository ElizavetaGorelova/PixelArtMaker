// Set useful variables
let color = document.getElementById("colorPicker");
let table = document.getElementById("pixelCanvas");
let sizePicker = document.getElementById("sizePicker");

let height = document.getElementById("inputHeight").value;
let width = document.getElementById("inputWeight").value;
makeGrid(height, width);

sizePicker.addEventListener("click", (e) => {
  // Prevent page refresh on submit
  e.preventDefault();
  // Get input data and create grid
  let height = document.getElementById("inputHeight").value;
  let width = document.getElementById("inputWeight").value;
  table.firstElementChild.remove();

  makeGrid(height, width);

});

// Create grid
function makeGrid(height, width) {

  for (let i = 0; i < height; i++) {
    let row = table.insertRow(i);
    for (let j = 0; j < width; j++) {
      let cell = row.insertCell(j);
      // Assign EventListeners
      cell.addEventListener("click", (e) => {       
        cell.style.backgroundColor = color.value;
      })
    }
  }

}