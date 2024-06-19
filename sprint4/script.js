
const initialData = {
    name: "David Olinda Pomine",
    contact: "(031) 988209269",
    email: "Davidolinda13@gmail.com",
    imageSrc: "van.jpg"
};


function loadData(data) {
    document.getElementById('nameHeader').textContent = data.name;
    document.getElementById('contact').textContent = `Contato: ${data.contact}`;
    document.getElementById('email').textContent = `Email: ${data.email}`;
    const imageElement = document.getElementById('vanImage');
    imageElement.src = data.imageSrc;
    imageElement.style.display = data.imageSrc ? 'block' : 'none';
}


window.onload = function () {
    loadData(initialData);
};


document.getElementById('deleteButton').addEventListener('click', function () {

    const emptyData = {
        name: "Nome do motorista",
        contact: "Contato:",
        email: "Email:",
        imageSrc: ""
    };
    loadData(emptyData);
});
function goBack() {
    window.history.back();
}