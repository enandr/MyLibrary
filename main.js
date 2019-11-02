//prototype
//!------------string prototypes------------
String.prototype.remove = function(){
  let newStr=this;
  for(let index = 0;index<arguments.length;index++){
    while (newStr.indexOf(arguments[index]) > -1) {
      let toReplace=' ';
      newStr = newStr.replace(arguments[index], toReplace)
    }
  }
return newStr;
}
String.prototype.reverse = function(){
  let newStr='';
  for (let index = this.length-1;index>=0;index--){
    newStr+=this[index];
  }
  return newStr;
}
///!------------array prototypes------------
Array.prototype.shuffle = function () {
  var newPos = 0;
  var tempVar = 0;
  for (var position = this.length - 1; position >= 0; position--) {
    newPos = Math.floor(Math.random() * (position + 1));
    tempVar = this[position];
    this[position] = this[newPos];
    this[newPos] = tempVar;
  }
  return this;
}
Array.prototype.randomFrom = function(number){
  let chosenArray = [],
      newArray = [],
      randNum = null;
  for (let index = number;index>0;index--){
    randNum = random(0,this.length)
      chosenArray.push(randNum);
      newArray.push(this[randNum]);
      this.splice(randNum,1)
  }
  return newArray;
}

//!---------Objects prototypes-----------
Object.prototype.length = function(){
  return Object.keys(this).length;
}
//!--------Functions---------
function random(min,max){
  return Math.floor(Math.random()*(max-min)+min);
}
function sessionClear(){
  let storage = window.sessionStorage;
  storage.clear();
}
function sessionGet(key){
  let data;
  let storage = window.sessionStorage;
  if (typeof (storage) !== 'undefined') {
    data = storage.getItem(key);
    data = JSON.parse(data);
    return data;
  }
}
function sessionDelete(key) {
  let storage = window.sessionStorage;
  if (typeof (storage) !== 'undefined') {
    storage.removeItem(key);
  }
}
function sessionSave(key,value) {
  let data = [];
  let storage = window.sessionStorage;
  if (typeof (storage) !== 'undefined') {
    data = JSON.stringify(value);
    storage.setItem(key, data);
    data = storage.getItem(key);
    data = JSON.parse(data);
    return data;
  }
}
function localClear() {
  let storage = window.localStorage;
  storage.clear();
}
function localGet(key) {
  let data;
  let storage = window.localStorage;
  if (typeof (storage) !== 'undefined') {
    data = storage.getItem(key);
    data = JSON.parse(data);
    return data;
  }
}
function localDelete(key) {
  let storage = window.localStorage;
  if (typeof (storage) !== 'undefined') {
    storage.removeItem(key);
  }
}
function localSave(key,value) {
  let data = [];
  let storage = window.localStorage;
  if (typeof (storage) !== 'undefined') {
    data = JSON.stringify(value);
    storage.setItem(key, data);
    data = storage.getItem(key);
    data = JSON.parse(data);
    return data;
  }
}
