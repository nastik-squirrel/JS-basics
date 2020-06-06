
let homework11_tt = "Nothing"

let homework21_tt = ""
let homework22_tt = ""
let homework23_tt = ""
let homework24_tt = ""

let homework31_tt = ""
let homework32_tt = ""
let homework33_tt = ""
let homework34_tt = ""
let homework35_tt = ""

let homework41_tt = ""
let homework42_tt = ""
let homework43_tt = ""
let homework44_tt = ""
let homework45_tt = ""

let homework51_tt = ""
let homework52_tt = ""
let homework53_tt = ""
let homework54_tt = ""
let homework55_tt = ""
let homework56_tt = ""

let homework61_tt = ""
let homework62_tt = ""
let homework63_tt = ""
let homework64_tt = ""
let homework65_tt = ""
let homework66_tt = ""

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
