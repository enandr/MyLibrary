//This function library manipulates arrays and objects
//Created by Roger Enand
//version 0.1

//manipulateArray is an object with functions designed to manipulate and create arrays
var manipulateArray = {

    //Gets the array and logs each item to the console
    log: function (array){
        for (var arrayLocation=0;arrayLocation<array.length;arrayLocation++){
            console.log(array[arrayLocation]);
        }
    },
    //Gets the array, reverses it, and returns it
    reverse: function (array){
        var reversedArray=[];
        for (var arrayLocation=array.length-1;arrayLocation>=0;arrayLocation--){
            reversedArray.push(array[arrayLocation]);
        }
        return reversedArray;
    },
    //Gets the array, randomizes it, and returns it
    shuffle: function (array){
        var newPos = 0;
        var tempVar = 0;
        for (var position = array.length -1; position>=0;position--){
            newPos = Math.floor(Math.random() * (position + 1));
            tempVar = array[position];
            array[position] = array[newPos];
            array[newPos] = tempVar;
        }
        return array;
    },
    //Gets the array, searches it to find what it is searching for, and returns the position on the array
    findPositon: function (array, thingToFind){
        for (var position = 0;position<array.length;position++){
            if ( array[position] === thingToFind ){
                return position;
            }
        }
    },
    //Gets the array, searches it to find what it is searching for, removes it from the array, and returns the array
    removeItem: function (array, thingToRemove){
        for (var position = 0;position<array.length;position++){
            if ( array[position] === thingToRemove ){
                array.splice(position,1);
                return array;
            }
            else if (position===array.length-1 && array[position]!==thingToRemove){
                return "That item does not exist"
            }
        }
    },
    //Gets the array, adds to it either at the start or the end, and returns the array
    addItem: {
        start: function (array,thingToAdd){
            array.unshift(thingToAdd);
            return array;
        },
        end: function (array,thingToAdd){
            array.push(thingToAdd);
            return array;
        }
    },
    //gets the array and changes the value of the index number or item in array, and returns the array
    changeItem: {
        //changes the array item at index
        atIndex: function(array,indexToChange,valueToChange){
            if (indexToChange>=array.length){
                return "That index does not exist";
            }
            else {
                array[indexToChange] = valueToChange;
                return array; 
            }
            
        },
        //finds the item in the index and changes it
        atItem: function(array,itemToChange,valueToChange){
            for (var position = 0;position<array.length;position++){
                if ( array[position] === itemToChange ){
                    array[position] = valueToChange;
                    return array;
                }
                else if (position===array.length-1 && array[position]!==itemToChange){
                    return "That item does not exist";
                }
            }
        }
    },
    // creates new arrays with numbers between two chosen numbers or creates an array with a to z
    create: {
        //creates an array with numbers between the given two numbers
        numbers: function(startNum,endNum,iteration){
            var newArray = [];
            for (var position = startNum;position<=endNum;position+=iteration){
                newArray.push(position);
            }
            return newArray;
        },
        //creates an array with letters between the two given letters as long as the end letter is greater than the start letter
        alphabet: function(startLetter,endLetter){
            var start = startLetter.charCodeAt(0);
            var end = endLetter.charCodeAt(0);
            var newArray=[];
            if (start>end){
                return "Error Code ID 10 T. You can't do that. The end letter is before the start letter";
            }
            else {
                for (var currentLetter = start, eletter = end;currentLetter<=eletter;currentLetter++){
                    newArray.push(String.fromCharCode(currentLetter));
                }
            }
            return newArray;
        }
    },
    findAllArrays: function(){
        var allArray = Object.keys(window);
        var arrayList = [];
         console.log(allArray[nums]);
        // console.log(typeof allArray.nums);
        for (var keys in allArray){
            var currentItem = allArray[keys];
            console.log(Array.isArray(allArray[keys]));

        }
    }
}

class ManipArray{
    constructor (_array, _arg1, _arg2 ){
        this.array = _array;
        this.arg1 = _arg1;
        this.arg2 = _arg2;
    }
        get(){
            return this.array;
        }
        log(){
            for (var arrayLocation=0;arrayLocation<this.array.length;arrayLocation++){
                console.log(this.array[arrayLocation]);
            }
        }
        reverse(){
            var reversedArray=[];
            for (var arrayLocation=this.array.length-1;arrayLocation>=0;arrayLocation--){
                reversedArray.push(this.array[arrayLocation]);
            }
                return reversedArray;
        }
}

// var rogerArray = new ManipulateArray(); 
//This manipulates objects
 var manipulateObject = {
    //gets the each key and value of the object and console logs the key and value in one line
    log: function (obj){
        for (var key in obj){
            console.log("key: "+key+" value: "+obj[key]);
        }
    },
    // gets the object and adds a key and value to it, and returns the object
    addItem: function(obj,keyToAdd,valueToAdd){
        obj[keyToAdd] = valueToAdd;
        return obj;
    },
    //get the object and removes the given key and value, and returns the object
    removeItem: function(obj,keyToRemove){
        delete obj[keyToRemove];
        return obj;
    },
    changeItem: function(obj,keyToChange,valueToChange){
        obj[keyToChange] = valueToChange;
        return obj;
    },
    create: {
        userProfile: function(){
            var newObj={
                firstName: '',
                lastName:'',
                age:'',
                occupation:'',
                phoneNumber:'',
                emailAddress:'',
                homeAddress:'',
                sex:''
            }
            return newObj;
        }
    }
}