const lista = document.querySelector("ul");
let li;
for (i=1 ; i<=100 ; i++ ){
    if(i%3 == 0 && i%5 == 0){
        li = `<li>FizzBuzz</li>`
        console.log("FizzBuzz")
    }
    else if(i%3 == 0){
        li = `<li>Fizz</li>`
        console.log("Fizz")
    }
    else if(i%5 == 0){
        li = `<li>Buzz</li>`
        console.log("Buzz")
    }
    else{
        li = `<li>${i}</li>`
        console.log(i)
    }
    lista.innerHTML += li
}