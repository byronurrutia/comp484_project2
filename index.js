$(function () {
  // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $(".treat-button").click(clickedTreatButton);
  $(".play-button").click(clickedPlayButton);
  $(".exercise-button").click(clickedExerciseButton);
});

// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = { name: "Cat", weight: "9", happiness: "60" };
var animationReset;
var catAudio = document.getElementsByClassName("cat-audio");
const catIdleAnimation = [
  "./assets/catidle1.gif",
  "./assets/catidle2.gif",
  "./assets/catpaw.gif",
];
const catCleanAnimation = ["./assets/catclean1.gif", "./assets/catclean2.gif"];
const catMovementAnimation = [
  "./assets/catmovement1.gif",
  "./assets/catmovement2.gif",
];

function clickedTreatButton() {
  clearTimeout(animationReset);
  $(".pet-image").attr("src", catCleanAnimation[Math.floor(Math.random() * 2)]);
  $(".cat-vfx").trigger("pause");
  $(".cat-vfx").attr("src", "./audio/eat1.ogg");
  $(".cat-vfx").trigger("play");

  // Increase pet happiness
  pet_info.weight++;
  // Increase pet weight
  pet_info.happiness++;
  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  clearTimeout(animationReset);
  $(".pet-image").attr("src", "./assets/catjump.gif");
  $(".cat-vfx").trigger("pause");
  $(".cat-vfx").attr("src", "./audio/purr3.ogg");
  $(".cat-vfx").trigger("play");
  // Increase pet happiness
  pet_info.happiness++;
  // Decrease pet weight
  pet_info.weight--;
  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  clearTimeout(animationReset);
  $(".pet-image").attr(
    "src",
    catMovementAnimation[Math.floor(Math.random() * 2)]
  );
  $(".cat-vfx").trigger("pause");
  $(".cat-vfx").attr("src", "./audio/hiss1.ogg");
  $(".cat-vfx").trigger("play");
  // Decrease pet happiness
  pet_info.happiness--;
  // Decrease pet weight
  pet_info.weight--;
  checkAndUpdatePetInfoInHtml();
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();

  animationReset = setTimeout(() => {
    $(".pet-image").attr(
      "src",
      catIdleAnimation[Math.floor(Math.random() * 2)]
    );
  }, "6000");
}

function checkWeightAndHappinessBeforeUpdating() {
  // Add conditional so if weight is lower than zero, set it back to zero
  if (pet_info.weight < 0) pet_info.weight = 0;
  if (pet_info.happiness == 0) pet_info.happiness = 0;
}

// Updates your HTML with the current values in your pet_info object
function updatePetInfoInHtml() {
  $(".name").text(pet_info["name"]);
  $(".weight").text(pet_info["weight"]);
  $(".happiness").text(pet_info["happiness"]);
}
