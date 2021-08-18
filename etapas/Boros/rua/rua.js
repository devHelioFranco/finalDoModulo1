let nome;
var caminho;

const load = () => {
    const name = localStorage.getItem('borosName');
    nome = name
    document.querySelector('.hnome').innerHTML = nome;
    document.querySelector('.hnome2').innerHTML = nome;
}
window.onload = () => {
    load();
}

function escolha() {
    return location = ('../../gameover/gameover.html')
}