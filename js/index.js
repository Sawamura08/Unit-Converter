let unit = [];
const unitInputEl = document.getElementById("unitInput-el");
const conversionBtn = document.getElementById("conversionBtn");
const dataEl = document.getElementById("data");
const data2El = document.getElementById("data2");
const data3El = document.getElementById("data3");

const render = () => {
	let formula;
	let formula2;
	let result = " ";
	formula = unit[0] * 3.281;
	formula = formula.toFixed(3);
	formula2 = unit[0] / 3.281;
	formula2 = formula2.toFixed(3);
	result = `
            <p id = "data2"> ${unit[0]} meters = ${formula} feet || ${unit[0]} feet = ${formula2} meters </p>
    `;
	dataEl.innerHTML = result;

	formula = unit[0] * 0.264;
	formula = formula.toFixed(3);
	formula2 = unit[0] / 0.264;
	formula2 = formula2.toFixed(3);
	result = `
            <p id = "data2"> ${unit[0]} liter = ${formula} gallon || ${unit[0]} litter = ${formula2} gallon </p>
    `;
	data2El.innerHTML = result;

	formula = unit[0] * 2.204;
	formula = formula.toFixed(3);
	formula2 = unit[0] / 2.204;
	formula2 = formula2.toFixed(3);
	result = `
            <p id = "data2"> ${unit[0]} kilogram = ${formula} pound || ${unit[0]} kilogram = ${formula2} pound </p>
    `;
	data3El.innerHTML = result;
	unit = [];
};

conversionBtn.addEventListener("click", function () {
	unit.push(unitInputEl.value);
	unitInputEl.value = "";
	localStorage.setItem("unit", JSON.stringify(unit));
	render();
});
