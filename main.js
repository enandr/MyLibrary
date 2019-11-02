
String.prototype.remove = function(replaceString,removeString){
  let newStr=this;
  for(let index = 1;index<arguments.length;index++){
    while (newStr.indexOf(arguments[index]) > -1) {
      let toReplace=replaceString;
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

Object.prototype.length = function(){
  return Object.keys(this).length;
}

function randomBetween(min,max){
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
    console.log(`Deleted ${key} from local storage`);
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
    console.log(`Local storage saved in ${key}`);
  }
}

function storageClear(){
  let localStorage = window.localStorage,
    sessionStorage = window.sessionStorage;
  localStorage.clear();
  sessionStorage.clear();
  console.log('Local storage and Session storage cleared');
}
