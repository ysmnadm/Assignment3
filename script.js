/*======================================

Assign3-1

=======================================*/

//Question1 

/*
var favoriteFilm = ["Selma", "Malcom X", "The constant gardener", "Soul Food", "Menace II Society"];
window.console.log(favoriteFilm[1]);
*/
//Question2

/*
var movies = [];
movies[0] = "Selma";
movies[1] = "Malcom X";
movies[2] = "The constant gardener";
movies[3] = "Soul Food";
movies[4] = "Menace II Society";
window.console.log(movies[0]);
*/

//Question3

/*
var movies = [];
movies[0] = "Selma";
movies[1] = "Malcom X";
movies[2] = "The constant gardener";
movies[3] = "Soul Food";
movies[4] = "Menace II Society";
movies.push("E.T. Room");
window.console.log(movies.length);

//Question4

var movies = [];
movies[0] = "Selma";
movies[1] = "Malcom X";
movies[2] = "The constant gardener";
movies[3] = "Soul Food";
movies[4] = "Menace II Society";
window.console.log("Before delete: " +movies);
delete movies[0];
window.console.log("After delete: " +movies);
*/
//Question5

/*
var movies = [];
movies[0] = "Selma";
movies[1] = "Malcom X";
movies[2] = "The constant gardener";
movies[3] = "Soul Food";
movies[4] = "Menace II Society";
movies[5] = "Liberty Heights";
movies[6] = "E.T.";
for(var i = 0; i < movies.length; i++){
    
window.console.log(movies[i]);
}
*/

//Question6

/*
var movies = [];
movies[0] = "Selma";
movies[1] = "Malcom X";
movies[2] = "The constant gardener";
movies[3] = "Soul Food";
movies[4] = "Menace II Society";
movies[5] = "Liberty Heights";
movies[6] = "E.T.";

for(index in movies){
    window.console.log(movies[index]);
}

*/
// Question7

/*
var movies = [];
movies[0] = "Selma";
movies[1] = "Malcom X";
movies[2] = "The constant gardener";
movies[3] = "Soul Food";
movies[4] = "Menace II Society";
movies[5] = "Liberty Heights";
movies[6] = "E.T.";

for(index in movies){
    window.console.log(movies.sort());
}
*/

// Question8

/*
var i, j;
window.console.log("Movies I Like:");
window.console.log(" "); 
var favoriteFilm = [];
favoriteMovie[0] = "Selma";
favoriteMovie[1] = "Malcom X";
favoriteMovie[2] = "The constant gardener";
favoriteMovie[3] = "Soul Food";
favoriteMovie[4] = "Menace II Society";
favoriteMovie[5] = "Liberty Heights";
favoriteMovie[6] = "E.T.";
window.console.log("  ");
for (i = 0; i < favoriteFilm.length; i++) {
    window.console.log(favoriteFilm[i]);
}
window.console.log("  ");

window.console.log("Movies I regret watching:\n");
window.console.log("    ");
var leastfavoriteFilm = [];
leastfavoriteFilm[0] = "Dr Dolittle";
leastfavoriteFilm[1] = "Lord of the Rings";
leastfavoriteFilm[2] = "Soul plane";
for (j = 0; j < leastfavoriteFilm.length; j++) {
    window.console.log(leastfavoriteFilm[j]);
}

*/

//Question9
/*

var favoriteFilm = [];
favoriteFilm[0] = "Selma";
favoriteFilm[1] = "Malcom X";
favoriteFilm[2] = "The constant gardener";
favoriteFilm[3] = "Soul Food";
favoriteFilm[4] = "Menace II Society";
favoriteFilm[5] = "Liberty Heights";
favoriteFilm[6] = "E.T.";

var leastfavoriteFilm = [];
leastfavoriteFilm[0] = "Dr Dolittle";
leastfavoriteFilm[1] = "Lord of the Rings";
leastfavoriteFilm[2] = "Soul plane";

var movies = favoriteFilm.concat(leastfavoriteFilm);
window.console.log("Movies after concatination:\n" + movies);
window.console.log("Movies in reverse order:\n" + movies.reverse());
*/


//Question10

/*
var lastItem = movies[movies.length - 1];
window.console.log("The last item in the after reverse order is: " + lastItem);


//Question11

var firstItem = movies[0];
window.console.log("The first item in the array after the reverse order is: " + firstItem);
*/

//Question12

//Question13 

//Question14

//Question15

