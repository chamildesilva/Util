//IIF
(function(window){
    // 'use strict';

    // This function will contain all methods
    function chLibrary(){
    
        //empty object
        var _ch = {};
         
        //Variables only visible to the library.
        var settings = {
            
        };
 
    // Change a private property
    
    //Utils
    _ch.isString = function(value){
        return typeof value === 'string';
    };
    
    
    _ch.isNumber = function(value){
        return typeof value === "number";
    };

    //check if object

    _ch.isObject = function(value) {
       return typeof value ==='object';
    };

    //check if object has properties
    _ch.isEmptyObject = function(value) {
        for (var key in value){
            if(value.hasOwnProperty(key))
                return false;
        };
        return true;
    };
 
    //check if array
    _ch.isArray = function(value){
        return Array.isArray(value);
    }

    /*-------Array functions ----------------------*/

    //merge two arrays
    _ch.unionAll = function (value1, value2){
        if(this.isArray(value1) && this.isArray(value2)){
            return (value1.concat(value2));
        };
    };

    //similar to SQL where
    /*  //Sample
        let arr = [1,2,3,4,5,6];
        $sql.where(arr,'lt',4)) //[1,2,3]
    */
    _ch.where = function (value,operator,filterVal){
        let results = [];
        switch(operator){
            case 'gt':
                results = arr.filter(val => {
                    return val > filterVal; 
                });
                return results;
                break;
            case 'lt':
                results = arr.filter(val => {
                    return val < filterVal; 
                });
                return results;
                break;
            case 'gte':
                results = arr.filter(val => {
                    return val >= filterVal; 
                });
                return results;
                break;
            case 'lte':
                results = arr.filter(val => {
                    return val <= filterVal; 
                });
                return results;
                break;
            case 'eq':
                results = arr.filter(val => {
                    return val === filterVal; 
                });
                return results;
                break;
            case 'eve':
                results = arr.filter(val => {
                    return val % 2 === 0; 
                });
                return results;
                break;
            case 'odd':
                results = arr.filter(val => {
                    return val % 2 === 1; 
                });
                return results;
                break;
            default:
                return results;
        }
    }

    /*------Strings functions ---------------------*/
    //Concatanate with seperator
    //if seperator is not provided default to ' '
    
    _ch.concatWS = function(value1,value2,seperator){
        seperator = (typeof seperator !=='undefined'? seperator : ' ');
        if(this.isString(value1) && this.isString(value2)){
            return value1.concat(seperator,value2);
        };
    };
    
    // concatanate all values in an array
    
    _ch.concatList = function(value){
        if(this.isArray(value)){
            return ''.concat(...value);
        };
    };
    
    //find substring in a string
    //CHARINDEX(searchStr, value, start)
    // searchStr - Required. The substring to search for
    // value - Required. The string to be searched
    // start - optional - The position where the search will start. if the position is not provided start from 1

    _ch.charIndex = function(searchStr, value, start) { 
        if(this.isString(value)) {
            return value.indexOf(searchStr,start)
        }
    };

    //find value in Object Array
    //array - required - Object array
    //key - required - object property key ''
    //value - require - search value

    /* Sample
    const inventory = [
        {name: 'apples', quantity: 2},
        {name: 'bananas', quantity: 0},
        {name: 'cherries', quantity: 5}
    ];

    var value = 2
    var obj = findValueObjArray(inventory, 'quantity', searchString);
    //{ name: 'apples', quantity: 2 }
    */

    _ch.findValueObjArray = function(array, key, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                return array[i];
             }
        }
        return null;
    }
    




    return _ch;
    

}
    //library is globally accesible and save in the window
    if(typeof(window.$sql) === 'undefined'){
        window.$sql = chLibrary   ();
    }
})(window); //IIF

