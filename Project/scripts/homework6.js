function homework61() {
    
    let user1 = {};
    console.table(user1);
    user1.name = 'John';
    console.table(user1);
    user1.surname = 'Smith';
    console.table(user1);
    user1.name = 'Pete';
    console.table(user1);

}

function homework62() {
    
    function getAverageAge(array) {
        let sum = array.reduce((sum, item) => sum + item.age, 0);
        return sum/array.length;
    }
    
    const users = [
        {name: 'Ivan', age: 35, gender: 'male'},
        {name: 'Ann', age: 33, gender: 'female'},
        {name: 'Jane', age: 40, gender: 'female'},
        {name: 'Alex', age: 20, gender: 'male'},
        {name: 'Sam', age: 52, gender: 'female'}
    ];

    let average = getAverageAge(users);

    console.table(users)
    console.log(`Avarage age is ${average}`)
}

function homework63() {
 
    function isEmpty(obj) {
        let count = 0;
        for (let key in obj) count ++;
        return count > 0 ? false : true;
    }

    let fullSchedule = {};

    for (i = 8; i <= 22; i = i + 2) {
        key = `${i}:00`;
        fullSchedule[key] = `Task${i/2-3}`;
    } 

    const schedules = [
        {},
        fullSchedule,
        {'8:00': 'Get up', '22:00': 'Go to bed'},
        {'10:00': 'Open', '14:00': 'Break', '16:00': 'Open', '20:00': 'Close'},
        {},
        {'10:00': 'Breakfast', '14:00': 'Lunch', '18:00': 'Dinner'},
        {}
    ];

    console.table(schedules)

    for (let i = 0; i < schedules.length; i++) {
        console.log(`Schedule ${i} is empty: ${isEmpty(schedules[i])}`);
    }

}

function homework64() {

    function multiplyNumeric(obj) {
        for (let key in obj) {
            if (typeof(obj[key]) == "number") obj[key] *= 2 
        };
    }

    const objects = [
        {},
        {prop1: 'blue', prop2: 38, prop3: false},
        {prop1: 'x1', prop2: 'x2', prop3: 'x3'},
        {prop1: 5, prop2: 2, prop3: 800},
        {prop1: 4 + 4, prop2: 1, prop3: null},
        {prop1: '4 + 4', prop2: '1', prop3: 'null'},
    ]

    console.warn('objects before multiplier:');
    console.table(objects);

    for (i = 0; i < objects.length; i++) {
        multiplyNumeric(objects[i]);
    }

    console.warn('objects after multiplier:');
    console.table(objects);
    
    objects.forEach(element => {
        multiplyNumeric(element)
    });

    console.warn('objects after multiplier forEach:');
    console.table(objects);
}

function homework65() {

    let calculator = {
        read() {
            this.a = +prompt('Input value a:');
            this.b = +prompt('Input value b:');
        },
        sum() {
            return this.a + this.b
        },
        mul() {
            return this.a * this.b
        }
    }

    calculator.read();
    alert(`${calculator.a} + ${calculator.b} = ${calculator.sum()}`);
    alert(`${calculator.a} * ${calculator.b} = ${calculator.mul()}`);

}

function homework66() {

    let ladder = {
        step: 0,
        up(n = 1) {
          this.step += n;
          return this;
        },
        down(n = 1) {
          this.step -= n;
          return this;
        },
        showStep: function() { // shows the current step
          alert( this.step );
          return this;
        }
      };

    ladder.up().up().down().showStep();
    ladder.up(5).up(8).down(3).showStep().up(-6).down().showStep();

}
