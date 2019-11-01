//prototype
//!------------string prototypes------------
String.prototype.remove = function(string){
  let array = this.split(string);
  let newStr ='';
  newStr = array.join()
  newStr = newStr.replace(',', '')
  while(newStr.indexOf(',')>-1){
    newStr = newStr.replace(',', '')
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
    randNum = Math.floor(Math.random()*this.length)
    if (!chosenArray.includes(randNum)){
      chosenArray.push(randNum);
      newArray.push(this[randNum]);
    }
  }
  return newArray;
}
//!--------Functions---------
function random(min,max){
  return Math.floor(Math.random()*(max-min)+min);
}
