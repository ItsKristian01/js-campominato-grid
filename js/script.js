// Variable Declaration

for (let i = 1; i <= 100; i++) {
  console.log(i);
  const divCol = document.createElement("div");
  divCol.classList.add("col");
  divCol.innerHTML = i;
  console.log(divCol);
}
