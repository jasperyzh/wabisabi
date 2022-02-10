export function insert_vue_container(id_name, col = "col", row = "row", container = "container") {
    document.querySelector('main').insertAdjacentHTML('beforeend',
        `<div id="${id_name}"></div>`
    );
}