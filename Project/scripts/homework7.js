function homework70() {
    
    console.error('To be read!')
}

function homework71() {
    
    let name = "John";

    function sayHi() {
        alert("Hi, " + name);
    }

     // sayHi(); // what will it show: "John" or "Pete"? => John

    name = "Pete";

    sayHi(); // what will it show: "John" or "Pete"? => Pete

    console.log('Pete is used since the variable was changed before the function called')
}

function homework72() {
    
    function isInBetween(a, b) {
        return (item) => (item > a && item < b)
    }

    let array = [1, 2, 3, 4, 5, 6, 7];
    
    console.warn('Initial array')
    console.log(array)
    
    let filteredArray = array.filter(isInBetween(3, 6))

    console.warn('Filtered array')
    console.log(filteredArray)
}

function homework73() {
    
//    function showUserInfo(firstName, lastName) {
//        const fullName = `${firstName} ${lastName}`;
//      
//        function showMessage() {
//           console.log(fullName);
//        }
//      
//        showMessage();
//      }

      function showUserInfo(firstName, lastName) {
        const fullName = `${firstName} ${lastName}`;
      
        (function () {
            console.log(fullName);
        }());
      }

      showUserInfo('Anastasiya', 'Sereda');
      showUserInfo('Noname', 'Noname');
}

function homework74() {
    
//    const user = { name: 'Ann', age: 54 };
//    const user2 = user;
//    user2.age = 40;
//
//    user2.sayHi = () => console.log(`Hi from ${this.name}`);

//    let userAges = [user, user2].map(item => it.age);
//    const oldestUserAge = Math.max(userAges);

    const user = { name: 'Ann', age: 54 };
    const user2 = {...user};
    user2.age = 40;

    console.table([user, user2])

    user2.sayHi = function() {
        console.log(`Hello from ${this.name}!`)
    }

    user2.sayHi()

    let userAges = [user, user2].map(item => item.age);
    const oldestUserAge = Math.max(...userAges);

    console.log(oldestUserAge)
}
