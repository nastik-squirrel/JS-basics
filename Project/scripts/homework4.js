function homework41() {
    
    function getPower(valueX, valueN, f1, f2) {
        f1(valueX, valueN);
        f2(valueX, valueN);       
    }

    function powerSimple(x, n) {
        let result = x**n;
        console.log(`Simple power function:`)
        console.log(`${x}^${n}=${result}`);
    }

    function powerLoop(x, n) {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result = result * x;
        }
        console.log(`Power function with the loop:`)
        console.log(`${x}^${n}=${result}`);
    }

    getPower(prompt('Provide x:'), prompt('Provide n:'), powerSimple, powerLoop)
}

function homework42() {
    
    function findMin(a, b) {
        return (a < b) ? a : b;
    }
    
    function returnMin (a, b, f1) {
        console.log(`min(${a}, ${b}) => ${f1(a, b)}`);
    }

    returnMin(+prompt('Provide first number:'), +prompt('Provide second number:'), findMin);
}

function homework43() {
    
    let findMax = (a, b) => (a > b) ? a : b;

    let returnMax = (a, b, f1) => console.log(`max(${a}, ${b}) => ${f1(a, b)}`)

    returnMax(+prompt('Provide first number:'), +prompt('Provide second number:'), findMax);
}

function homework44() {
        
    let ask = (question, yes, no) => {
        confirm(question) ? yes() : no()
      }
      
      ask(
        "Do you agree?",
        () => alert("You agreed."),
        () => alert("You canceled the execution.")
      );
}

function homework45() {
    
    let log = (message, logger = console.warn) => logger(message)
 
    let message = prompt('Input message');
    let loggerId = +prompt('Provide logger ID\n1: console.log\n2: console.warn (default)\n3: console.err\n4: alert')

    switch (loggerId) {
        case 1: 
            log(message, console.log);
            break;
        case 3: 
            log(message, console.error);
            break;
        case 4:
            log(message, alert);
            break;
        default:
            log(message);

    }
}
