function displayPoem(response) {
    new Typewriter("#poem",{
        strings: response.data.answer,
        autoStart: true,
        delay: 2,
        cursor:"",});}

function generatePoem (event) {
    event.preventDefault();
let instructionsInput = document.querySelector("#user-instructions");
let apikey = "57b13ef26a049644t26b08bo9241280d";
let prompt = `User instrctions: Genarate a Enlish poem about ${instructionsInput.value}`;
let context = "You are a romantic Poem expert andlove to writeshort poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br/>. Make sure to follow the user instructions. Do not include the title to the poem. Sign the poem with 'Shecodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`
    
axios.get(apiURL).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-form-generator");
poemFormElement.addEventListener("submit", generatePoem);
        

