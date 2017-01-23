



// JAVASCRIPT PART 3 notes //





// .1 Understanding Boolean Vaules.//
//we modifed the welcomeToBooleans function so that it returns true instead of false.//
function welcomeToBooleans(num1, num2) {

  var welcomeToBooleans = (6>2);


return (6>2); // its TRUE 6 is greater than 2. //








//.2 Comparison with the Equality Operator == it is less strict than ===.
//testEqual(10).. Basically testEqual value is (10) does not equal 12. //
// Using 4 as an example the == can let you get away with 4=="4" or 4==4//
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}





/*. 3 Comparison with the Strict Equality Operator === . it is more strict than ==. //

//testEqual(7)... Basically testEqual value is (7) does equal 7. Using 4 as an example the === is more strict "4"=="4" or 4==4 are true. If it was 4==="4"  it would be false.

3 === 3   // true
3 === '3' // false */

function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(7);





/*.4 Comparison with the Inequality Operator !=  the inequality operator means not equal so (99 != 9)
1 != 2      // true
1 != "1"    // false
1 != '1'    // false
1 != true   // false
0 != false  // false */

function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}


testNotEqual(9);





/*.5 Comparison with the Strict Inequality Operator. The strict inequality operator (!==) is the opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. Strict inequality will not convert data types.

3 !== 3   // false
3 !== '3' // true
4 !== 3   // true */

function testStrictNotEqual(val) {     // Val is 10. //

  if (val!==17) {

   return "Not Equal";
 }
 return "Equal";
}





/* .6 Comparison with the Greater Than Operator
The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, greater than operator will convert data types of values while comparing. data type examples "4" 4, one a string, one is a number.

5 > 3   // true
 7 > '3' // true
 2 > 3   // false
'1' > 9  // false

*/

function testGreaterThan(val) {
  if (val>100) {  // because value is 200, 100 will be returned. //
    return "Over 100";
  }

  if (val>10) {  // wont return because value is 200. if it was under 100
    return "Over 10"; // it would work. //
  }

  return "10 or Under"; // wont return because value is 200. 10 or under would work.
}

// Change this value to test
testGreaterThan(200);







/* .7 Comparison with the Greater Than Or Equal To Operator
The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, greater than or equal to operator will convert data types while comparing.

 6  >=  6  // true
 7  >= '3' // true
 2  >=  3  // false
'7' >=  9  // false
*/

function testGreaterOrEqual(val) {
  if (val>= 20) {  // Becuase the function value is 28, "20 or Over"; will return.//
  return "20 or Over";
}

  if (val >= 10) {  // If the function value was over 10 but under 20  this would return.//
    return "10 or Over";
  }

  return "9 or Under"; // If the function value was under 9 or under this would return.//
}

// Change this value to test
testGreaterOrEqual(28);





/*.8 Comparison with the Less Than Operator
The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, less than operator converts data types while comparing.

2 < 5  // true
'3' < 7  // true
  5 < 5  // false
  3 < 2  // false
'8' < 4  // false

*/

function testLessThan(val) {
  if (val < 25) {  // value is over 25 will not return.//
    return "Under 25";
  }

  if (val < 55 ) {  // Value is over 55 will not return.//
    return "Under 55";
  }

  return "55 or Over"; // Value is over 55 will return.//
}

// Change this value to test
testLessThan(70);



/* .9 Comparison with the Less Than Or Equal To Operator.

The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, less than or equal to converts data types.

4 <= 5  // true
'7' <= 7  // true
  5 <= 5  // true
  3 <= 2  // false
'8' <= 4  // false
*/

function testLessOrEqual(val) {
  if (val <= 12) {  // will not return because value is more than 12.//
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Will return beacuse value is less or = to 24.//
    return "Smaller Than or Equal to 24";
  }

  return "25 or More"; // will not return because value is less than 25//
}

// Change this value to test
testLessOrEqual(13);



/* 10 Comparisons with the Logical And Operator

Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

if (num > 5 && num < 10) {    example
  return "Yes";
}
return "No"; */

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25 ) { //value is 30. less than 50 but more
     {              			 // than 25 so yes is returned.//

      return "Yes";
    }
  }

  // Only change code above this line
  return "No"; //no would be returned if the value was 300 as a example//
}

// Change this value to test
testLogicalAnd(30);




