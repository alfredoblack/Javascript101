

//Lecture: Variables

// var name = "John";

// console.log(name);

// var lastName = "Smith";
// console.log(lastName);

// var age = 26;
// console.log(age);

// var fullAge = true;
// console.log(fullAge);


//Lecture: Variables 2

// var name = "John";
// var age =26 ;

// console.log(name + age);
// console.log(age + age);

// var job, isMarried;

// console.log(job);

// job = 'teacher';
// isMarried = false;

// console.log(name +' is a '+ age +' year old  '+ job  +'. ' + 'Is he married? ' +isMarried +'.');

// age = 'thirty-six';
// job = 'driver';

// console.log(name +' is a '+ age +' year old  '+ job  +'. ' + 'Is he married? ' +isMarried +'.');


// var lastName = prompt('what is the last name?')

// console.log(lastName);

// alert(name +' is a '+ age +' year old  '+ job  +'. ' + 'Is he married? ' +isMarried +'.');


//Lecture: Operators

// var now = 2016;

// var birthYear = now - 26;

// birthYear = now - 26 * 2;
// //2016 - 52
// //1964

// console.log(birthYear);

// var ageJohn = 30;
// var ageMark = 30;

// // ageJohn = ageMark = 3 + 5 * 4 - 6;
// // console.log(ageJohn);


// ageJohn = ageMark = (3 + 5) * 4 - 6;

// ageJohn++;
// ageMark *= 2;

// console.log(ageJohn);
// console.log(ageMark);

////////////////////////////////////////////////////////
//Lecture: If Else Statements

// var name = 'Adriana';
// var age = 29;
// var isMarried = 'yes';

// if (isMarried === 'yes'){
//   //if (false)
//   console.log(name +' is married!');
// } else{
//   console.log(name + ' will hopefully marry soon');
// }

// isMarried = false;
// // if(isMarried){
// //   console.log('yes');
// // } else {
// //   console.log('no');
// // }

// isMarried = true;
// if(isMarried){
//   console.log('yes');
// }
// if (23 === '23'){
//   console.log('something to print');
// }


//Lecture: Booolen logic and Switch

// var age = 31;


// if(age < 20){
//   console.log(' john is a teenager');
// } else if ( age >= 20 || age <30){
//   console.log('john is a young man');
// } else {
//   console.log('john is a man');
// }


// var job = 'teacher';

// job = prompt('what does John do?');

// switch(job){
//   case 'teacher':
//     console.log('John teaches kids');
//     break;
//   case 'diver':
//     console.log(' john drives a cab in london');
//     break;
//   case 'cop':
//     console.log('john helps fight crime');
//     break;
//   default:
//     console.log('john does something else');
// }


var heightFriendOne = 163;
var ageFriendOne = 25;

var heightFriendTwo = 207;
var ageFriendTwo = 35;

var heightFriendThree = 300;
var ageFriendThree = 45;

//score = height + age * 5

var kelly;
var sally;
var jason;

kelly = heightFriendOne + ageFriendOne * 5;
sally = heightFriendTwo + ageFriendTwo * 5;
jason = heightFriendThree+ ageFriendThree * 5;
console.log('kelly ' + kelly);
console.log('sally ' + sally);
console.log('jason ' + jason);

if (kelly > sally && jason){
  console.log('Kelly Wins with a score of ' + kelly);

} else if (sally > kelly && sally > jason) {
  console.log(' Sally wins with a score of ' + sally);

} else if(jason > kelly && sally){
  console.log('Jason wins with a score of ' + jason);
}else{
  console.log('its a tie, they are the same hieght and age')
}









































