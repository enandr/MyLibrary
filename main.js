//prototype
//!------------string prototypes------------
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
/**
 * Generates a random number between and including a min and max value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomBetween(min,max){
  return Math.floor(Math.random()*(max-min)+min);
}
/**
 * Clears Local Session Storage
 * @param none
 * @returns none
 */
function sessionClear(){
  let storage = window.sessionStorage;
  storage.clear();
}
/**
 * Gets data from session storage at the key parameter
 * @param {string} key
 * @returns data that was stored
 */
function sessionGet(key){
  let data;
  let storage = window.sessionStorage;
  if (typeof (storage) !== 'undefined') {
    data = storage.getItem(key);
    data = JSON.parse(data);
    return data;
  }
}
/**
 * Deletes data from session storage at the key parameter
 * @param {string} key
 * @returns none
 */
function sessionDelete(key) {
  let storage = window.sessionStorage;
  if (typeof (storage) !== 'undefined') {
    storage.removeItem(key);
  }
}
/**
 * Stores data from value into the key in session storage
 * @param {string} key
 * @param {any} value
 * @returns none
 */
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
/**
 * Clears Local local Storage
 * @param none
 * @returns none
 */
function localClear() {
  let storage = window.localStorage;
  storage.clear();
}
/**
 * Gets data from local storage at the key parameter
 * @param {string} key
 * @returns data that was stored
 */
function localGet(key) {
  let data;
  let storage = window.localStorage;
  if (typeof (storage) !== 'undefined') {
    data = storage.getItem(key);
    data = JSON.parse(data);
    return data;
  }
}
/**
 * Deletes data from local storage at the key parameter
 * @param {string} key
 * @returns none
 */
function localDelete(key) {
  let storage = window.localStorage;
  if (typeof (storage) !== 'undefined') {
    storage.removeItem(key);
    console.log(`Deleted ${key} from local storage`);
  }
}
/**
 * Stores data from value into the key in local storage
 * @param {string} key
 * @param {any} value
 * @returns none
 */
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
/**
 * Clears all data from local and session storage
  @params none
  @returns none
 */
function storageClear(){
  let localStorage = window.localStorage,
    sessionStorage = window.sessionStorage;
  localStorage.clear();
  sessionStorage.clear();
  console.log('Local storage and Session storage cleared');
}