/*.11 Comparisons with the Logical Or Operator.
The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

if (num > 10 || num < 5) {
  return "No";
}
return "Yes"; */

function testLogicalOr(val) {

  if (val > 20 || val < 10) {
    return "Outside"; // not returned value is not over 20 or less than 					 10. returned if over 20 or less than 10. //
  }
  return "Inside"; 	// returned because value(11) is greater than 10 but 	               //less than 20. //
}

// Change this value to test
testLogicalOr(11);





/*. 12 Introducing Else Statements
When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}

*/

function testElse(val) {
  var result = "";

  if (val > 5) {
    result = "Bigger than 5"; // returned because value is bigger than 5

  } else {

    (val <= 5)               // not returned because value is not smaller than 5
    result = "5 or Smaller";
  }


  return result;
}

// Change this value to test
testElse(10);




/* .13 Introducing Else If Statements
If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
*/

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10"; // not returned value is less than 10.//

  } else

  if (val < 5) {
    return "Smaller than 5"; // not returned value is bigger than 5.//

  } else

  return "Between 5 and 10"; // returned value is between 5 and 10.//
}

testElseIf(7);












/* 14  Logical Order in If Else Statements

Order is important in if, else if statements.

The loop is executed from top to bottom so you will want to be careful of what statement comes first.

function foo(x) {
  if (x < 1) {
    return "Less than one"; // populated first, since first in statment//
  } else if (x < 2) {
    return "Less than two"; // poulated second, since second in statment
  } else {					// if switched outputes reversed. //
    return "Greater than or equal to two";
  }
} */
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// we switched the order of the return statments because return <10 was first and it wouldn't pass <5. Because our value is less than 10 <5 beocmes irrelevant and no need to return "less than 5". so <5 had to be first so we could pass both return statments.//
orderMyLogic(7);






/* .15 Chaining If Else Statements

if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}   */


function testSize(num) {

  if (num < 5)
  {
    return "Tiny";
  }
  else if (num <10)
  {
    return "Small";
  }
  else if (num < 15)
  {
    return "Medium";
  }
  else if ( num <20 ) {
    return "Large";
  }

  else if (num >= 20) {
    return "Huge";
  }
}

  // Watch your bracket placment its crucial they are in the right spot to run the code.//

  testSize(23);








/*.16 Golf Code (CHALLENGE). 1
"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!" */


function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole-in-one!";

  } else if (strokes <= par -2) {
    return "Eagle";

  } else if (strokes == par -1 ){
    return "Birdie";

  } else if (par == strokes) {
    return "Par";

  } else if (strokes === par + 1){
    return "Bogey";

  } else if (strokes == par +2){
    return "Double Bogey";

  } else if (strokes >= par+3){
    return "Go Home!";
  }


  // Only change code above this line
}

// Change these values to test
golfScore(4, 8);





/*.17 Truncate a string.// is slicing a string to take certain portions and make a new string.

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else if (num <=3) {
  return str.slice(0, num) + "...";
  } else {
  return str.slice(0, (num-3)) + "...";
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 11); */






//.18   Confirm the Ending

function confirmEnding(str, target) {

 return str.substr(-target.length)===target;
//

}

confirmEnding("Bastian", "n"); //









/*.19 Selecting from many options with Switch Statements

If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which defines various possible values. Statements are executed from the first matched case value until a break is encountered. For help look at switch statments on MDN for
*/

function caseInSwitch(val) {
  var answer = " ";
  // // currently the value is 1 it retuns alpha, if it was 2 it would return beta, 3 would be gamma, 4 would be delta.
  switch (val) {
    case 1:
    answer = ("alpha");
    break;
    case 2:
    answer = ("beta");
    break;
    case 3:
    answer = ("gamma");
    break;
    case 4:
    answer = ("delta");
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);











/*.20 Use Conditional Logic with If Statements
If statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions because they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

// Example
function ourFunction(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}
*/


function trueOrFalse(wasThatTrue) {

  if (wasThatTrue) {

    return "Yes, that was true";
  }
  return "No, that was false";


  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);







/*.21 Adding a default option in Switch statements
In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain. */

function switchOfStuff(val) {
  var answer = " ";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = ("apple"); // the value is "a" so apple is returned//
      break;
      case "b":
      answer = ("bird"); // value is not "b" so bird is not returned//
      break;
      case "c":
      answer =("cat"); // value is not "c" so cat is not returned//
      break;

      default:
     answer = ("stuff"); //value "stuff" would return if value was not                                  "a","b","c"
   }

   return answer;
 }

