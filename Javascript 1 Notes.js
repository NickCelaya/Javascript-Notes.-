



// JAVASCRIPT PART 2//

// Below are titles and examples of DevMountain's pre course work refer to it for help when needed.//




// 1.Declare String Variables //

var myFirstName = ("Nick");
var myLastName = ("Celaya");

myFirstName + myLastName; // Comes to be Nick Celaya //



//.2 Escaping Literal Quotes in Strings//

var string = "Nick said, \"I love to code\".";


/*.3 Escape Sequences in Strings

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	new line
\r	carriage return
\t	tab
\b	backspace
\f	form feed

*/

var myStr= ("\\ \t \t \r \n");




//.4 Quoting Strings with Single Quotes.// // Notice the single & double quotes.//

var myStr = '<a href=http://www.example.com" target="_blank">Link</a>';



//.5 Concatenating Strings with Plus Operator.//

var myStr = "This is the start. " + "This is the end.";



//.6 Concatenating Strings with the Plus Equals Operator.//

	var myStr = "This is the first sentence. ";

 	myStr += "This is the second sentence.";



//.7 Constructing Strings with Variables.//

 var myName = "Nick";
	var myStr = "My name is " + myName + "and I am swell!";


//.8 Appending Variables to Strings.//

var someAdjective = "learning magic";
var myStr = "Learning to code is ";
myStr += someAdjective; // == Learning to code learning magic. //


//.9 Find the Length of a String.//

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length; //"Lovelace"; equals 8//


//.10 Use Bracket Notation to Find the First Character in a String.//
// K is the answer. It's the third index of "NICK". //
var name = "";
var nameLetters = "NICK";
name = nameLetters [3];


//.11 Understand String Immutability.//

var myStr = "Jello World";

myStr[0] = "H"; // cant replace "J with H. have to change myStr's whole value. Example below.//
myStr = "Hello World";




//.12 Use Bracket Notation to Find the Nth Character in a String.//
//. V in var lastname "lovelace" is in the 2nd spot.//

var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];





//.13 Use Bracket Notation to Find the Last Character in a String.//

var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1]; // == a //

//.Use Bracket Notation to Find the NthtoLast Character in a String.//
//. c is the answer.//
var lastName = "Lovelace";
var LetterOfLastName = lastName[lastName.length -2];

// Another Example of using Bracket Notation to find characters in a string.// // The answer to -15 is y in "accuracy".//
var Gun = "Accuracy International";
var letters = Gun[Gun.length -15];








//.14 Word Blanks. //
// wordBlanks("dog", "big", "ran", "quickly");//

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";


  result = "My "+myAdjective+" "+myNoun+" "+myVerb+" "+myAdverb+".";

}




//.15 Where is Waldo.// // Google String.indexOf if need help.//
function findWaldo(str) {
  var waldoPosition;
  str=(str);
  waldoPosition = str.indexOf("Waldo")

  return waldoPosition;
}

// Another example of .indexOf //
var nickCelaya = ("Hey man focus and do well in this course okay?");

nickCelaya.indexOf("do");






//.16 Store Multiple Values in one Variable using JavaScript Arrays.//
var myArray = ["Nick", 27];








//.17 Nest one Array within Another Array.//
var myArray = [["Hello", "how"], ["are", "you"] ];









//.18 Access Array Data with Indexes.//
var myArray = [1,2,3];
var myData = myArray [0]; //.The answer is 1. you practice this all the time.//








//.19 Modify Array Data With Indexes.//
// var myArray [1,2,3]; now becomes [3,2,3,]; //
var myArray = [1,2,3];
myArray[0] = 3;











//.20 Access MultiDimensional Arrays With Indexes.//
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[2][1]; // The answer is 8. 2nd array 1st number.//







//.21 Manipulate Arrays With push. Push adds elements to end of Array.//
// myArray now equals ["John", 23], ["cat", 2] ["dog", 3];
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);






//.22 Manipulate Arrays With pop. Pop removes elements from the end of ARRAY//
var nick = [1,2,3,4,5,6,];
nick.pop(6); // the array nick now reads[1,2,3,4,5,].//







//.23 Manipulate Arrays With shift .//

// .Shift removes the first element of the array.//
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();









//.24//. Unshift adds elements to the beginning of th array.//
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["paul",35]);









//.25 Shopping list exercise. I created 5 nested arrays in one array.//
var myList = [["Milk", 1], ["Soup", 5], ["Apples", 8], ["Jerky", 2], ["Steak",4], ["Coke", 3]];












//.26 Slasher Flick exercise.// // .Splice removes elements from a index.//  // The example shows that "how" will be removed.//

var nick = ["hey", "how","are", "you"];
nick.splice(1,1);

function slasher(arr, howMany) {
  arr.splice(0, howMany);

  return arr;
}

slasher([1, 2, 3], 2);








//.27 Write Reusable JavaScript with Functions.//
function reusableFunction() {

  console.log("Hi World");
}






//.28 Passing Values to Functions with Arguments.//

//  function with name, replacing function place holders N, I, with values 10,5 to make 15. In console.log I can change the math symbols and place any value names or numbers in it.

 function functionWithArgs(N, I) {
   console.log (N + I); // is 15 since I added 10+ 5 .//

 }

 functionWithArgs (10,5);




//.29 Global Scope and Functions
 // Declare your variable here

var myGlobal =(10);
function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;







//.30 Local Scope and Functions.// Local Scope can only work in the function. the function is between { two curly brackets }.//
function myLocalScope() {
  'use strict';
  var myVar =(0);

  console.log(myVar);
}
myLocalScope();









//.31 Global vs Local Scope in Functions.//
var outerWear = "T-Shirt"; // <----global varible.//

function myOutfit() {

  var outerWear ="sweater"; // <------ Local varible.//

  }







//.32 Return a Value from a Function with Return//
function timesFive (arrgh) {

  return arrgh * 5;









 //.33 Assignment with a Returned Value.//
 var processed = processArg(7); // Made a varible and set it equal to the function with an argument called 7.//








 //.34 Stand in Line.//
 function nextInLine(arr, item) {
  // Your code here
  arr.push(item);

  return arr.shift();  // Change this line
}








//.35 Reverse a String.//
 function reverseString(str) {

  str = str.split("")
  str = str.reverse();
  str = str.join("");


  return str;

}.
