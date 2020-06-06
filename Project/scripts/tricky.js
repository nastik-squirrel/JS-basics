function tricky1() {
    let checkPrompt = (whatToCheck, correctValue, actionIfOK) => {
        let value = prompt(`Provide ${whatToCheck}`)
        if (value == correctValue) {
            actionIfOK();
        } else if (value == null) {
            alert('Canceled');
        } else {
            alert(`Wrong ${whatToCheck}`);
        }
    }

    const correctLogin = 'Admin';
    const correctPassword = 'TheMaster';

    let checkPassword = () => checkPrompt('password', correctPassword, () => alert('Welcome'))
    let checkLogin = () => checkPrompt('login', correctLogin, checkPassword)

    checkLogin();
}

function tricky2() {
    
    // Forms an array with sums of n first integers
    // [1, 1+2, 1+2+3, ... 1+2+..+n]

    function getNSum(array, item) {
        previous = array.length == 0 ? 0: array[array.length - 1]    
        array.push(previous + item);
        return array;
    }

    let n = 10
    let simpleArray = []

    for (let i = 1; i <= n; i++) {
        simpleArray.push(i);
    }
    
    console.log(simpleArray);
    console.log(simpleArray.reduce(getNSum, []));
}

function tricky3() {
    
    // Forms a Fibonacci array:
    // [1, 1, 2, 3, 5, 8 ...]

    let n = 10
    let fibonacciArray = [1]
    let stored = 0, current = 0, next = 0

    for (let i = 1; i <= n; i++) {
        current = fibonacciArray[fibonacciArray.length - 1];
        next = stored + current;
        fibonacciArray.push(next);
        stored = next;
    }
    
    console.log(fibonacciArray);
}

function tricky4() {
    
    let ladder = {
        step: 0,
        up(nu) {
          for (i = 0; i < nu; i++) this.step++;
          return this;
        },
        down(nd) {
          for (i = 0; i < nd; i++) this.step--;
          return this;
        },
        showStep: function() { // shows the current step
          alert( this.step );
          return this;
        }
      };

    console.log(ladder.up(5).up(8).down(3).showStep());
}