// Change this value to test
switchOfStuff("a");







/*.22 Multiple Identical Options in Switch Statements.
If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

1-3 - "Low"
4-6 - "Mid"
7-9 - "High"  */

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer=("Low"); // if value was 1,2,3 "Low" is returned.
      break;
      case 4:
      case 5:
      case 6:
      answer=("Mid"); // if value was 4,5,6 "Mid is returned.
      break;
      case 7:
      case 8:
      case 9:
      answer=("High"); // if value was 7,8,9 "High is returned.
    }


  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1); //value is 1 so "low" is returned//







/*.23 Replacing If Else Chains with Switch

If you have many options to choose from, a switch statement can be easier to write than many chained if/if else statements. The following:

///////// THE CHAINED IF STATMENT IS CHANGED TO AN SWITCH STATMENT ///////////

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
chainToSwitch(7);
*/
                   // Example above was changed to example below////

                   function chainToSwitch(val) {
                    var answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
    answer = ("Marley"); // Not returned "bob" is not the value.//
    break;

    case 42:
    answer = ("The Answer"); // Not returned 42 is not the value.//
    break;

    case 1:
    answer = ("There is no #1"); // Not returned 1 is not the value.//
    break;

    case 99:
    answer = ("Missed me by this much!"); // Not returned value is not 99.//
    break;

    case 7:
    answer = ("Ate Nine"); // Returned value is 7 so "Ate Nine" is returned/
    break;

    case "John":
      answer = (""); // Not returned "John is not the value".//
      break;

      case 156:
      answer = (""); // Not returned 156 is not the value.//
      break;

      default:
        answer = ("default"); // Not returned. case values other than those                                   listed would return default.//

      }
  // Only change code above this line
  return answer;
}

// Change this value to test
chainToSwitch(7); // "Ate Nine" is returned sine the value is 7










/*.24

A common anti-pattern is to use an if/else statement to do a comparison and then return true/false:

function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
Since === returns true or false, we can simply return the result of the comparison:

function isEqual(a,b) {
  return a === b;
}
*/

function isLess(a, b) {
  // Fix this code
    return a === b || a < b; // this function should worl without the|| a<b;   statement //
  }

// Change these values to test
isLess(10, 15);






/*.25 Return Early Pattern for Functions

When a return statement is reached, the execution of the current function stops and control returns to the calling location.

Example

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
The above outputs "Hello" to the console, returns "World", but "byebye" is never output, because the function exits at the return statement. */

function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0 ) {
    return undefined;

  }


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(-2,2);




/*26 Counting Cards.

In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change  Cards
+1  2, 3, 4, 5, 6
0 7, 8, 9
-1  10, 'J', 'Q', 'K', 'A'

You will write a card counting function. It will receive a card parameter and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative. The current count and the player's decision ("Bet" or "Hold") should be separated by a single space. */

var count = 0;//basically a big if statment we made easier with switch statment

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count ++;
    break;
    case 7:
    case 8:
    case 9:
    count += 0;
    break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count --;
    break;

  }
  if (count > 0) {
   return count + " Bet";
 } else if (count <=0) {
  return count + " Hold";
}

  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');











/* 27  Build JavaScript Objects


You may have heard the term object before.

Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

Here's a sample object:

var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.  Object, Property, Method, */

var myDog = {
  "name": "Pete",
  "legs": 4,
  "tails": 1,
  "friends": ["Nick"]







/* 28 Accessing Objects Properties with the Dot Operator

There are two ways to access the properties of an object: the dot operator (.) and bracket notation ([]), similar to an array.

The dot operator is what you use when you know the name of the property you're trying to access ahead of time.

Here is a sample of using the dot operator (.) to read an object property:

 var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2

myObj. prop1;
myObj. prop2;   is how you access the data from your OBJ properties.
*/

// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Or testObj.hat; == "ballcap"
var shirtValue = testObj.shirt;  // Or testObj.shirt; == "jersey"













/*.29 Accessing Objects Properties with Variables */

////////////////////////////////////////////////////////////////

var myBoard = "snowBoard";      //example//
var myObj ={
  snowBoard: "lets ride boards",
}
myObj[myBoard];// returns "lets ride boards"

///////////////////////////////////////////////////////////

var nick = "pete";   //example//
var dog = {
  pete: "Pete is a fun loving Yorkie",
  bell: "lab",
  grahm: "wolf",

}
 var types = dog[nick];
 alert(types); // or console.log(types); returns "Pete is a fun loving Yorkie" as well//

/////////////////////////////////////////////////////////////

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];  // Change this Line












