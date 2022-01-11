function add(a,b){
    let sum = a + b
    return sum
}

function substract(a,b){
    let sum = a - b
    return sum
}

function multiply(a,b){
    let sum = a * b
    return sum
}

function divide(a,b){
    let sum = a/b
    return sum
}

function operate(a,b){
    divide(a,b)
}

function addDisplay(button){
    display = display + button
    return displayCalc.textContent = display
}
function getDisplayed(button){
    button.addEventListener('click',function(){
    addDisplay(button.value)
})
}
function plusOperator(){
    if(n1===0){
        display = displayCalc.textContent
        n1 = parseInt(display)
        console.log(n1);
        display = ''
    }else{
        display = displayCalc.textContent
        n2 = parseInt(display)
        console.log('vai somar n1',n1)
        console.log('vai somar n2',n2);
        soma = add(n1,n2) 
        displayCalc.textContent = soma
        n1= soma
    }
}
//Buttões estão sendo selecionados pela DOM e incorporados no JS, também é dado um valor para cada botão
let n1 = 0
let n2 = 0
let display = ''
const oneButton = document.querySelector('#one')
oneButton.value = '1'
const twoButton = document.querySelector('#two')
twoButton.value = '2'
const threeButton = document.querySelector('#three')
threeButton.value = '3'
const fourButton = document.querySelector('#four')
fourButton.value ='4'
const fiveButton = document.querySelector('#five')
fiveButton.value ='5'
const sixButton = document.querySelector('#six')
sixButton.value = '6'
const sevenButton = document.querySelector('#seven')
sevenButton.value = '7'
const eigthButton = document.querySelector('#eigth')
eigthButton.value = '8'
const nineButton = document.querySelector('#nine')
nineButton.value = '9'
const zeroButton = document.querySelector('#zero')
zeroButton.value = '0'
const displayCalc = document.querySelector('#display')
const plusButton = document.querySelector('#plus')
plusButton.value = '+'
//Os butoes estao interativos com essas chamadas de função
getDisplayed(oneButton)
getDisplayed(twoButton)
getDisplayed(threeButton)
getDisplayed(fourButton)
getDisplayed(fiveButton)
getDisplayed(sixButton)
getDisplayed(sevenButton)
getDisplayed(eigthButton)
getDisplayed(nineButton)
getDisplayed(zeroButton)
/* getDisplayed(plusButton) */
plusButton.addEventListener('click',function(){
    plusOperator()
})

