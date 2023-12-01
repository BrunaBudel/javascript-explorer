
function soma() {
  const num1 = 2
  const num2 = 3
  const soma = num1 + num2
  return soma
}

function subtracao() {
  const num1 = 2
  const num2 = 3
  const subtracao = num1 - num2
  return subtracao
}

function multiplicacao() {
  const num1 = 2
  const num2 = 3
  const multiplicacao = num1 * num2
  return multiplicacao
}

function divisao() {
  const num1 = 2
  const num2 = 3
  const divisao = num1 / num2
  return divisao
}

function verificaNúmero(){
  const num = 2
  const type = typeof num

  if(type === 'number'){
    return 'é um número'
  } else {
    return 'não é um número'
  }

}

function verificaString(){
  const str = 'string'
  const type = typeof str

  if(type === 'string'){
    return 'é uma string'
  } else {
    return 'não é uma string'
  }
}

function verificaBoolean(){
  const bool = true
  const type = typeof bool

  if(type === 'boolean'){
    return 'é um boolean'
  } else {
    return 'não é um boolean'
  }
}

function verificaPar(){
  const num = 2
  if(num % 2 === 0){
    return 'é par'
  } else {
    return 'não é par'
  }
}

function verificaImpar(){
  const num = 2
  if(num % 2 !== 0){
    return 'é impar'
  } else {
    return 'não é impar'
  }
}


document.addEventListener('DOMContentLoaded', function() {
  window.alert('Hello World :)')
  window.alert(`
    Calculadora
    A soma de 2 + 3 é ${soma()}
    A subtração de 2 - 3 é ${subtracao()}
    A multiplicação de 2 * 3 é ${multiplicacao()}
    A divisão de 2 / 3 é ${divisao()}
  `)
  window.alert(`
    Verifica tipo de dado
    A variável num ${verificaNúmero()}
    A variável str ${verificaString()}
    A variável bool ${verificaBoolean()}
  `)
  window.alert(`
    Verifica par ou impar
    A variável num ${verificaPar()}
    A variável num ${verificaImpar()}
  `)
});

