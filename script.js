const cont = document.createElement("div");
cont.classList.add("cont");
const disp = document.createElement("div");
disp.classList.add("disp");
disp.innerHTML = '0';
const keys = document.createElement("div");
keys.classList.add("keys");

document.body.append(cont);
cont.append(disp);
cont.append(keys);

function makeKey(str) {
  let key = document.createElement("div");
  key.classList.add("key");
  if(/^\d+$/.test(str)) key.classList.add("num");
  key.id= `${str}`;
  key.innerHTML = str;
  key.style.flex = '1 0 24%';
  keys.append(key);
  key.addEventListener("click", e => input(e.target));
};

function makeKeyArray(arr) {
  for (k of arr) {makeKey(k);}
};

let keyArray = [
  'AC', '+/-', '^', '/',
  '7', '8', '9', '*', 
  '4', '5', '6', '-', 
  '1', '2', '3', '+', 
  '0', '.', '='
];

makeKeyArray(keyArray);

document.getElementById("0").style.flex = '1 0 49.1%';


function sum(a, b) {return a+b;};
function dif(a, b) {return a-b;};
function mul(a, b) {return a*b;};
function div(a, b) {return a/b;};
function pow(a, b) {return Math.pow(a, b);};
function operate(op, a, b=0) {
  a = Number(a);
  b = Number(b);
  return  Math.round(op(a, b)*pow(10, 12))/pow(10, 12).toString();
};


let n = 0;
let op = 0;

function input(key) {
  d = disp.innerHTML;

  if(d === '0') {
    if(key.classList.contains("num")) d = key.id;
  } else {
    if(key.classList.contains("num") || key.id === '.') d += key.id;
  }

  switch (key.id) {
    case 'AC': {
      n = 0;
      d = '0';
      break;
    }
    case '+': {
      if(!n) {
        n = d;
        d += ' + ';
        op = sum;
      } else 
      break;
    }
    case '-': {
      if(!n) {
        n = d;
        d += ' - ';
        op = dif;
      }
      break;
    }
    case '*': {
      if(!n) {
        n = d;
        d += ' * ';
        op = mul;
      }
      break;
    }
    case '/': {
      if(!n) {
        n = d;
        d += ' / ';
        op = div;
      }
      break;
    }
    case '^': {
      if(!n) {
        n = d;
        d += ' ^ ';
        op = pow;
      }
      break;
    }
    case '+/-': {
      if(!n) {
        if(d.charAt(0) === '-') d = d.substring(1);
        else if(d === '0') d = '-';
        else  d = '-' + d;
      } 
      break;
    }
    case '=': {
      if(op){
        d = operate(op, n, disp.innerHTML.substring(n.length+2));
        n = 0;
        op = 0;
      }
      break;
    }
  }

  disp.innerHTML = d;
  
}
