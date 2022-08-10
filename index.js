$(function () {
  // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $(".treat-button").click(clickedTreatButton);
  $(".play-button").click(clickedPlayButton);
  $(".exercise-button").click(clickedExerciseButton);
  $(".sleep-button").click(clickedSleepButton);
  $(document).on("input", "#customRange3", function () {
    $(".cat-vfx").prop("volume", $(this).val() / 5);
  });
});

// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = { name: "Cat", weight: "9", happiness: "60", rest: "3" };
var animationReset;
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
const catTreatSfx = ["./audio/eat1.ogg", "./audio/eat2.ogg"];
const catExerciseSfx = [
  "./audio/hitt1.ogg",
  "./audio/hitt2.ogg",
  "./audio/hitt3.ogg",
];
const catPlaySfx = [
  "./audio/meow1.ogg",
  "./audio/meow2.ogg",
  "./audio/meow3.ogg",
  "./audio/meow4.ogg",
  "./audio/purreow1.ogg",
  "./audio/purreow2.ogg",
];
const catSleepSfx = [
  "./audio/purr1.ogg",
  "./audio/purr2.ogg",
  "./audio/purr3.ogg",
];

function clickedTreatButton() {
  clearTimeout(animationReset);
  $(".pet-image").attr(
    "src",
    catCleanAnimation[Math.floor(Math.random() * catCleanAnimation.length)]
  );
  $(".cat-vfx").trigger("pause");
  $(".cat-vfx").attr(
    "src",
    catTreatSfx[Math.floor(Math.random() * catTreatSfx.length)]
  );
  $(".cat-vfx").trigger("play");
  $(".status").text("+1 wieght, +1 happiness");

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
  $(".cat-vfx").attr(
    "src",
    catPlaySfx[Math.floor(Math.random() * catPlaySfx.length)]
  );
  $(".cat-vfx").trigger("play");
  $(".status").text("-1 wieght, +1 happiness, -1 rest");
  // Increase pet happiness
  pet_info.happiness++;
  // Decrease pet weight
  pet_info.weight--;
  pet_info.rest--;
  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  clearTimeout(animationReset);
  $(".pet-image").attr(
    "src",
    catMovementAnimation[
      Math.floor(Math.random() * catMovementAnimation.length)
    ]
  );
  $(".cat-vfx").trigger("pause");
  $(".cat-vfx").attr(
    "src",
    catExerciseSfx[Math.floor(Math.random() * catExerciseSfx.length)]
  );
  $(".cat-vfx").trigger("play");
  $(".status").text("-1 wieght, -1 happiness, -1 rest");
  // Decrease pet happiness
  pet_info.happiness--;
  // Decrease pet weight
  pet_info.weight--;
  pet_info.rest--;
  checkAndUpdatePetInfoInHtml();
}

function clickedSleepButton() {
  clearTimeout(animationReset);
  $(".pet-image").attr("src", "./assets/catsleep.gif");
  $(".cat-vfx").trigger("pause");
  $(".cat-vfx").attr(
    "src",
    catSleepSfx[Math.floor(Math.random() * catSleepSfx.length)]
  );
  $(".cat-vfx").trigger("play");
  $(".status").text("-1 weight, +1 happiness, +1 rest");

  pet_info.rest++;
  pet_info.happiness++;
  pet_info.weight--;
  checkAndUpdatePetInfoInHtml();
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();

  animationReset = setTimeout(() => {
    $(".pet-image").attr(
      "src",
      catIdleAnimation[Math.floor(Math.random() * catIdleAnimation.length)]
    );
    $(".status").text("");
  }, "6000");
}

function checkWeightAndHappinessBeforeUpdating() {
  // Add conditional so if weight is lower than zero, set it back to zero
  if (pet_info.weight < 0) pet_info.weight = 0;
  if (pet_info.happiness <= 0) pet_info.happiness = 0;
  if (pet_info.rest <= 0) pet_info.rest = 0;
}

// Updates your HTML with the current values in your pet_info object
function updatePetInfoInHtml() {
  $(".name").text(pet_info["name"]);
  $(".weight").text(pet_info["weight"]);
  $(".happiness").text(pet_info["happiness"]);
  $(".rest").text(pet_info["rest"]);
}
