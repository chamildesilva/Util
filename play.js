const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

var searchSting = 'apples'

console.log($sql.findValueObjArray(inventory,'name',searchSting));