// Question16
/*
var i;
var film = [["Sound of Music", 1], ["Annie", 2], ["Wizzard of Oz", 3], ["Grease", 4], ["Lion King", 5]];
var filmName = film.filter(function (item) {
    return typeof item === "string";
}
    );
for (i = 0; i <= filmName.length;  i++) {
    window.console.log(filmName[i][0]);
}
*/

/*
var i;
var film = [["Sound of Music", 1], ["Annie", 2], ["Wizzard of Oz", 3], ["Grease", 4], ["Lion King", 5]];
for (i = 0; i < film.length; i++) {
	window.console.log(film[i][0]);
}
*/

//Practice with Functions

//Question1

/*
var displayMessage = (function (message) {
    window.console.log(message);
}('Hello'));
*/

//Question2

/*
(function calculate(num1, num2) {
    window.console.log(num1 % num2);
}(5, 3));
*/

/*/Question3

/
var i;
var showEmployee = function () {
        var employees =  ["ZAK", "JESSICA", "MARK", "FRED"];
        return function (showEmployee) {
    return showEmployee (typeof "string");
        };
} ();
showEmployee();

for (i = 0; i <= showEmployee.length; i++) {
    window.console.log("Employees: \n" + showEmployee[i]);
}
*/

// Rock Paper & Scissors 

/*
    POSSIBLE OUTCOME:
    
    1. Rock destroys scissors.
    2. Scissors cut paper.
    3. Paper covers rock.
*/

//=====================================================================================

/*
var option1;
var option2;

var userChoice = prompt("Enter rock, scissors or paper as your choice:");
var computerChoice = Math.random();

// Assume the random number is between 0 to 1.00

if (computerChoice <= 0.33) {
    computerChoice = "rock";
} else if (computerChoice >= 0.34 && computerChoice <= 0.66) {
    computerChoice = "scissors";
} else {
    computerChoice = "paper";
}

option1 = userOption;
option2 = computerChoice;

function compare(option1, option2) {
    if (option1 === option2) {
        return prompt("Tie!");
    }
    if (option1 === "rock") {
        if (option2 === "scissors") {
            return prompt("rock wins!");
        } else {
            return prompt("paper wins!");
        }
    }
    if (option1 === "scissors") {
        if (option2 === "rock") {
            return prompt("rock wins!");
        } else {
            return prompt("scissors wins!");
        }
    }
    if (option1 === "paper") {
        if (option2 === "rock") {
            return prompt("paper wins!");
        } else {
            return prompt("scissors wins!");
        }
    } else if ((option1 && option2) !== "rock" || "scissors" || "paper") {
        return prompt("Enter rock, scissors, paper only!");
    }
}
window.console.log(compare(option1, option2));
*/


// Basic Calculator



//Death By JavaScript:

// Question1 

/*
function makeAlphabetical(str) { 
    var arr = str.split(''),
        alpha = arr.sort().join('').replace(/\s+/g, '');
    return alpha;
}
var enterString = prompt("Enter the string!");
window.console.log(makeAlphabetical(enterString));

*/
// Question2



//function capitalizeFirstLetter(str) {
 //   return str.replace(/\w\S*/g, function (txt) {
 //       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
 //   });
//}

//var enterString = "Enter the desired string: ";
//var desiredOutput = prompt(enterString);
//var desiredReult = capitalizeFirstLetter(desiredOutput);
//window.prompt("Entered String: " + enterString);
//window.prompt("Output string: " + desiredReult);

//Question 3
/*
function getVowels(str) {
    var vowelsCount = 0;
    var i;

  //turn the input into a string
    var string = str.toString();

  //loop through the string
    for (i = 0; i <= string.length - 1; i++) {

  //if a vowel, add to vowel count
        if (string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || string.charAt(i) === "o" || string.charAt(i) === "u") {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
window.console.log(getVowels("The quick brown fox"));

//window.alert(getVowels(vowelsCount));
*/

/*
                   
//Question4
function generateid(len) {  
    var text = "";  
    var char_list = "ABCDEFGHIJKLMNOPQuestionRSTUVWXYZabcdefghijklmop"; 
    var char_length = prompt(char_list);
    for (var i=0; i < len; i++ )  
{    
text += char_length.charAt(Math.floor(Math.random() * char_length.length));  
}  
return text;  
}
console.log(generateid(8));  

*/

// Longest String

var countries = ["Australia", "Germany", "United States of America"];
var i;
function largestString (countries) {
    var largest = 0;
    for (i = 0; i < countries.length; i++) {
        if (countries[i].length > largest) {
            largest = countries[i].length;
        }
    }
}
window.console.log(largest);




