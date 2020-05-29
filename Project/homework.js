// 'use strict';

function homework11()
{
    alert(`No scripts in first homework`);
}

function homework21()
{
    let x = +prompt("Set the first number:");
    let y = +prompt("Set the second number:");
    alert(`Result is: ${(x + y)}`);
}

function homework22()
{
    let userName = prompt("What is your name?");
    if (!userName) userName = 'Anonymous'
    alert(`Hello, ${userName}!\nHave a great day!`);
}

function homework23()
{
    let number = prompt("Pick a number:");
    if (!number) number = 0
    result = number % 2
    alert(`The remainder for ${number}/2 is ${result} `);
}

function homework24()
{
    let number = prompt("Pick a real number:");
    if (number.indexOf(",")) number.replace(",", ".");
    if (!number) number = 0, number = +number 
    
    result1 = number % 1
    result2 = number - result1

    alert(`Value before comma: ${result2}\nValue after comma: ${result1}`);
}
