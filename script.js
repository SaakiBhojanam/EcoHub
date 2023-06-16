function calculateCarbonFootprint() {
  // Get the selected values from the dropdowns
  var location = document.getElementById("location").value;
  var houseSize = document.getElementById("house-size").value;
  var numPeople = document.getElementById("num-people").value;
  var heatingCooling = document.getElementById("heating-cooling").value;
  var electricity = document.getElementById("electricity").value;
  var energyConservation = document.getElementById("energy-conservation").value;
  var travelMethod = document.getElementById("travel-method").value;
  var holidayDistance = document.getElementById("holiday-distance").value;
  var meatConsumption = document.getElementById("meat-consumption").value;
  var foodSource = document.getElementById("food-source").value;
  var wasteProduction = document.getElementById("waste-production").value;
  var wasteDisposal = document.getElementById("waste-disposal").value;

  // Calculate the carbon footprint based on the selected options
  var carbonFootprint = calculateCarbonEmissions(
    location,
    houseSize,
    numPeople,
    heatingCooling,
    electricity,
    energyConservation,
    travelMethod,
    holidayDistance,
    meatConsumption,
    foodSource,
    wasteProduction,
    wasteDisposal
  );

  // Round the carbon footprint to the nearest tenth
  carbonFootprint = carbonFootprint.toFixed(1);

  // Update the carbon footprint value
  var carbonValueElement = document.getElementById("carbon-value");
  carbonValueElement.textContent = carbonFootprint;

  // Show the metric unit text
  var metricUnitElement = document.getElementById("metric-unit");
  metricUnitElement.style.display = "inline";

}

function calculateCarbonEmissions(
  location,
  houseSize,
  numPeople,
  heatingCooling,
  electricity,
  energyConservation,
  travelMethod,
  holidayDistance,
  meatConsumption,
  foodSource,
  wasteProduction,
  wasteDisposal
) {
  // Define the carbon emissions values for different options
  var locationEmissions = {
    "North America": 16.92,
    "Europe": 7.75,
    "Asia": 4.81,
  };

  var houseSizeEmissions = {
    "small": 5.12,
    "medium": 9.87,
    "large": 16.34,
  };

  var numPeopleEmissions = {
    "4": 2.59,
    "3": 4.38,
    "2": 6.54,
    "1": 8.71,
  };

  var heatingCoolingEmissions = {
    "low": 3.18,
    "normal": 4.99,
    "high": 6.79,
  };

  var electricityEmissions = {
    "standard": 2.39,
    "renewable": 1.56,
    "solar": 0.82,
  };

  var energyConservationEmissions = {
    "not-conserve": 2.89,
    "occasionally-conserve": 1.73,
    "always-conserve": 0.86,
  };

  var travelMethodEmissions = {
    "car": 2.78,
    "public-transportation": 1.64,
    "bicycle": 0.21,
    "walking": 0.0,
  };

  var holidayDistanceEmissions = {
    "short-flight": 2.53,
    "long-flight": 6.43,
    "road-trip": 1.92,
    "staycation": 0.0,
  };

  var meatConsumptionEmissions = {
    "vegan": 0.0,
    "vegetarian": 0.65,
    "occasional-meat-eater": 1.39,
    "regular-meat-eater": 2.82,
  };

  var foodSourceEmissions = {
    "processed-food": 2.67,
    "local-produce": 1.34,
    "organic-produce": 0.95,
  };

  var wasteProductionEmissions = {
    "low": 0.95,
    "average": 1.57,
    "high": 2.95,
  };

  var wasteDisposalEmissions = {
    "recycled": 0.37,
    "landfilled": 1.23,
    "composted": 0.62,
  };

  // Calculate the total carbon emissions based on the selected options
  var totalEmissions =
    locationEmissions[location] +
    houseSizeEmissions[houseSize] +
    numPeopleEmissions[numPeople] +
    heatingCoolingEmissions[heatingCooling] +
    electricityEmissions[electricity] +
    energyConservationEmissions[energyConservation] +
    travelMethodEmissions[travelMethod] +
    holidayDistanceEmissions[holidayDistance] +
    meatConsumptionEmissions[meatConsumption] +
    foodSourceEmissions[foodSource] +
    wasteProductionEmissions[wasteProduction] +
    wasteDisposalEmissions[wasteDisposal];

  return totalEmissions;
}