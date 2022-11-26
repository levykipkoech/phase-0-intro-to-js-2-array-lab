// Write your solution here!

var cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name){
    cats.push(name)
    return cats
}
destructivelyAppendCat('Ralph')

function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats
}
destructivelyPrependCat('Bob')

 
function destructivelyRemoveLastCat(){
    var destructivelyRemoveLastCat = cats.pop()
    return destructivelyRemoveLastCat
}
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat(){
    var destructivelyRemoveFirstCat = cats.shift()
    return destructivelyRemoveFirstCat
}
destructivelyRemoveFirstCat()

 
function appendCat(name){
    const catArr = [...cats, name]
    return catArr
}
appendCat('Broom')

 
function prependCat(name){
    const catArr = [name, ...cats]
    return catArr
}
prependCat('Arnold')

function removeFirstCat(){
    const firstItem = cats.slice(1)
    return firstItem
}
removeFirstCat() 

function removeLastCat(){
    const lastItem = cats.slice(0,2)
    return lastItem
}
removeLastCat()