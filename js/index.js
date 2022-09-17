import {
    getInputValues,
    clearInputs,
    addItemToPage,
    renderItemsList
} from "./dom_util.js";

const HIDDEN_CLASSNAME = "hidden";
const SELECTED_CLASSNAME = "selected";

const headerNavItems = document.querySelectorAll(".header__nav-item");
const myCarsContainer = document.getElementById("my__cars");
const createCarContainer = document.getElementById("create__car");
const myCarsButtons = document.querySelectorAll(".my__cars_button");
const createCarButtons = document.querySelectorAll(".create_car_button");
const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("search_button");
const clearButton = document.getElementById("clear_button");
const countButton = document.getElementById("count_button");
const findInput = document.getElementById("find_input");
const beautyInput = document.getElementById("beauty_input");
const sortCheckbox = document.getElementById("sort_checkbox");
const countResult = document.getElementById("count_result");

let cars = [];

[...createCarButtons].forEach(element => {
    element.addEventListener("click", () => {
        myCarsContainer.classList.toggle(HIDDEN_CLASSNAME);
        createCarContainer.classList.toggle(HIDDEN_CLASSNAME);
        [...headerNavItems].forEach(item => item.classList.toggle(SELECTED_CLASSNAME));
    });
});

[...myCarsButtons].forEach(element => {
    element.addEventListener("click", () => {
        myCarsContainer.classList.toggle(HIDDEN_CLASSNAME);
        createCarContainer.classList.toggle(HIDDEN_CLASSNAME);
        [...headerNavItems].forEach(item => item.classList.toggle(SELECTED_CLASSNAME));
    });
});

const addItem = ({ title, description, beauty }) => {
    const generatedId = Math.floor(Math.random() * Date.now());

    const newItem = {
        id: generatedId,
        title,
        description,
        beauty
    };

    cars.push(newItem);

    addItemToPage(newItem);
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const { title, description, beauty } = getInputValues();

    if (title === "") {
        alert("Title can't be empty!");
        return;
    }

    clearInputs();

    addItem({
        title,
        description,
        beauty
    });
});

findButton.addEventListener("click", () => {
    const foundCars = cars.filter(car => car.title.search(findInput.value) !== -1);

    renderItemsList(foundCars);
});

clearButton.addEventListener("click", () => {
    renderItemsList(cars);

    findInput.value = "";
});

sortCheckbox.addEventListener("change", (event) => {
    if (event.target.checked) {
        const sortedCars = cars.map((x) => x);
        sortedCars.sort((a, b) => a.beauty - b.beauty);
        renderItemsList(sortedCars);
    } else {
        renderItemsList(cars);
    }
});

countButton.addEventListener("click", () => {
    countResult.innerHTML = `${cars.length} cars`;
});

beautyInput.addEventListener("input", () => {
    document.getElementById("beauty_percentage").innerHTML = `${beautyInput.value}%`;
});

renderItemsList();