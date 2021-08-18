
// Interage com o DOM, movimentando as barras de HP
const hp = document.getElementById ('meuHP');
const hp2 = document.getElementById ('bossHP');
var minhaVida = 100;
var minhaVidaMax = 100;
var bossVida = 200;
var bossVidaMax = 200;

hp.max = minhaVidaMax;
hp.value = minhaVida;

hp2.max = bossVidaMax;
hp2.value = bossVida;


moves = ['0', '1', '2'];

alert('Ao abrir a caixa um monstro adentrou a sala, seria ele o Guardião do Segredo?')

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
            minhaVida = minhaVida - 40;
            alert(`O inimigo te atacou e te causou dano, você agora possui ${minhaVida} de vida`);
        }
        else if (movimento == 1) {
            minhaVida = minhaVida - 50;
            alert(`O inimigo te rasgou e te causou dano, você agora possui ${minhaVida} de vida`);
        }
        else {
            bossVida = bossVida + 35;
            minhaVida = minhaVida -35;
            alert(`O inimigo se banhou em seu sangue e roubou sua vida em 20, e agora possui ${bossVida} de vida`);
        }
        
        alert('Agora é sua vez, espião!')
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
        alert ('Parabéns espião, foi dificil mas você conseguiu superar esse desafio');
        return location = ('vitoria.html')
    }
    else if (minhaVida<1){
        alert ('Infelizmente esse desafio foi grande demais pra você, sua coragem não foi o suficiente pra te manter vivo');
        return location = ('../../gameover/gameover.html')
    }

}