function generatePoem (event){
    event.preventDefault();

    new Typewriter("#poem",{
        strings: "English poem, i love flowers!",
        autoStart: true,
        delay: 2,
        cursor:"",});}

let poemFormElement = document.querySelector("#poem-form-generator");
poemFormElement.addEventListener("submit", generatePoem);
        

