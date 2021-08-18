function escolha() {
    var caminho = prompt('1 - Esquerda  2 - Centro  3 - direita')
    if (caminho == 1) {
        return location = ('../dimir2/dimir2.html')
    }
    else if (caminho == 2) {
        return location = ('dimir3.html')
    }
    else if (caminho == 3) {
        return location = ('../dimir4/dimir4.html')
    }
    else {
        alert('Escolha uma opção válida')
        return escolha ()
    }
}