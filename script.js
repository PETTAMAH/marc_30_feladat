console.log("Javascript is working!");
let colors = ["orange", "blue", "green", "purple"];
let post = {
    title: "My Post",
    description: "My First post, awesome",
    likeCount: 12,
    comments: ["cool!", "nice job!"]
};

let posts = [{
    title: "First post",
    likeCount: 12,
}, {
    title: "Second post",
    likeCount: 222,
}];

//console.log(post, colors);
console.log(colors);
console.log(post);

let age = 18;

if (age >18) {
    console.log("You're an adult !");
} else {
    console.log("You're a kid!");
}

for (let i = 1; i < 10; i++) {
    console.log(i);  
}

console.log(colors);

// f(X) = x*x = x => x*x 

let myFunction = x => {
   console.log(x);
}

let greeter = name => {
    console.log("Hello, "+ name)          //vagy console.log(`Hello, ${name}`);
    if(name === "Adam") {
        console.log("he's an adult");
}
if(name === "Mary") {
    console.log("he's an adult");
}
}

greeter("Adam");
greeter("Mary");
greeter("Dora");
greeter("Marina");


//console.log("Hello, Adam");      //ezek helyett lehet ilyet
//console.log("Hello, Eric");      //ezek helyett lehet ilyet
//console.log("Hello, Thomas");    //ezek helyett lehet ilyet
//console.log("Hello, Barbara");   //ezek helyett lehet ilyet

//["orange", "blue", "green", "purple"];

colors.forEach(color => {
    console.log(color);
});


console.log ("This is the end of our code!");