//basic function

function jainam(){
    console.log("my name is jainam");
}
jainam()

//function with parameters
function info(website){
    console.log("jainam.com :" +website);
}
info()
//Function Expression:
let msg = function(info){
    console.log("Website Name : "+info);
    console.log("Welcome to Learning JAVASCRIPT");
}
msg("jainam");

//Arrow Functions (ES6+): 
let getinfo = (name,age,height) => console.log(name+age+height,);

getinfo("joy",12,4.8);

// Return Statement
function multiply(a, b) {
    return a * b;
}

console.log(multiply(8, 4)); // Output: 



// Anonymous Functions:
setTimeout(function() {
    console.log("Delayed message");
}, 1000);

setTimeout(() => {
    console.log("Delayed for 1 second.");
  }, 1000);
