//create a guestlist ARRAY
let guestlist = ["Hajra", "Farheen", "Hayam", "Hamza",];
//Make the varialble dont come guest at ARRAY
let dontcome = guestlist[1];
//print the variable don't come guest 
console.log(dontcome,"is don't come");
//Use Splice funtion for ADD and REMOVING
guestlist.splice( 1, 2, "Manahil" );
//stop the printing
//guestlist.forEach(list => console.log(`Assalam-u-aalaikum, ${list} would you like dinner with me?`));

//print the Value for Bigger TABLE
console.log("GOOD NEWS ! We have Found a BIGGER TABLE for Dinner.");

//ADDING the Value of starting at the ARRAY
guestlist.unshift("Muqeed");

//ADDING the value of ending at the ARRAY
guestlist.push("Haziq");

// Making the Variable for storing a middleindex of our guestlist ARRAY
let middleindex:number = Math.floor(guestlist.length / 2);

//ADDING a new value in middleindex of ARRAY
guestlist.splice(middleindex, 0, "Jaweria");

//print value the of updated list
console.log("print the updated guest list");

//Sending a invitation message to our guest one by one with thier name
guestlist.forEach(invite => console.log(`Salam, ${invite},Would you like to dinner with me`));