/*.30 Updating Object Properties

After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update. */

example

var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

/*Since he's a particularly happy dog, let's change his name to "Happy Camper". Here's how we update his object's name property:

ourDog.name = "Happy Camper"; or

ourDog["name"] = "Happy Camper";

Now when we evaluate ourDog.name, instead of getting "Camper", we'll get his new name, "Happy Camper". */

var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Spot, Sparky, Rover"]
};

// Only change code below this line.

myDog.name ="Happy Coder";





/*.31 Add New Properties to a JavaScript Object

You can add new properties to existing JavaScript objects the same way you would modify them.

Here's how we would add a "bark" property to ourDog:

ourDog.bark = "bow-wow";

or

ourDog["bark"] = "bow-wow";

Now when we evaluate ourDog.bark, we'll get his bark, "bow-wow".5 */


 // Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Spot, Sparky, Rover"]
};

// Only change code below this line.
myDog.bark = "woof";









/*.32 Delete Properties from a JavaScript Object.

We can also delete properties from objects like this:

delete ourDog.bark;

Instructions
Delete the "tails" property from myDog. You may use either dot or bracket notation. */

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Spot, Sparky, Rover"],
  "bark": "woof"
};

// Only change code below this line. I deleted the tails property from my object.

delete myDog.tails;








/*.33 Using Objects for Lookups.

Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:

var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"
Instructions
Convert the switch statement into a lookup table called lookup. Use it to lookup val and assign the associated string to the result variable.

*/ function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
      "alpha":"Adams",
      "bravo": "Boston",
      "charlie":"Chicago",
      "delta":"Denver",
      "echo": "Easy",
      "foxtrot": "Frank",
  };

      result = lookup[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("echo");











/*.34 Testing Objects for Properties

Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(value) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

Example */

var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false

Instructions
Modify the function checkObj to test myObj for checkProp. If the property is found, return that property's value. If not, return "Not Found".


// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  console.log(checkProp);
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  }

  return "Not Found";

}
checkObj("pet");

// Test your code by modifying these values
checkObj("pet");












/*.35 Introducing JavaScript Object Notation JSON


JavaScript Object Notation or JSON uses the format of JavaScript Objects to store data. JSON is flexible because it allows for Data Structures with arbitrary combinations of strings, numbers, booleans, arrays, and objects.

Here is an example of a JSON object:

var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [
      "CD",
      "Cassette",
      "LP" ],
    "gold": true
  }
];
This is an array of objects and the object has various pieces of metadata about an album. It also has a nested formats array. Additional album records could be added to the top level array.

Note
You will need a comma in between objects in JSON objects with more than one object in the array. */

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  },
  {

   "artist":"Distrubed",
   "title":"PurpleRain",
   "release_year": 2015,
   "formats": [
    "CD",
    "tape",
    "Itunes",
    "soundcloud",
],
  }
];











/*.36 Accessing Nested Objects in JSON

The properties and sub-properties of JSON objects can be accessed by chaining together the dot or bracket notation.

Here is a nested JSON Object:

var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": {
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
}
ourStorage.cabinet["top drawer"].folder2;  // "secrets"
ourStorage.desk.drawer; // "stapler" */


/ Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

// Only change code below this line

var gloveBoxContents = myStorage.car.inside["glove box"];















/*. 37 Accessing Nested Arrays in JSON

As we have seen in earlier examples, JSON objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.

Here is an example of how to access a nested array:

var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"

Instructions
Retrieve the second tree from the variable myPlants using object dot and array bracket notation. */


// Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line











/*.38 Record Collection

You are given a JSON object representing (a small part of) your record collection. Each album is identified by a unique id number and has several properties. Not all albums have complete information.

Write a function which takes an id, a property (prop), and a value.

For the given id in collection:

If value is non-blank (value !== "") and prop is not "tracks" then update or set the value for the prop.

If the prop is "tracks" and value is non-blank, push the value onto the end of the tracks array.

If "tracks" is non-existent before you update it, create an empty array before pushing a track to it.

If value is blank, delete that prop.

Always return the entire collection object.

Note
Don't forget to use bracket notation when accessing object properties with variables */

// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};
// Keep a copy of the collection for tests


// Only change code below this line
function updateRecords(id, prop, value) {
if (prop === "tracks" && value !== "") {
   if(collection[id][prop]) {
    collection[id][prop].push(value);
   }
   else {
    collection[id][prop]=[value];
   }
  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }


  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");










/*.39 Iterate with JavaScript For Loops

You can run the same code multiple times by using a loop.

The most common type of JavaScript loop is called a "for loop" because it runs "for" a specific number of times.

For loops are declared with three optional expressions separated by semicolons:

for ([initialization]; [condition]; [final-expression])

The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When condition is false at the start of the iteration, the loop will stop executing. This means if condition starts as false, your loop will never execute.

The final-expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final-expression.


////////////////////////////////////
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
ourArray will now contain [0,1,2,3,4].
//////////////////////////////////////////
Instructions
Use a for loop to work to push the values 1 through 5 onto myArray. */


// Example////////////////////////
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Example////////////////////////

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 1; i < 6; i++);{  // i = 1 beacause were pushing 1-5 on to the array not 0-5. if it was 0-5 i would equal =0 instead of 1.


myArray.push(i);
}











/*.40 Iterate Odd Numbers With a For Loop


For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.

We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2. */

var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
ourArray will now contain [0,2,4,6,8].

/*Let's change our initialization so we can count by odd numbers.

Instructions
Push the odd numbers from 1 through 9 to myArray using a for loop. */

// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
//our loop now counts odds by 2 since i=1 and not 0.if i=0 it would count evens //
for (var i = 1; i < 10; i +=2 ) {
  myArray.push(i);
} ourArray will now contain [1,3,5,7,9] //our loop now counts odds by 2 since i=1 and not 0.if i=0 it would count evens and would be [0,2,4,6,8] like above example. //










/*42 Count Backwards With a For Loop


A for loop can also count backwards, so long as we can define the right conditions.

In order to count backwards by twos, we'll need to change our initialization, condition, and final-expression.

We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2. */

var ourArray = [];
for (var i=10; i > 0; i-=2) {
  ourArray.push(i);
}
ourArray will now contain [10,8,6,4,2].

/*Let's change our initialization and final-expression so we can count backward by twos by odd numbers.

Instructions
Push the odd numbers from 9 through 1 to myArray using a for loop.*/

// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 9; i > 0; i -= 2 ) {
  myArray.push(i);

}
myArray will now contain [9,7,5,3,1]. //instead of 1,3,5,7,9] since our for loop is set up to have our array be backwards.//







/*.41 Iterate Through an Array with a For Loop


A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console:

var arr = [10,9,8,7,6];
for (var i=0; i < arr.length; i++) {
   console.log(arr[i]);
}
Remember that Arrays have zero-based numbering, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops when i is at length - 1.

Instructions
Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total. */

/ Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;

for(var i = 0; i < myArr.length; i++){
  total += myArr[i];
}








/*. 42 Nesting For Loops

If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.

Instructions
Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr */


function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for(var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr[i].length; j++){
      product *= arr[i][j];
    }
  }


  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);







/*.43 Iterate with JavaScript While Loops

You can run the same code multiple times by using a loop.

Another type of JavaScript loop is called a "while loop", because it runs "while" a specified condition is true and stops once that condition is no longer true.

var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
Let's try getting a while loop to work by pushing values to an array.

Instructions
Push the numbers 0 through 4 to myArray using a while loop. */

var myArray = [];
var i = 0;
// Only change code below this line.
while (i < 5){
myArray.push(i);
i++;
}









/*.44 Profile Lookup

We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes firstName and a property (prop) as arguments has been pre-written for you.

The function should check if firstName is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If firstName does not correspond to any contacts then return "No such contact"

If prop does not correspond to any valid properties then return "No such property" */


//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line

  for(var i = 0; i < contacts.length; i++) {
  if(contacts[i].firstName === firstName) {
    if(contacts[i].hasOwnProperty(prop)){
      return contacts[i][prop];

    } else {
      return "No such property";

    }
  }
}
return "No such contact";



// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");








/*.45 Repeat a string repeat a string

Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code. // Global string objects.//
