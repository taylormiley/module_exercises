// Getter for an array of closest 5 stars to the Sun.
// Getter/setter for the estimated age of the solar system in earth years.
// Getter/setter for array of known dwarf planets.

var SolarSystem = function() {
  var closest = [];
  var solarSystemAge = 0;
  var dwarfPlanets;

  closest.push("Mercury", "Venus", "Earth", "Mars", "Jupiter");
  // dwarfPlanets.push("Eris", "Pluto", "Haumea", "Makemake", "Ceres");

  return {
    getClosest: function() {
      return closest;
    },
    getSolarSystemAge: function() {
      return solarSystemAge;
    },
    setSolarSystemAge: function(age) {
      solarSystemAge = age;
    },
    getDwarfPlanets: function() {
      return dwarfPlanets;
    },
    setDwarfPlanets: function(dwarf1, dwarf2, dwarf3, dwarf4, dwarf5) {
      dwarfPlanets = arguments;
    }
  }
}();

SolarSystem.setSolarSystemAge(4,500,000,000);
SolarSystem.setDwarfPlanets("Eris", "Pluto", "Haumea", "Makemake", "Ceres");





console.log("The five closest planets are: " + SolarSystem.getClosest());
console.log("Age of the Solar System: " + SolarSystem.getSolarSystemAge());
console.log("Known Dwarf Planets: " + SolarSystem.getDwarfPlanets());