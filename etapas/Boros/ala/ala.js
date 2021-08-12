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

function escolha(){
    alert('"Por favor meu bravo soldado, me ajude, me ajude por favor" esbraveja a velha senhora ferida. Decida entre socorrer a senhora, ou ignorar.');
    caminho = prompt('1 - Socorrer         2 - Ignorar e continuar ');
    if (caminho == 1) {
        return location = ('praça/lazav-gameover.html');
    }
    else if (caminho == 2) {
        return location = ('praça/continuou/praça_p2.html');
    }
    else {
        return alert('Escolha uma opção válida');
    }
}
