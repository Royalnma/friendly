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
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add('removeButton');


        ToDos.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);



        editButton.addEventListener('click', () => this.edit(input));

        removeButton.addEventListener('click', () => this.remove(itemBox));
    }


    edit(input) {
        input.disabled = !input.disabled;
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
 