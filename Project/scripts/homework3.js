function homework31() {
    let number = prompt('Input number:');
    let result = +number % 2;
    let text = '';
    switch (result) {
        case 0:
            text = `${number} is EVEN`;
            break;
        case 1:
            text = `${number} is ODD`;
            break;
        default:
            text = `"${number}" is not a number`;
            break;
    }

    alert(text);
}

function homework32() {
    let age = +prompt('How old are you?');
    let isOutsideRange = 'Unknown';

    function getOutput(isOutsideRange, n){
        switch (isOutsideRange) {
            case true:
                alert(`Variant ${n}\nTrue: age outside [14..90]`);
                break;
            case false:
                alert(`Variant ${n}\nFalse: age inside [14..90]`);
                break;
            default:
                alert(`Variant ${n}\nUnknown: age is not a number or not provided`);
                break;
        }}

// Variant 1: IF-ELSE

    if (age || (age == 0)) {
        if (age < 14) {
            isOutsideRange = true;
        } else {
            if (age > 90) {
                isOutsideRange = true;
            }
            else {
                isOutsideRange = false;
            }
        }   
    } else {
        isOutsideRange = 'Unknown';
    }
    getOutput(isOutsideRange, 1);

// Variant 1: IF-ELSE with NOT

    if (age || (age == 0)) {
        if (!(age >=14 && age<=90)) {
            isOutsideRange = true;
        } else {
            isOutsideRange = false;
        }
    } else {
        isOutsideRange = 'Unknown';
    }
    getOutput(isOutsideRange, 1);

// Variant 3: TERNARY

    if (age || age == 0) {
        isOutsideRange = (age > 90 || age < 14) ? true : false;
    } else {
        isOutsideRange = 'Unknown';
    }
    getOutput(isOutsideRange, 3);

}

function homework33() {
    let i = 0;
    while (i < 11) {
        console.log(i);
        i += 2;
    }
}

function homework34() {
    for (let i = 1; i <= 9; i += 2) {
        console.log(i);
    }
}

function homework35() {

// CASE used  instead of IF :) 

    const correctLogin = 'Admin';
    const correctPassword = 'TheMaster';

    let login = prompt('Who\'s there?');
    switch(login) {
        case null:
            alert('Canceled');
            break;
        case correctLogin:
            let password = prompt('Password?');
            switch(password) {
                case null:
                    alert('Canceled');
                    break;
                case correctPassword:
                    alert('Welcome!');
                    break;
                default:
                    alert('Wrong password');
                    break;
            };
            break;
        default:
            alert('I don\'t know you')
    } 
}
