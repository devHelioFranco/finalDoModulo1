function escolha() {
    alert('Você está prestes a arriscar sua vida pelo bem de outros, decida o que fará')

    var escolha = prompt('1 - Se arriscar e lutar    2 - Fugir e sobreviver ');

    if(escolha == 1){
       return location = ('lutou/luta.html') ;
    }
        else if(escolha == 2){
            return location = ('recusou/fugiu.html');
        }
        else {
            return alert('Escolha uma opção válida!');
        }
}