let nome;
var fim;

const load = () => {
    const name = localStorage.getItem('borosName');
    nome = name
    document.querySelector('.hnome').innerHTML = nome;
    document.querySelector('.hnome2').innerHTML = nome;
}
window.onload = () => {
    load();
}

function over() {
    alert('Você encontrou um destino cruel, nem tudo é o que parece.');
    return location = ('../../../gameover/gameover.html');
}