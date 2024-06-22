var guestlist = ["Hajra", "Farheen", "Hayam", "Hamza",];
//guestlist.forEach(invite => console.log(`i am inviting ${invite} to dinner`));
var dontcome = guestlist[1];
console.log(dontcome, "is don't come");
guestlist.splice(1, 2, "Manahil");
guestlist.forEach(function (list) { return console.log("Assalam-u-aalaikum, ".concat(list, " would you like dinner with me?")); });
