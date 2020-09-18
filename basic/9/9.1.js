// scoping (continuation)


// block scoping

var name = "trenton";

{
    let name = "elliot"; // let plays an imp role here
    console.log(name); //elliot
}

console.log(name); //trenton