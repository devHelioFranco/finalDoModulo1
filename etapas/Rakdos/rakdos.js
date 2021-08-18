var resposta = ''
function inicio() {
    alert('Em qual alternativa há três oitos, três zero?')
    resposta = prompt(`1 - 88830
    2 - 3830
    3 - 888000
    4 - 383000`)

    if (resposta == 2 || resposta == 3 || resposta == 4) {
        return location = ('./rakdosgameover.html')
    }
        else if (resposta == 1) {
            alert('Você é esperto....')
            return escolha1()
           
        }
            else{
                alert('Digite uma opção válida')
                return inicio()
            }
    
     
    }
function escolha1() {
    alert ('Vamos pra Próxima?')
    alert('A avó dividiu 20 balas entre as duas netas. Que horas são?')
    resposta = prompt(`1 - 10:02
    2 - 13:50
    3 - 20:02
    4 - 8:02
    5 - 12:50`)

    if (resposta == 1 || resposta == 3 || resposta == 4 || resposta == 5) {
        return location = ('./rakdosgameover.html')
    }
        else if (resposta == 2) {
            alert('Estou gostando de você...')
            return escolha2()
        }
            else {
                alert('Escolha uma opção válida!')
                return escolha1()
            }
}
function escolha2() {
    resposta = prompt('Quando eu tinha 8 anos, a minha irmã tinha a metade da minha idade. Agora que tenho 55 anos, com quantos anos minha irmã está?')
    if(+resposta == 51){   
        alert('Você é bem inteligente...')
        return escolha3()
    } else {
        return location = ('./rakdosgameover.html')
    }
}
function escolha3() {
    alert('Você entra em um castelo escuro com uma caixa de fósforos que contém apenas um palito. Não há eletricidade, porém há uma vela, um lampião a gás e uma lamparina a querosene. O que você acende primeiro?')
    resposta = prompt('1 - vela  2 - lampião  3 - lamparina')
    if (resposta == 'fosforo') {
        alert('Você realmente é digno, se provou merecedor')
        return location = ('./rakdosvitoria.html')
    }
        else if (resposta == 1 || resposta == 2 || resposta == 3) {
            return location = ('./rakdosgameover.html')
        }
            else {
                alert('Digite uma opção válida')
                return escolha3()
            }
}