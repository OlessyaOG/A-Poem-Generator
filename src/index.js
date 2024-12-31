/// Display the generated poem

function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "🖋️",
  });
}

function generatePoem(event) {
  event.preventDefault();

  /// Creating API URL
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ad7tba5a453o9ae4007ed34f61a4b5a8";
  let context =
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem.";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink"> ⌛ Generating a poem about ${instructionsInput.value}...</div>`;

  /// Make a call to API

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
