'use strict'

let valorA = undefined;
let valorB = undefined;

let somaAB = undefined;
let sub1 = undefined;
let sub2 = undefined;
let multAB = undefined;
let div1 = undefined;
let div2 = undefined;
let quadA = undefined;
let quadB = undefined;
let divintA = undefined;
let divintB = undefined;
let fatA = undefined;
let fatB = undefined;

let numberFormat = null;

function filterFloat (value) {
  if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
    .test(value))
    return Number(value);
return NaN;
}

// function formatNumber(number) {
//   console.log(number);
//   let formated = (new Intl.NumberFormat('pt-BR').format(number));
//   console.log(formated);
//   let result = filterFloat(formated);
//   console.log(result);
//   return result;
// }

window.addEventListener('load',()=>{
  console.log('Page Loaded!');
  
  numberFormat = Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 });
  valorA = document.getElementById('numA');
  valorA.addEventListener('change',startCalc);
  valorA.addEventListener('keyup',startCalc);

  valorB = document.getElementById('numB');
  valorB.addEventListener('change',startCalc);
  valorB.addEventListener('keyup',startCalc);

})

function startCalc() {
  console.log('Changing value...');
  somaAB = document.getElementById('sumab');
  sub1 = document.getElementById('sub1');
  sub2 = document.getElementById('sub1');
  multAB = document.getElementById('multab');
  div1 = document.getElementById('div1');
  div2 = document.getElementById('div2');
  quadA = document.getElementById('quada');
  quadB = document.getElementById('quadb');
  divintA = document.getElementById('divinta');
  divintB = document.getElementById('divintb');
  fatA = document.getElementById('fata');
  fatB = document.getElementById('fatb');
  funcSomaAB();
}

function formatNumber(number) {
  console.log(number);
  const resposta = filterFloat(numberFormat.format(number));
  console.log(resposta);
  return resposta;
}

function funcSomaAB() {
  const total = formatNumber(valorA.value) + formatNumber(valorB.value);
  somaAB.value = total;
}