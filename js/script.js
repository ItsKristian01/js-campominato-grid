// Numbers generator

for (let i = 1; i <= 100; i++) {
  const divCol = document.createElement("div");   // Element Creation
  divCol.classList.add("col"); // Added class
  divCol.innerHTML = i;
  console.log(divCol);
  const element = document.getElementById("numbers"); 
  element.append(divCol); // Added element to HTML
}

// Button Click
let buttonPlay = document.getElementById("button-play");
buttonPlay.addEventListener("click", function() {
    buttonPlay;
   const element = document.getElementById("numbers");
   element.classList.remove("remove");
})








