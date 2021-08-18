function escolha() {
    alert('Você quer roubar sem olhar? ou sucumbir a curiosidade e olhar a caixa?')
    var escolha = prompt ('1 - Sair sem olhar  2 - Abrir a caixa')
    if (escolha == 1) {
        return location = ('vitoria.html')
    }
    else if (escolha == 2) {
        return location = ('caixa.html')
    }
    else {
        alert('Escolha uma opção valida')
        return escolha()
    }
}