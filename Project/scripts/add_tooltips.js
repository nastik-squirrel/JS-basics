
let homework11_tt = "Nothing"

let homework21_tt = "User inputs 2 numbers (via prompt). Show the sum of these numbers in alert"
let homework22_tt = "User inputs their full name. Show alert with welcome message"
let homework23_tt = "User inputs a number. Show remainder of the division by 2"
let homework24_tt = "User inputs a float number. Show value before dot and after dot."

let homework31_tt = "User inputs a number. Check the number and write a message if it's odd or even."
let homework32_tt = "Check the range outside [14..90]"
let homework33_tt = "Write to console number sequence: 0, 2, 4, 6, 8, 10"
let homework34_tt = "Write to console number sequence: 1, 3, 5, 7, 9"
let homework35_tt = "Write a user login application"

let homework41_tt = "Write a function pow(x, n) that returns x in power n"
let homework42_tt = "Write a function min(a, b) which returns the least of two numbers a and b"
let homework43_tt = "Write a function max(a, b) which returns the greater of two numbers a and b"
let homework44_tt = "Rewrite the code with arrow functions"
let homework45_tt = "Write a function log(message, logger)"

let homework51_tt = "Tell if copying in the code worked"
let homework52_tt = "Array activities: create, append, replace, prepend"
let homework53_tt = "Create a function getAverageAge(array)"
let homework54_tt = "Filter items from range"
let homework55_tt = "Get value without currency"
let homework56_tt = "Make name right"

let homework61_tt = "Object activities: create, add property, change property"
let homework62_tt = "Find average age for users from array of users"
let homework63_tt = "Check object for emptiness"
let homework64_tt = "Multiply numeric object properties by 2"
let homework65_tt = "Create calculator with sum and multiply methods"
let homework66_tt = "Modify the Ledder code to be used in chain"

let homework70_tt = "Read more information about Scope"
let homework71_tt = "Answer the question"
let homework72_tt = "Filter through function isInBetween"
let homework73_tt = "Rewrite function showMessage to the self-calling"
let homework74_tt = "Fix the code"

let homework81_tt = "Add inline style to even children inside grid-1"
let homework82_tt = "Add class grid-item-background to odd children inside grid-1"
let homework83_tt = "Create function toggleClass(element, className)"
let homework84_tt = "Read text from prompt and add this text to element .text-placeholder"

let tricky1_tt = "Homework task 3.5 with Callback"
let tricky2_tt = "Sum of fist n integers using Reduce"
let tricky3_tt = "Create a Fibonacci array"
let tricky4_tt = "Extended ledder from homework task 6.6"

let whatever1_tt = "whatever1 tooltip"
let whatever2_tt = "whatever2 tooltip"

const tooltips = {
    homework11_tt,
    homework21_tt, homework22_tt, homework23_tt, homework24_tt,
    homework31_tt, homework32_tt, homework33_tt, homework34_tt, homework35_tt,  
    homework41_tt, homework42_tt, homework43_tt, homework44_tt, homework45_tt,  
    homework51_tt, homework52_tt, homework53_tt, homework54_tt, homework55_tt, homework56_tt,  
    homework61_tt, homework62_tt, homework63_tt, homework64_tt, homework65_tt, homework66_tt,
    homework70_tt, homework71_tt, homework72_tt, homework73_tt, homework74_tt,
    homework81_tt, homework82_tt, homework83_tt, homework84_tt,
    tricky1_tt, tricky2_tt, tricky3_tt, tricky4_tt,
    whatever1_tt, whatever2_tt
}

for (key in tooltips) {
    let a = key.toString()
    el = document.getElementById(a);
    if (el != null) {
        el.setAttribute("data-toggle", "tooltip");
        el.setAttribute("data-placement", "bottom");
        el.setAttribute("title", tooltips[key]);    
    }
}
