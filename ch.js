//IIFE
(function(window, document, undefined){
    // 'use strict';

    // This function will contain all methods
    function chLibrary(){
    
        //empty object
        var _ch = {};
         
        //Variables only visible to the library.
        var settings = {
            
        };
     
    //Utils

    // check if string

    _ch.isString = function(value){
        return typeof value === 'string';
    };
    
    // check if number
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

    /*-------Arrays----------------------*/

    /*$sql.unionAll - merge two arrays
    Sample:
    $sql.unionAll([1,2,3],[3,4,5])
    //[1, 2, 3, 3, 4, 5]
    */
    _ch.unionAll = function (value1, value2){
        if(this.isArray(value1) && this.isArray(value2)){
            return (value1.concat(value2));
        };
    };
    
    /* $sql.union - get unique values after merging two arrays
    
    Sample:
    var value1 = [1, 2, 3 , 4, 5];
    var value2 = [1, 2, 3, 6, 7, 8];
    $sql.union(value1,value2)
    // [1, 2, 3, 4, 5, 6, 7, 8]
    */

    _ch.union = function (value1, value2){
        let result = _ch.unionAll(value1, value2);
        return uniquResult = result.filter(function(item, pos){
           return result.indexOf(item) == pos
        });      
    };

    // $sql.common - get common values after merging two arrays
    /*
    Sample:
    var value1 = [1, 2, 3 , 4, 5];
    var value2 = [1, 2, 3, 6, 7, 8];
    $sql.common(value1,value2)
    // [1, 2, 3]
    */
    _ch.common = function (value1, value2){
        let result = _ch.unionAll(value1, value2);
        return uniquResult = result.filter(function(item, pos){
           return result.indexOf(item) !== pos
        });      
    };

    // $sql.findItem - find item(s) based on filter in a string array
    /*
    Sample:
    var animals = ['ant', 'elephant', 'dog', 'frog', 'lion'];
    $sql.findItem(animals, 'nt')
    //  ["ant", "elephant"]
    */
   _ch.findItem = function (value, filterVal){
    return value.filter(function(el) {
        return el.toLowerCase().indexOf(filterVal.toLowerCase()) > -1;
    });      
};
    /* $sql.where (array, operator, filter Value) - filter data from a numeric array
        gt = greater than
        lt = less than
        gte = greter than or equal
        lte - less than or equal
        eq = equal
        eve = even
        odd = odd    
    Sample:
        let arr = [1,2,3,4,5,6];
        $sql.where(arr,'lt',4)) //[1,2,3]
    */
    _ch.where = function (value,operator,filterVal){
        let results = [];
        switch(operator){
            case 'gt':
                results = value.filter(val => {
                    return val > filterVal; 
                });
                return results;
                break;
            case 'lt':
                results = value.filter(val => {
                    return val < filterVal; 
                });
                return results;
                break;
            case 'gte':
                results = value.filter(val => {
                    return val >= filterVal; 
                });
                return results;
                break;
            case 'lte':
                results = value.filter(val => {
                    return val <= filterVal; 
                });
                return results;
                break;
            case 'eq':
                results = value.filter(val => {
                    return val === filterVal; 
                });
                return results;
                break;
            case 'eve':
                results = value.filter(val => {
                    return val % 2 === 0; 
                });
                return results;
                break;
            case 'odd':
                results = value.filter(val => {
                    return val % 2 === 1; 
                });
                return results;
                break;
            default:
                return results;
        }
    }

    /*------Strings functions ---------------------*/
    /*$sql.concatWS - Concatanate two strings with a seperator
      if seperator is not provided default to ' '
    
    Sample: 
    $sql.concatWS('String 1','String 2', '---')
    //"String 1---String 2"
    
    */
    _ch.concatWS = function(value1,value2,seperator){
        seperator = (typeof seperator !=='undefined'? seperator : ' ');
        if(this.isString(value1) && this.isString(value2)){
            return value1.concat(seperator,value2);
        };
    };
    
    /*$sql.concatList - all values in an array
    Sample: 
    
    $sql.concatList([1,2,3,4,5,6])
    // "123456"
    */
    _ch.concatList = function(value){
        if(this.isArray(value)){
            return ''.concat(...value);
        };
    };

    return _ch;
    }

    //library is globally accesible and save in the window
    if(typeof(window.$sql) === 'undefined'){
        window.$sql = chLibrary   ();
    }
})(window, document); //IIFE

