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
//  key.addEventListener("click", e => input(e.target));
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

