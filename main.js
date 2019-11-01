//prototype
//!------------string prototypes------------
String.prototype.remove = function(){
  let newStr=this;
  for(let index = 0;index<arguments.length;index++){
    while (newStr.indexOf(arguments[index]) > -1) {
      newStr = newStr.replace(arguments[index], '')
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
//!--------Functions---------
function random(min,max){
  return Math.floor(Math.random()*(max-min)+min);
}
