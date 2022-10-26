//This is todays forecast in Kelvin
const kelvin = 293;
//I am now converting kelvin into celsius
const celsius = kelvin - 273;
//I am converting celsius into fahrenheit and using the math.floor to round down
const fahrenheit = Math.floor(celsius * (9/5) + 32);
//Using string interpolation I will display this into the console log
console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);
//I will now convert the teperature into the newton scale
const newton = Math.floor(celsius * (33/100));
console.log(`The temperature on the Newton scale would be ${newton}`);
//Was able to learn vs code a little better by making this new file and was able to clean up my code to only display what is necessary
