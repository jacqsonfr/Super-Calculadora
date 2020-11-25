'use strict';

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

function filterFloat(value) {
  if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value))
    return Number(value);
  return NaN;
}

window.addEventListener('load', () => {
  console.log('Page Loaded!');

  somaAB = document.getElementById('sumab');
  sub1 = document.getElementById('sub1');
  sub2 = document.getElementById('sub2');
  multAB = document.getElementById('multab');
  div1 = document.getElementById('div1');
  div2 = document.getElementById('div2');
  quadA = document.getElementById('quada');
  quadB = document.getElementById('quadb');
  divintA = document.getElementById('divinta');
  divintB = document.getElementById('divintb');
  fatA = document.getElementById('fata');
  fatB = document.getElementById('fatb');

  numberFormat = Intl.NumberFormat('pt-BR');

  valorA = document.getElementById('numA');
  valorA.addEventListener('keyup', startCalc);
  valorA.addEventListener('change', startCalc);

  valorB = document.getElementById('numB');
  valorB.addEventListener('keyup', startCalc);
  valorB.addEventListener('change', startCalc);
});

function startCalc() {
  funcSomaAB();
  funcSubAB();
  funcSubBA();
  funcMultAB();
  funcDivAB();
  funcDivBA();
  funcQuadA();
  funcQuadB();
  funcDivIntA();
  funcDivIntB();

  let resultFatA = funcFatorial(filterFloat(valorA.value));
  if (resultFatA != 'Número muito grande.') {
    fatA.value = formatNumber(resultFatA);
  } else {
    fatA.value = resultFatA;
  }

  let resultFatB = funcFatorial(filterFloat(valorB.value));
  if (resultFatB != 'Número muito grande.') {
    fatB.value = formatNumber(resultFatB);
  } else {
    fatB.value = resultFatB;
  }
}

function formatNumber(number) {
  let checkType = filterFloat(number).toFixed(2);
  const resposta = new Intl.NumberFormat('pt-BR').format(checkType);

  return resposta;
}

function funcSomaAB() {
  const total = filterFloat(valorA.value) + filterFloat(valorB.value);
  if (!isNaN(total)) {
    somaAB.value = formatNumber(total);
  } else {
    somaAB.value = '---';
  }
}

function funcSubAB() {
  const total = filterFloat(valorA.value) - filterFloat(valorB.value);
  if (!isNaN(total)) {
    sub1.value = formatNumber(total);
  } else {
    sub1.value = '---';
  }
}

function funcSubBA() {
  const total = filterFloat(valorB.value) - filterFloat(valorA.value);
  if (!isNaN(total)) {
    sub2.value = formatNumber(total);
  } else {
    sub2.value = '---';
  }
}

function funcMultAB() {
  const total = filterFloat(valorA.value) * filterFloat(valorB.value);
  if (!isNaN(total)) {
    multAB.value = formatNumber(total);
  } else {
    multAB.value = '---';
  }
}

function funcDivAB() {
  if (valorB.value === '0') {
    div1.value = 'Divisão por 0';
  } else {
    const total = filterFloat(valorA.value) / filterFloat(valorB.value);
    if (!isNaN(total)) {
      div1.value = formatNumber(total);
    } else {
      div1.value = '---';
    }
  }
}

function funcDivBA() {
  if (valorA.value === '0') {
    div2.value = 'Divisão por 0';
  } else {
    const total = filterFloat(valorB.value) / filterFloat(valorA.value);
    if (!isNaN(total)) {
      div2.value = formatNumber(total);
    } else {
      div2.value = '---';
    }
  }
}

function funcQuadA() {
  const total = filterFloat(valorA.value) ** 2;
  if (!isNaN(total)) {
    quadA.value = formatNumber(total);
  } else {
    quadA.value = '---';
  }
}

function funcQuadB() {
  const total = filterFloat(valorB.value) ** 2;
  if (!isNaN(total)) {
    quadB.value = formatNumber(total);
  } else {
    quadB.value = '---';
  }
}

function funcQuadB() {
  const total = filterFloat(valorB.value) ** 2;
  if (!isNaN(total)) {
    quadB.value = formatNumber(total);
  } else {
    quadB.value = '---';
  }
}

function funcDivIntA() {
  let total = [];
  const numberX = filterFloat(valorA.value);
  for (let i = numberX; i > 0; i--) {
    if (numberX % i === 0) {
      total.push(i);
    }
  }
  let resposta = total.join(', ');
  if (total.length > 0) {
    divintA.value = resposta + ' (' + total.length + ')';
  } else {
    divintA.value = '---';
  }
}

function funcDivIntB() {
  let total = [];
  const numberX = filterFloat(valorB.value);
  for (let i = numberX; i > 0; i--) {
    if (numberX % i === 0) {
      total.push(i);
    }
  }
  let resposta = total.join(', ');
  if (total.length > 0) {
    divintB.value = resposta + ' (' + total.length + ')';
  } else {
    divintB.value = '---';
  }
}

function funcFatorial(number) {
  if (number < 1 || isNaN(number)) {
    return '---';
  } else if (number > 21) {
    return 'Número muito grande.';
  } else if (number === 1) {
    return 1;
  } else {
    return number * funcFatorial(number - 1);
  }
}
