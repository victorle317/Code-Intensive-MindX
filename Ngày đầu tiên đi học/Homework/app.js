// 1 chút OOP 
( function () {
    //Cách truyền thống sử dụng constructor function và ứng dụng prototype inheritance, prototype chain
    // cô lập code tránh trùng biến
    (function () {
        function Animal(spec, where) {
            this.spec = spec;
            this.where = where;
            this.orgin = function () {
                console.log('this is where i live ' + where)
            }
        }

        function Person(first, last, age, gender, spec, where) {
            this.animal = new Animal(spec, where)
            this.name = {
                'first': first,
                'last': last
            }; this.ham = function () { console.log('my name is ' + this.name.first) };
            this.age = age;
            this.gender = gender;

        }
        // Person.prototype = new Animal()
        Person.prototype.speak = function () {
            console.log('hi there my age is ' + this.age)
        }
        var person1 = new Person('Bob', 'Smith', 32, 'male', 'linh trưởng', 'địa cầu');
        var person2 = new Person('victor', 'le', 20, 'male', 'linh trưởng', 'địa cầu');

        console.log(person1.animal.spec)
        person1.animal.orgin()
        person1.ham()
        person1.speak()
        person2.ham()

    })();


    // Sử dụng ES6 syntax (giống y hệt JAVA) nhưng bản chất khác java(vẫn là prototype chứ ko phải class)
    // cô lập code tránh trùng biến
    (function () {
        class Animal {
            constructor(spec, where) {
                this.spec = spec;
                this.where = where;
                this.orgin = function () {
                    console.log('this is where i live ' + where)
                }
            }
            static saysomething() {
                console.log('i have nothing to say')
            }
            //static method tương tự java
        }
        class Person extends Animal {
            constructor(first, last, age, gender, spec, where) {
                super(spec, where)
                this.name = {
                    'first': first,
                    'last': last
                }; this.ham = function () { console.log('my name is ' + this.name.first); };
                this.age = age;
                this.gender = gender;

            }
            speak() {
                console.log('hi there my age is ' + this.age);
            }
        }

        var person1 = new Person('Bob', 'Smith', 32, 'male', 'linh trưởng', 'địa cầu');
        var person2 = new Person('victor', 'le', 20, 'male', 'linh trưởng', 'địa cầu');

        console.log(person1.spec)
        person1.orgin()
        person1.ham()
        person1.speak()
        person2.ham()
        Animal.saysomething()
        console.log('------------------------------------------------')
        console.log('1 chút thao tác với mảng')
    })();
}) ();
//------------------------------------------------------------------------------------------

//1 chút mảng
(function () {
    function removeDuplicates(array) {
        return array.filter((a, b) => array.indexOf(a) === b)
    };
    // 2 phần tử có giá trị giống nhau nhưng vị trí chắc chắn khác nhau nên dùng hàm trên indexOf
    //If the item is present more than once, the indexOf method returns the position of the first occurence.
    console.log(removeDuplicates([1,2,3,4,4,5,2,2]))
})();

// Đèn đỏ logic
$(function () {
    $("#m_timer").countdowntimer({
        seconds: 30,
        stopButton:"btn",
        timeUp: timeisUp
    });
    function timeisUp(){
        $('.green').removeClass('isOn')
        $('.green').addClass('isOff')
        $('#btn').addClass('d-block')
        clearInterval(x);
        time = '0 sec'
        
    }
});

var time = '0 sec';
var x;
var y = 0;

function Switch() {
    time = $('#m_timer').text()
    if (time === '30 sec') {
        $('.red').removeClass('isOff')
        $('.red').addClass('isOn')
    }
    if (time === '20 sec') {
        $('.red').removeClass('isOn')
        $('.red').addClass('isOff')
        $('.yellow').removeClass('isOff')
        $('.yellow').addClass('isOn')
        console.log('đèn vàng')
    }
    if (time === '15 sec') {
        $('.yellow').removeClass('isOn')
        $('.yellow').addClass('isOff')
        $('.green').removeClass('isOff')
        $('.green').addClass('isOn')
        console.log('đèn xanh')
    }
}

function start (){
     x = setInterval(Switch, 1000)
}
start()

function timeReset() {  
    y++
    // console.log(y)
    clearInterval(x);
    time = '0 sec'
    if( y%2 == 0){
        start()
        // $(".red").toggleClass('isOn')
        setTimeout(function () {
            $('#btn').removeClass('d-block')
        }, 100)
    }
}

//loader
setTimeout(function () {
    $(".loader-wrapper").fadeOut(500, () => { console.log('success') })
}, 6500)
//loader

