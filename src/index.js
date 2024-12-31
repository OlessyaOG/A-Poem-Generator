function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["Hello", "World"],
    autoStart: true,
    delay: 1,
    cursor: "🖋️",
  });

  poemElement.innerHTML = "This will be a poem";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
