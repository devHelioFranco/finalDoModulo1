let nome;
var caminho;
// Salva o nome do personagem e reproduz pelo LocalStorage
const load = () => {
    const name = localStorage.getItem('borosName');
    nome = name
    document.querySelector('.hnome').innerHTML = nome;
    document.querySelector('.hnome2').innerHTML = nome;
}
window.onload = () => {
    load();
}
// Interage com o DOM, movimentando as barras de HP
const hp = document.getElementById ('meuHP');
const hp2 = document.getElementById ('bossHP');
var minhaVida = 100;
var minhaVidaMax = 100;
var bossVida = 10;
var bossVidaMax = 200;

hp.max = minhaVidaMax;
hp.value = minhaVida;

hp2.max = bossVidaMax;
hp2.value = bossVida;


moves = ['0', '1', '2'];

alert('Você vai encontrar uma batalha feroz a frente')

// Randomiza as movimentações do inimigo com base em movimentos do Array
function randomMoves() {

    random_index = Math.floor(Math.random() * moves.length);

    movimento = moves [random_index]
    
}


// Computa movimentos do usuário com base em posições do Array
function meuAtaque()  {
    movimento = prompt('Qual seu próximo movimento? 0 - Ataque  1 - Fireball  2 - Cura')
    if (movimento == 0) {
        bossVida = bossVida - 10;
        alert(`Você golpeou o inimigo ferozmente causando dano, a vida total dele é de ${bossVida}`);
    }
    else if (movimento == 1) {
        bossVida = bossVida - 20;
        alert(`Você usou seus poderes mágicos e disparou uma FireBall, o inimigo agora possui ${bossVida} de vida`);
    }
    else if (movimento == 2) {
        minhaVida = minhaVida + 30;
        alert(`Carregando a esperança de salvar a guilda, você se curou, e agora possui ${minhaVida} de vida`);
    }
    else {
        alert(`digite uma opção válida!`);
    }
}
// Inicia a batalha e computa os movimentos randomicos do inimigo
function startBattle(){
    if (bossVida>=1 && minhaVida>=1) {
        randomMoves()
        if (movimento == 0) {
            minhaVida = minhaVida - 10;
            alert(`O inimigo te atacou e te causou dano, você agora possui ${minhaVida} de vida`);
        }
        else if (movimento == 1) {
            minhaVida = minhaVida - 20;
            alert(`O inimigo usou Fireball e te causou dano, você agora possui ${minhaVida} de vida`);
        }
        else {
            bossVida = bossVida + 15;
            minhaVida = minhaVida -15;
            alert(`O inimigo usou devourar sonhos e roubou sua vida em 20, e agora possui ${bossVida} de vida`);
        }
        
        alert('Agora é sua vez, bravo soldado Boros!')
        meuAtaque();
        hp.max = minhaVidaMax;
        hp.value = minhaVida;
        hp2.max = bossVidaMax;
        hp2.value = bossVida;
    }
}
// Informa o vencedor
function batalha(){
    if (bossVida<1){
        alert ('Parabéns Soldado Boros, foi dificil mas você conseguiu superar esse desafio');
        return location = ('final/final.html')
    }
    else if (minhaVida<1){
        alert ('Infelizmente esse desafio foi grande demais pra você, sua coragem não foi o suficiente pra te manter vivo');
        return location = ('final/derrota.html')
    }

}