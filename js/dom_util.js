const itemsContainer = document.getElementById("items_container");
const titleInput = document.getElementById("title_input");
const descriptionInput = document.getElementById("description_input");
const beautyInput = document.getElementById("beauty_input");

const itemTemplate = ({ id, title, description, beauty }) => `
<li class="cars__car-card" id="item-${id}">
    <div class="cars__car-card-image">
        <img src="./images/img.png" alt="./images/img.png">
    </div>
    <div class="cars__car-card-content">
        <div class="cars__car-card-title">${title}</div>
        <div class="cars__car-card-description">${description}</div>
        <div class="cars__car-card-price">
            <div class="cars__car-card-price-text">Beauty: </div>
            <div class="cars__car-card-beauty-level">${beauty}%</div>
        </div>
        <div class="cars__car-card-buttons">
            <button class="cars__car-card-edit btn-blue" id="editcar_button">Edit</button>
            <button class="cars__car-card-remove btn-red" id="removecar_button">Remove</button>
        </div>
    </div>
</li>`;

export const addItemToPage = ({ id, title, description, beauty }) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, title, description, beauty })
    );
};

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
};

export const clearInputs = () => {
    titleInput.value = "";
    descriptionInput.value = "";
    beautyInput.value = "69";
    document.getElementById("beauty_percentage").innerHTML = `${beautyInput.value}%`;
};

export const getInputValues = () => {
    return {
        title: titleInput.value,
        description: descriptionInput.value,
        beauty: beautyInput.value
    };
};