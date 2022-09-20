const gridBox = document.querySelector(".gridBox");

const divCreator = function (grids) {
  for (i = 1; i <= grids * grids; i++) {
    const gridBox = document.querySelector(".gridBox");
    gridBox.style.display = "grid";
    gridBox.style.gridTemplateColumns = `repeat(${grids}, 1fr)`;
    gridBox.style.gridTemplateRows = `repeat(${grids}, 1fr)`;
    const gridItem = document.createElement("div");
    gridItem.classList.add("gridItem");
    gridBox.append(gridItem);
    document.querySelectorAll(".gridItem").forEach((elem) =>
      elem.addEventListener("mouseover", () => {
        elem.style.backgroundColor = "black";
      })
    );
  }
};

divCreator(1);

const clearBoard = function (item) {
  while (item.firstChild) {
    item.removeChild(item.firstChild);
  }
};

document.querySelector(".slider").addEventListener("mouseup", (e) => {
  clearBoard(gridBox);
  let currentGridValue = e.target.value;
  let rangeValue = document.querySelector(".rangeValue");
  rangeValue.innerHTML = `${currentGridValue} x ${currentGridValue}`;
  divCreator(currentGridValue);
});

document.querySelector(".rainbow").addEventListener("click", () => {
  document.querySelectorAll(".gridItem").forEach((elem) =>
    elem.addEventListener("mouseover", () => {
      elem.style.backgroundColor = colorGenerator();
    })
  );
});

document.querySelector(".black").addEventListener("click", () => {
  document.querySelectorAll(".gridItem").forEach((elem) =>
    elem.addEventListener("mouseover", () => {
      elem.style.backgroundColor = "black";
    })
  );
});

document.querySelector(".clear").addEventListener("click", () => {
  document.querySelectorAll(".gridItem").forEach((elem) => {
    elem.style.backgroundColor = "white";
  });
});

const colorGenerator = function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
