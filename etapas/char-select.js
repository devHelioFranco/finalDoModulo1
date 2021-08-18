var decida
function escolha(){

    alert('Escolha com qual guilda deseja jogar')

    decida = prompt('Digite 1 - Boros  2 - Rakdos  3 - Dimir')
        if (decida == 1) {
            return location = ('./Boros/boros.html')
        }
            else if (decida == 2){
                return location = ('./Rakdos/rakdos.html')
            }
                else if (decida == 3) {
                    return location = ('./Dimir/dimir.html')
                }
                    else {
                        alert('Digite uma opção válida')
                    }
}
