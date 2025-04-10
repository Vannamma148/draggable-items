const list = document.getElementsByClassName('list');
let leftDrag = document.getElementById('left');
let rightDrag = document.getElementById('right');

let store = null;

for (let lists of list) {
    lists.addEventListener('dragstart', (e) => {
        store = e.target;

        console.log(e);
    })
}

right.addEventListener('dragover', (e) => {

    e.preventDefault();
});

right.addEventListener('drop', (e) => {
    if (store) {
        right.appendChild(store);
        store = null;
    }
});
left.addEventListener('dragover', (e) => {

    e.preventDefault();
});

left.addEventListener('drop', (e) => {
    if (store) {
        left.appendChild(store);
        store = null;
    }
});