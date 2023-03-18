/* to add the input*/
let form = document.getElementById("new-task-form");
let addButton = document.getElementById("add-button");
let ToDos = document.getElementById("incomplete-tasks");
let inputField = document.getElementById("new-task-input");

class item {
    constructor(itemName) {
        this.createDiv(itemName);
    }
    createDiv(itemName) {
        let inputs = document.createElement('input');
        inputs.value = itemName;
        inputs.disabled = true;
        inputs.classList.add('item_input');
        inputs.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add('removeButton');


        ToDos.appendChild(itemBox);

        itemBox.appendChild(inputs);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);



        editButton.addEventListener('click', () => this.edit(inputs));

        removeButton.addEventListener('click', () => this.remove(itemBox));
    }


    edit(inputs) {
        inputs.disabled = !inputs.disabled;
    }

    remove(item) {
        ToDos.removeChild(item);
    }
}

function check() {
    if (inputField.value != "") {
        new item(inputField.value);
        inputField.value = "";
    }
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        check();
    }
})
 