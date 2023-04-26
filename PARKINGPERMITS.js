const apiKey = "50e06c075bf0d45d36006bd7108653bf";
const lat = 34.6834;
const lon = -82.8374;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
//fetch weather data
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: Connection failed with error code ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
            const weather = data.weather[0].description;
            const temp = data.main.temp - 273.15;
            console.log(`\nWeather in Clemson, SC: ${weather}`);
            console.log(`Temperature: ${temp.toFixed(2)}°C`);
    
            //start of input
            console.log("\nWhat type of permit do you have?");
            const readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });
            readline.question('', (permitInput) => {
                let category = "no";
                if(permitInput === "Commuter" || permitInput === "Apartment" || permitInput === "East Resident"|| permitInput === "West Resident"){
                    category = "Student";
                } else if (permitInput === "Employee"){
                    category = "Employee";
                }
                
                if(['A', 'E', 'I', 'O', 'U', 'Y'].includes(category.charAt(0))){
                  console.log("You have an " + category + " permit.");
                } else {
                  console.log("You have a " + category + " permit.");
                }
                
                console.log("You can park in these locations:\n");
                
                if(permitInput === "Commuter"){
                  console.log("C Lots");
                  console.log("Employee Spaces (Weekdays, 4:30 PM to 7:00 AM)");
                  console.log("Employee Spaces (Weekends, 4:30PM Friday to 7 AM Monday)");
                
                } else if(permitInput === "Apartment"){
                  console.log("Calhoun Courts");
                  console.log("Thornhill");
                  console.log("Lightsey");
                  console.log("R4");
                  console.log("R4 Ext");
                  console.log("Employee Spaces (Weekdays, 7:30PM to 7 AM)");
                  console.log("Employee Spaces (Weekends, 4:30PM Friday to 7 AM Monday)");
                } else if(permitInput === "West Resident"){
                  console.log("R3");
                  console.log("R3 EXT");
                  console.log("P4");
                  console.log("Employee Spaces (Weekdays, 7:30PM to 7 AM)");
                  console.log("Employee Spaces (Weekends, 4:30PM Friday to 7 AM Monday)");
                } else if(permitInput === "East Resident"){
                  console.log("R1");
                  console.log("R2");
                  console.log("R5");
                  console.log("McMillan Rd. East");
                  console.log("Employee Spaces (Weekdays, 7:30PM to 7 AM)");
                  console.log("Employee Spaces (Weekends, 4:30PM Friday to 7 AM Monday)");
                } else if (permitInput === "Employee"){
                  console.log("C Lots");
                  console.log("Employee Spaces");
                  console.log("Employee 24 Hour Spaces");
                }
                console.log("Visitor Spots (9 PM to 7 AM)");
                readline.close();
            });
        })
        .catch(error => console.error(error));
    ``
    
