//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let a = "Bisma Muqeed";

//Step show in lower case:
console.log(a.toLowerCase());

//step show in upper case:
console.log(a.toUpperCase());

//step show in tittle case:
console.log(a.replace (/\b\w/g, (char) => char.toUpperCase()));
