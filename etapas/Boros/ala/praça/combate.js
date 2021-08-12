const hp = document.getElementById ('meuHP');
var minhaVida = 100;
var minhaVidaMax = 100;



hp.max = minhaVidaMax;
hp.value = minhaVida;

var bossVida = 200;

moves = ['0', '1', '2'];

alert('Você vai encontrar uma batalha feroz a frente')
function randomMoves() {

    random_index = Math.floor(Math.random() * moves.length);

    movimento = moves [random_index]
    
}



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

    

function batalha(){
    if (bossVida<1){
        alert ('Parabéns Soldado Boros, foi dificil mas você conseguiu superar esse desafio');
    }
    else if (minhaVida<1){
        alert ('Infelizmente esse desafio foi grande demais pra você, sua coragem não foi o suficiente pra te manter vivo');
    }
}


function startBattle(){
    while (bossVida>=1 && minhaVida>=1) {
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
            alert(`O inimigo se curou em 15, e agora possui ${bossVida} de vida`);
        }
    
        alert('Agora é sua vez, bravo soldado Boros!')
        meuAtaque();
        hp.max = minhaVidaMax;
        hp.value = minhaVida;
    }
}


