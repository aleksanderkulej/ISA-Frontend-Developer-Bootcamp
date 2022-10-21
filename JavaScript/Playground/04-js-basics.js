// Zadanie 1 - 1 punkt

// Stwórz funkcję 'add', która przyjmuje 2 parametry - 'a' i 'b' oraz zwraca ich sumę. Funkcja powinna sprawdzić, czy oba parametry są typu 'number' (podpowiedź: operator typeof)

function add(a, b) {
    atype = typeof a 
    btype = typeof b

    if (atype == "number" && btype == "number") {
    sum = a + b
 return console.log(sum)

    } else {
        return console.log("Jeden z argumentów nie jest liczbą")
    }
}

add(2, 3)
add("test", 1)

// Zadanie 2 - 3 punkty

// Stwórz 2 obiekty reprezentujące osobę. Niech każdy zawiera imię, nazwisko i listę hobby (tablica stringów). Dodaj te osoby do nowej tablicy za pomocą metody push. Napisz 2 funkcje, gdzie każda przyjmuje jako parametr obiekt i wyświetla jego dane. Skorzystaj w jednej z interpolacji i w drugiej z konkatenacji. Przykładowe zdanie: 'Mam na imię A B, moje hobby to C, D, E. Do wyświetlenia listy hobby skorzystaj z funkcji join. Za pomocą metody forEach wywołaj te funkcje dla wszystkich elementów w tablicy. Funkcja forEach powinna zostać wywołana 2 razy - raz korzystając z funkcji bazującej na interpolacji a drugi raz funkcji bazującej na konkatenacji.


let person1 = {
    name: "Adam",
    surname: "Małysz", 
    hobbies: ["cars", "sport", "aviation"]
}

let person2 = {
    name:"Maria",
    surname: "Kalisz", 
    hobbies: ["shopping", "box", "tech"]
}

let group = [];

group.push(person1, person2)

function sayHello(person) {
    console.log(`Mam na imię ${person.name} ${person.surname}, moje hobby to ${person.hobbies.join("-")}`)
}

function sayHelloConcat(person) {
    console.log("Mam na imię " + person.name + " " + person.surname + " moje hobby to " + person.hobbies.join("/"))
}

group.forEach((element) => sayHello(element))
group.forEach((element) => sayHelloConcat(element))


// Utwórz 3 osoby (obiekty) - niech każdy posiada numer pesel, adress jako obiekt (z ulicą, miastem i kodem pocztowym) i wiek. Stwórz funkcję, która jako parametr przyjmie obiekt osoby i jeśli jej wiek jest większy niż 30 lat to zwróci 'true' (przeciwnie - 'false'). Dodaj te osoby do nowej tablicy.

// Stwórz nową tablicę osób starszych niż 30 lat za pomocą metody filter, gdzie jako parametr przekażesz stworzoną wcześniej funkcję. Wykonaj console.table() tej nowo powstałej tablicy - dorzuć screen do folderu z zadaniem.


let p1 = {
    PESEL: "12345677889", 
    address: {
        street: "Sezamkowa", 
        city: "Warsaw", 
        zipCode: "02-222"
    },
    age: 33,
}

let p2 = {
    PESEL: "12345677888", 
    address: {
        street: "Magiczna", 
        city: "Kraków", 
        zipCode: "02-233"
    },
    age: 23,
}

let p3 = {
    PESEL: "12345677887", 
    address: {
        street: "Portowa", 
        city: "Gdyna", 
        zipCode: "02-111"
    },
    age: 30,
}

let peopleAbove30 = []

function checkAge(person) {
    if (person.age > 30) {
        console.log("ok")
        let result = person
        peopleAbove30.push(person)
        return true
    } else {
        console.log("NIE")

        return false
    }
}

console.log(peopleAbove30)


checkAge(p1)
checkAge(p2)
checkAge(p3)

console.log(peopleAbove30)


let newArrayAbove30 = peopleAbove30.filter(age => checkAge(age))

console.table(newArrayAbove30)


// Zadanie 4 - 1 punkt

// Do zadania wykorzystaj obiekty osób z zadania 3. Dodaj je do nowej tablicy - metoda dodania jest dowolna. Napisz funkcję, która jako parametr przyjmie tę tablicę i zwróci sumę wieku wszystkich osób. Wykorzystaj funkcję reduce do zsumowania wieku.

// let arrayForEx4 = [p1, p2, p3]


function sumOfAge() {

    const array1 = [p1.age, p2.age, p3.age];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    
    console.log(sumWithInitial);


   
    

}

sumOfAge()






// Zadanie 5 - 3 punkty

// Stwórz funkcję (A), która będzie przyjmowała jeden parametr (x) - liczbę całkowitą. Zadaniem tej funkcji będzie zwrócenie innej funkcji (B), która również przyjmuje jeden parametr (y)- również liczbę całkowtią. Zwracana funkcja (B) powinna zwrócić sumę paramatrów przekazanych do obu z tych funkcji (x + y).

// function myFunction(x) {
//     const value = x; // value accessible only for code in myFunction, only during the call

  
//     function innerFunction(y) {
//       return value + y; // value accessible also when it's called from external
//     }
//     return innerFunction; // note, it is not innerFunction() but innerFunction
//   }
//   // `value` not accessible there
//   const returnedInnerFunction = myFunction();
//   console.log(returnedInnerFunction());
  // `value` not accessible there

// function manipluateArray(arr, callbackFunction) {
//     const result = []
//     for (let i=0; i < arr.length; i++) {
//         result.push(callbackFunction(arr[i]))
//     }
//     return result
// }

// function addTwo(x) {
//     return x + 2
// }

// const result = manipluateArray([1,2,3], addTwo)
// console.log(result)

// funkcja A(x) zwraca funkcję B(y), która zwraca (x + y)

// Podane wyżej oznacznia - A, B, x, y są tylko do zobrazowania - do wykonania zadania wykorzystaj bardziej opisowe nazwy.

// Obie funkcje powinny ummożliwić sumowanie parametrów zdefiniowanych przez użytkownika w momencie ich wywoływania, np:

// const addTwo = adder(2);

// gdzie 'adder' to nasza funkcja 'A' a 2 to parametr 'x'. Rezultat, czyli 'addTwo' to zwracana funkcja 'B'

// const result = addTwo(7);

// Result to 9, gdzie addTwo to nasza funkcja 'B' a 7 to nasz paramatr 'y'