//creer un tableau et voir sa taille 
let  notes= ["Pierre", "Paul", "Jacques"];
console.log(notes.length);
notes[5]="Naoussi"
console.log(notes.length);

//trier un tableau
// la fonction to sort() permet de trier un tableau
let courses = ["Pierre", "Paul", "Jacques"];

courses[5] = "Naoussi"; // Ajout d'un élément à l'index 5
console.log("Avant le tri :", courses); // Affiche le tableau avant le tri
 
courses.sort(); // Trie le tableau
console.log("Après le tri :", courses); // Affiche le tableau après le tri

// lire un tableau en utilisant les boucles 
function lire1(tab)
{
var chaines = "Le tableau contient :"
for(var i=0; i<tab.length; i++)
chaines += "\n" + i + " -> " + tab[i];
return chaines;
}
a