const newItem = document.querySelector(".add");
const list = document.querySelector(".todos");

const generateTemplate = todo => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span> <i class="fas fa-trash-alt delete"></i>
    </li>`;
    list.innerHTML += html;
};

newItem.addEventListener("submit", e => {
    e.preventDefault();
    const todo = newItem.add.value.trim();
    if(todo.length){
        generateTemplate(todo);
        newItem.reset();
    }
});

list.addEventListener("click", e => {
    if(e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});