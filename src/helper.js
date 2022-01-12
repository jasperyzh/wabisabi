export function insert_vue_container(id_name, col = "col", row = "row", container = "container") {
    document.querySelector('main').insertAdjacentHTML('beforeend',
        `
        <div class="${container}"><div class="${row}"><div class="${col}">
        <div id="${id_name}"></div>
    </div></div></div>
    `
    );
}