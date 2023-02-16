const bnt = document.querySelector('.bnt')

const circle = document.querySelector('.circle')
const numberOne = document.querySelector('.one')
const numberTwo = document.querySelector('.two')
const numberThree = document.querySelector('.three')
// PEGANDO PROPRIEDADES QUE SERÃO ALTERADOS DE ACORDO COM TEMA
const body = document.querySelector('body')




function themeBlue() {
    const circle = document.querySelector('.circle')
    circle.classList.add('move-one')
    circle.classList.remove('move-three')
    circle.classList.remove('move-two')

    const body = document.querySelector('body')
    const input = document.querySelector('.input');
    const h2 = document.querySelector('h2')
    const check_Themes = document.querySelector('.check-themes')
    const section_Two = document.querySelector('.numbers')
    const h3 = document.querySelector('h3')

    circle.style.background = '#D03F2F'
    body.style.background = '#3A4663'
    h2.style.color = '#fff'
    check_Themes.style.background = '#242D44'
    section_Two.style.color = '#fff'
    h3.style.color = '#fff'
    // input
    input.style.background = '#181F33'
    input.style.color = '#fff'

    const container_calculator = document.querySelector('.section-calculator')
    container_calculator.style.background = '#242D44'
    

    // Tive que usar um laço foi pq a propriedade querySelectAll retorna um array com varis botões e se pegasse simplesmente o botão e mudasse a cor só iria muda o botão do indice 0 
    // Então fiz um laço for para percorrer todos os botões:

    const button = document.querySelectorAll('.bnt')
     
    for (let i = 0; i < button.length; i++) {
        button[i].style.color = '#434A59'
        button[i].style.background = '#EAE3DC'
        button[i].style.boxShadow = 'inset 0px -4px 0px #A79E91'    
    }

    const reset = document.querySelector('.reset')

    reset.style.background = '#647198'
    reset.style.boxShadow = 'inset 0px -4px 0px #414e73'
    

    const result = document.querySelector('.result')

    result.style.background = '#D03F2F'
    result.style.color = '#fff'
    result.style.boxShadow = 'inset 0px -4px 0px #93261A'
}


function themeWhite() {
    const circle = document.querySelector('.circle')
    circle.classList.add('move-two')
    circle.classList.remove('move-three')

    const body = document.querySelector('body')
    const input = document.querySelector('.input');
    const h2 = document.querySelector('h2')
    const check_Themes = document.querySelector('.check-themes')
    const section_Two = document.querySelector('.numbers')
    const h3 = document.querySelector('h3')

    circle.style.background = '#D03F2F'
    body.style.background = '#E6E6E6'
    h2.style.color = '#36362C'
    check_Themes.style.background = '#D2CDCD'
    section_Two.style.color = '#000'
    h3.style.color = '#000'
    // input
    input.style.background = '#EEEEEE'
    input.style.color = '#36362C'

    const container_calculator = document.querySelector('.section-calculator')
    container_calculator.style.background = '#D2CDCD'
    

    // Tive que usar um laço foi pq a propriedade querySelectAll retorna um array com varis botões e se pegasse simplesmente o botão e mudasse a cor só iria muda o botão do indice 0 
    // Então fiz um laço for para percorrer todos os botões:

    const button = document.querySelectorAll('.bnt')
     
    for (let i = 0; i < button.length; i++) {
        button[i].style.color = '#36362C'
        button[i].style.background = '#EAE3DC'
        button[i].style.boxShadow = 'inset 0px -4px 0px #A79E91'    
    }

    const reset = document.querySelector('.reset')

    reset.style.background = '#378187'
    reset.style.boxShadow = 'inset 0px -4px 0px #1B6066'

    const result = document.querySelector('.result')

    result.style.background = '#D03F2F'
    result.style.color = '#fff'
    result.style.boxShadow = 'inset 0px -4px 0px #873901'
}

function blueDark(){
    const circle = document.querySelector('.circle')
    
    circle.classList.remove('move-three')
    circle.classList.remove('move-two')
    
}


function themeDark() {
    const circle = document.querySelector('.circle')
    circle.classList.add('move-three')
    circle.classList.remove('move-two')
    

    const body = document.querySelector('body')
    const input = document.querySelector('.input');
    const h2 = document.querySelector('h2')
    const check_Themes = document.querySelector('.check-themes')
    const section_Two = document.querySelector('.numbers')
    const h3 = document.querySelector('h3')

    circle.style.background = '#00DED0'
    body.style.background = '#17062A'
    h2.style.color = '#FFE53D'
    check_Themes.style.background = '#1E0936'
    section_Two.style.color = '#FFE53D'
    h3.style.color = '#FFE53D'
    // input
    input.style.background = '#1E0936'
    input.style.color = '#FFE53D'

    const container_calculator = document.querySelector('.section-calculator')
    container_calculator.style.background = '#1E0936'

    // Tive que usar um laço foi pq a propriedade querySelectAll retorna um array com varis botões e se pegasse simplesmente o botão e mudasse a cor só iria muda o botão do indice 0 
    // Então fiz um laço for para percorrer todos os botões:

    const button = document.querySelectorAll('.bnt')
    for (let i = 0; i < button.length; i++) {
        button[i].style.color = '#FFE53D'
        button[i].style.background = '#331C4D'
        button[i].style.boxShadow = 'inset 0px -4px 0px #881C9E'
    }

    const reset = document.querySelector('.reset')

    reset.style.background = '#56077C'
    reset.style.boxShadow = 'inset 0px -4px 0px #BE15F4'

    const result = document.querySelector('.result')
    result.style.boxShadow = 'none'
    result.style.background = '#00DED0'
    result.style.color = '#000'

}













































function valueOnScreen(num) {
    const input = document.querySelector('.input').value

    document.querySelector('.input').value = input + num

}


function calculate() {
    const input = document.querySelector('.input').value

    document.querySelector('.input').value = eval(input)
}

function reset() {

    document.querySelector('.input').value = ' '

}


function del() {
    const del = document.querySelector('.input').value;
    del = del.slice(0, -1)
}

