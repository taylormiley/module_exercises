// The JS file should create an IIFE module named SolarSystem. Have the student create properties and methods for the following:

// Getter for an array of planets that cannot be modified.
// Getter/setter for number of planets that humans have landed people or robots on.
// Public property for holding a last modified date.
// Getter/setter for spacecraft currently exploring solar system. These should be stored in a private array.
// Any other fun/related data that the student wants to add.

var SolarSystem = function() {
  var planets = [];
  var planetsLandedOn = 0;
  var currentSpacecraft = "";
  var currentChanceOfSuicide = 0;

  planets.push("mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune");

  return {
    lastModifiedDate: new Date(),
    getPlanets: function() {
      return planets;
    },
    getPlanetsLandedOn: function() {
      return planetsLandedOn;
    },
    setPlanetsLandedOn: function(derp) {
      planetsLandedOn = derp;
    },
    getCurrentSpacecraft: function() {
      return currentSpacecraft;
    },
    setCurrentSpacecraft: function(derp1) {
      currentSpacecraft = derp1;
    },
    getCurrentChanceOfSuicide: function() {
      return currentChanceOfSuicide;
    },
    setCurrentChanceOfSuicide: function(derp2) {
      currentChanceOfSuicide = derp2;
    }
  }
}();

SolarSystem.setPlanetsLandedOn(3);
SolarSystem.setCurrentSpacecraft("New Horizon");
SolarSystem.setCurrentChanceOfSuicide(87);

console.log(SolarSystem.getPlanets());
console.log("Planets Landed On: " + SolarSystem.getPlanetsLandedOn());
console.log("Current Spacecraft: " + SolarSystem.getCurrentSpacecraft());
console.log("Current chances of suicide: " + SolarSystem.getCurrentChanceOfSuicide() + "%");


