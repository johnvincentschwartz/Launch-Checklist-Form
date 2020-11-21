window.addEventListener("load", function() {

   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then(function(json) {
         const missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
            <img src="${json[0].image}">
         `;
      });
   });

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {

      let pilotName = document.querySelector("input[name=pilotName").value;
      let copilotName = document.querySelector("input[name=copilotName").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let cargoMass = document.querySelector("input[name=cargoMass").value;

      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");

      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");

      if (!isNaN(Number(pilotName)) || !isNaN(Number(copilotName)) || isNaN(fuelLevel) || isNaN(cargoMass)){
         event.preventDefault()
         alert("Enter valid information for each field.")
         return
      }
      if (!pilotName || !copilotName || !fuelLevel || !cargoMass) {
         event.preventDefault()
         alert("All fields are required!");
      } else {
         event.preventDefault();
         launchStatus.innerHTML = fuelLevel > 10000 && cargoMass < 10000 ? "Shuttle ready for launch" : "Shuttle not ready for launch"
         launchStatus.style.color = fuelLevel > 10000 && cargoMass < 10000 ? "green" : "red"
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `${pilotName} is ready for launch.`
         copilotStatus.innerHTML = `${copilotName} is ready for launch.`
         fuelStatus.innerHTML = fuelLevel > 10000 ? "Fuel level high enough for launch" : "<b>Low fuel.</b>"
         cargoStatus.innerHTML = cargoMass < 10000 ? "Cargo mass low enough for launch" : "<b>Too much cargo.</b>"

      }
   });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!

*/
