let nome;


const salva = () => {
    localStorage.setItem('borosName', prompt('Como você se chama guerreiro?'));
}

salva();

const load = () => {
    const name = localStorage.getItem('borosName');
    nome = name
    document.querySelector('.hnome').innerHTML = nome;
}
window.onload = () => {
    load();
}

function escolha () {
    alert('Existem dois caminhos para batalha, correndo pela ala ao norte: caminho mais longo e vazio. Ou pela rua comercial, caminho mais curto e possivelmente populoso');
    var rua = prompt('1: Ala ao norte -  2: Rua comercial');
    if (rua == 1) {
        return location = ("ala/ala.html");
    } 
    else if (rua == 2) {
        return location = ("rua/rua.html");
    }
    else {
        return alert('Escolha uma opção válida!')
    }
}

