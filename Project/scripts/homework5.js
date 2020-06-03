function homework51() {
    
    let fruits = ["Apples", "Pear", "Orange"];

    // push a new value into the "copy"
    let shoppingCart = fruits;
    shoppingCart.push("Banana");

    // what's in fruits?
    alert(fruits.length); // ?
    
    console.warn(`(!)Reference copied, so original will be changed(!)`)
}

function homework52() {
    
    let styles = ['Jazz', 'Blues'];
    console.log(`New array created: ${styles}`);
    
    styles.push('Rock-n-Roll');
    console.log(`New style added: ${styles}`);
    
    styles[1] = ('Classics');
    console.log(`Middle style changed: ${styles}`);
    
    styles.splice(0, 0, 'Rap', 'Reggae');
    console.log(`Prepend 2 new styles: ${styles}`);

}

function homework53() {
 
    function getAverageAge(array) {
        let sum = array.reduce((sum, item) => sum + (+item), 0);
        return sum/array.length;
    }

    let ageString = prompt('Provide ages list separated by comma');

    let ageArray = ageString.split(',');
    let average = getAverageAge(ageArray);
    
    alert(`Average is ${average}`);

}

function homework54() {

    function filterRange(array, a, b) {
        newArray = []
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= a && array[i] <= b) {
                newArray.push(array[i])                
            }
        }
        return newArray
    }

    let initialArray = [4, 7, 44, 56, 198, 3, 55, 23, 14, 233];
    let min = 12, max = 100;

    filteredArray = filterRange(initialArray, min, max)

    console.log(`Initial array: ${initialArray}`)
    console.log(`Range: [${min} .. ${max}]`)
    console.log(`Filtered array: ${filteredArray}`)
    console.log(`Initial array unchanged: ${initialArray}`)
}

function homework55() {

    let extractCurrencyValue = str => +str.split('$')[1]
    
    let cost = prompt('Input cost with $:')
    let value = extractCurrencyValue(cost)
    
    alert(`Currency value without sign is ${value}`)
}

function homework56() {

    let ucFirst = str => str[0].toUpperCase() + str.slice(1, str.length).toLowerCase()

    let name = prompt('Input name:')
    let corrected = ucFirst(name)   
    
    alert(`Correct name format is ${corrected}`)

}
