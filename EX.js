//La fonction split() en JavaScript permet de diviser une chaîne de caractères en un tableau de sous-chaînes, en fonction d'un séparateur donné. Le séparateur 
// peut être un caractère, une chaîne, ou une expression régulière.

let mots1 = "Bonjour tout le monde".split(" ");
console.log(mots1); // ["Bonjour", "tout", "le", "monde"]

let mot = "merveille";
let lettres = mot.split('');
console.log(lettres); // ["m", "e", "r", "v", "e", "i", "l", "l", "e"]

// fonction reverse()
let tableau = [1, 2, 3, 4, 5];
tableau.reverse();
console.log(tableau); // [5, 4, 3, 2, 1]

// fonction join()
let table = ['a', 'b', 'c'];
let chaine = table.join();
console.log(chaine); // "a,b,c"


function estPalindrome(mot) {
    mot = mot.toLowerCase();              // Convertir le mot en minuscules
    let motInverse = mot.split('').reverse().join(''); // Séparer, inverser et recombiner
    return mot === motInverse;            // Comparer le mot original et inversé
  }
  
  console.log(estPalindrome('Radar'));    // true
  console.log(estPalindrome('Bonjour'));  // false
  