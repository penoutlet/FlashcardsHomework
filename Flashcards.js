
// save inquirer package.
var inquirer = require('inquirer');



// make basic constructor 
var BasicCard = function (front, back) {


	this.front = front;
	this.back = back;
};

var ClozeCard = function(text, cloze){


// prp or method that contains or returns the partial text (the rest of the sentence)
	if (text.indexOf("Who") != -1 && text.indexOf("?") != -1) {
	text =	text.replace("Who", "...");
	text =	text.replace("?", ".");
	

	}
		else if (text.indexOf("What") != -1 && text.indexOf("?") != -1){
	text =	text.replace("What","...");
	text =	text.replace("?", ".");
	
	}


	this.text = text;
	this.cloze = cloze;

};



// quiz constructor to store answers from inquirer.pr.
var quiz = function (answer1,answer2,answer3,answer4, answer5, answer6, answer7, answer8, answer9, answer10){
	
	this.answer1 = answer1;
	this.answer2 = answer2;
	this.answer3 = answer3;
	this.answer4 = answer4;
	this.answer5 = answer5;
	this.answer6 = answer6;
	this.answer7 = answer7;	
	this.answer8 = answer8;
	this.answer9 = answer9;
	this.answer10 = answer10;
};

// fnc to check answers in real time, as quiz is taken.
// BasicCard.prototype.answerCheck = function (quiz1){
// 	if (quiz1.answer1=== Aragorn.back){
// 		console.log("Correct");
		
// 	}
// 	else {
// 		console.log("Incorrect");
	
// 	}

// 	if (quiz1.answer2 === Legolas.back){
// 		console.log("Correct");
// 	}
// 	else {
// 		console.log("Incorrect");
// 	}
// 	if (quiz1.answer3 === Legolas.back){
// 		console.log("Correct");
// 	}
// 	else {
// 		console.log("Incorrect");
// 	}
// 	if (quiz1.answer4 === Legolas.back){
// 		console.log("Correct");
// 	}
// 	else {
// 		console.log("Incorrect");
// 	}
// 	if (quiz1.answer5 === Legolas.back){
// 		console.log("Correct");
// 	}
// 	else {
// 		console.log("Incorrect");
// 	}
// 	if (quiz1.answer6 === Legolas.back){
// 		console.log("Correct");
// 	}
// 	else {
// 		console.log("Incorrect");
// 	}
		
// 	// if (quiz1.answer7 === .back){
// 	// 	console.log("Correct");
// 	// }
// 	// else {
// 	// 	console.log("Incorrect");
// 	// }
	
// 	if (quiz1.answer8 === Legolas.back){
// 		console.log("Correct");
// 	}
// 	else {
// 		console.log("Incorrect");
// 	}
// 	if (quiz1.answer9 === Legolas.back){
// 		console.log("Correct");
// 	}
// 	else {
// 		console.log("Incorrect");
// 	}

// 	if (quiz1.answer10 === Legolas.back){
// 		console.log("Correct");
// 	}
// 	else {
// 		console.log("Incorrect");
// 	}

// 	}
// 	else{

// 	 		mainMenu();
// 			}
// };


// building the quiz.
var Aragorn = new BasicCard ( 
	"Who played strider/Aragorn in the Lord of the Rings Movies?", "Viggo Mortenson"
);

// console.log(Aragorn.front);
// console.log(Aragorn.back);


var Legolas = new BasicCard (
	"Who played Legolas?", "Orlando Bloom"
	);

// console.log(Legolas.front);
// console.log(Legolas.back);

var Gimli = new BasicCard (
 "Who played Gimli?", "John Rhys-Davies"
	 );

// console.log(Gimli.front);
// console.log(Gimli.back);



	
var Ocarina = new BasicCard(
"What was the name of the hit zelda on the N64?", "Ocarina of Time"
	);
// console.log(Ocarina.front);
// console.log(Ocarina.back);


var Majora = new BasicCard(
	"What was the name of its sequel on the same console?", "Majora's Mask"
	);

// console.log(Majora.front);
// console.log(Majora.back);

var WindWaker = new BasicCard(
	"What was the name of the first Gamecube iteration of Zelda? Hint: It used cell-shaded animation style.", "The Windwaker"
	);

// console.log(WindWaker.front);
// console.log(WindWaker.back);

var	SkyWard =  new BasicCard ("What was the name of the second Wii Zelda game, the first in the series featuring flight?", "Skyward Sword");
 
var AgesSeasons = new BasicCard ("What were the names of the dual release Zelda games for the gameboy color?", "Oracle of Ages and Oracle of Seasons");


var BreathoftheWild = new BasicCard ("What was the name of the first Zelda game featuring an Open World?", "Breath of the Wild");

var Twilight = new BasicCard ("What was the name of the second Zelda game for the GameCube, considerably darker than the first for the GameCube?", "Twilight Princess"); 
	
	
var BasicQuizQuestions = function (){


inquirer.prompt([

	{
	name: "Aragorn",
	message: Aragorn.front + "\n----------\n" + "Answer:" 	
	},
	{
	name: "Legolas",
	message: Legolas.front+ "\n----------\n" + "Answer:"
	},
	{
	name: "Gimli",
	message: Gimli.front+ "\n----------\n" + "Answer:"
	},
	{
	name:"Ocarina",
	message:Ocarina.front+ "\n----------\n" + "Answer:"
	},
	{
	name:"Majora",
	message: Majora.front + "\n----------\n" + "Answer:"
	},
	{
	name: "WindWaker",
	message: WindWaker.front + "\n----------\n" + "Answer:"
	},
	{
	name: "Twilight",
	message: Twilight.front + "\n----------\n" + "Answer:"
	},
	{
	name: "Skyward",
	message: SkyWard.front + "\n----------\n" + "Answer:"
	},
	{
	name: "AgesSeasons",
	message: AgesSeasons.front + "\n----------\n" + "Answer:"
	},
	{
	name: "BreathoftheWild",
	message: BreathoftheWild.front + "\n----------\n" + "Answer:"
	}

]).then(function(answers) {
// store user answers.
	var quiz1 = new quiz(

		answers.Aragorn,
		answers.Legolas,
		answers.Gimli,
		answers.Ocarina,
		answers.Majora,
		answers.WindWaker,
		answers.Twilight,
		answers.AgesSeasons,
		answers.Skyward,
		answers.BreathoftheWild
		);

// var quizanswers = [];

// quizanswers.push(
// 		answers.Aragorn, 
// 		answers.Legolas, 		
// 		answers.Gimli,
// 		answers.Ocarina,
// 		answers.Majora,
// 		answers.WindWaker,
// 		answers.Twilight,
// 		answers.AgesSeasons,
// 		answers.Skyward,
// 		answers.BreathoftheWild
// 	);
// console.log(quiz1.answer0);
// for (var i = 0; i < quizanswers.length; i++) {
// console.log(quiz1);
// 		if (quiz1.answer[i] === quizanswers[i]){
// 		console.log("Correct");
		
// 	}
// 	else if ([i] === 10){
// 		mainMenu();
// 	}
// 	else {
// 		console.log("Incorrect");
	
// 		}		

// };


	if (quiz1.answer1=== Aragorn.back){
		console.log("Correct " +  Aragorn.back);
			}
	else {
		console.log("Incorrect " + Aragorn.back);
	
	}

	if (quiz1.answer2 === Legolas.back){
		console.log("Correct " + Legolas.back);
	}
	else {
		console.log("Incorrect " + Legolas.back);
	}
	if (quiz1.answer3 === Gimli.back){
		console.log("Correct " + Gimli.back);
	}
	else {
		console.log("Incorrect " + Gimli.back);
	}
	if (quiz1.answer4 === Ocarina.back){
		console.log("Correct " + Ocarina.back);
	}
	else {
		console.log("Incorrect " + Ocarina.back);
	}
	if (quiz1.answer5 === Majora.back){
		console.log("Correct " + Majora.back);
	}
	else {
		console.log("Incorrect " + Majora.back);
	}
	if (quiz1.answer6 === WindWaker.back){
		console.log("Correct " + WindWaker.back);
			}
	else {
		console.log("Incorrect " +WindWaker.back );
	}
		
	

	if (quiz1.answer7 === Twilight.back) {
		console.log("Correct " + Twilight.back);

	}
	
	else{
		console.log("Incorrect " + Twilight.back);
	}


	if (quiz1.answer8 === AgesSeasons.back) {
		
		console.log("Correct " + AgesSeasons.back);

	}
	
	else{
		console.log("Incorrect " + AgesSeasons.back);
	}


	if (quiz1.answer9 === SkyWard.back) {
		console.log("Correct " + SkyWard.back);	

	}
	
	else{
		console.log("Incorrect " + SkyWard.back);
	}

	if (quiz1.answer10 === BreathoftheWild.back) {
		console.log("Correct " + BreathoftheWild.back);

	}
	
	else{
		console.log("Incorrect " + BreathoftheWild.back + " Returned to Main Menu.");
		mainMenu();
	}

	});

};




// Cloze question creation.

var AragornCloze = new ClozeCard (Aragorn.front, Aragorn.back);
	// console.log("AragornCloze" + AragornCloze.text);


var LegolasCloze = new ClozeCard (Legolas.front, Legolas.back);

var GimliCloze = new ClozeCard (Gimli.front, Gimli.back);

var OcarinaCloze = new ClozeCard (Ocarina.front, Ocarina.back);

var MajoraCloze = new ClozeCard (Majora.front, Majora.back);

var WindWakerCloze = new ClozeCard (WindWaker.front, WindWaker.back);

var TwilightCloze =	new ClozeCard (Twilight.front, Twilight.back);

var	SkywardCloze	=	new ClozeCard (SkyWard.front, SkyWard.back);

var	AgesSeasonsCloze	= new ClozeCard (AgesSeasons.front, AgesSeasons.back);

var	BreathoftheWildCloze = new ClozeCard (BreathoftheWild.front, BreathoftheWild.back);






function ClozeQuizQuestions(){

inquirer.prompt([
{
name: "AragornCloze",
message: AragornCloze.text + "\n----------\n" + "Answer:"
},
{
name: "LegolasCloze",
message: LegolasCloze.text + "\n----------\n" + "Answer:"
} 
,
{
name: "GimliCloze",
message: GimliCloze.text + "\n----------\n" + "Answer:"
}
,
{
name: "OcarinaCloze",
message: OcarinaCloze.text + "\n----------\n" + "Answer:"
},
{
name: "MajoraCloze",
message: MajoraCloze.text + "\n----------\n" + "Answer:"
},
{
name: "TwilightCloze",
message: WindWakerCloze.text + "\n----------\n" + "Answer:"
},
{
name: "TwilightCloze",
message: TwilightCloze.text + "\n----------\n" + "Answer:"
},
{
name: "SkywardCloze",
message: SkywardCloze.text + "\n----------\n" + "Answer:"
},
{
name: "BreathoftheWildCloze",
message: AgesSeasonsCloze.text + "\n----------\n" + "Answer:"
},
{
name: "BreathoftheWildCloze",
message: BreathoftheWildCloze.text + "\n----------\n" + "Answer:"
}




]).then(function(answers){
	var quiz1 = new quiz (

		answers.AragornCloze,
		answers.LegolasCloze,
		answers.GimliCloze,
		answers.OcarinaCloze,
		answers.MajoraCloze,
		answers.WindWakerCloze,
		answers.TwilightCloze,
		answers.AgesSeasonsCloze,
		answers.SkywardCloze,
		answers.BreathoftheWildCloze);


if (quiz1.answer1=== AragornCloze.cloze){
		console.log("Correct " + AragornCloze.cloze);
		
	}
	else {
		console.log("Incorrect " + AragornCloze.cloze);
	
	}

	if (quiz1.answer2 === LegolasCloze.cloze){
		console.log("Correct " + LegolasCloze.cloze);
	}
	else {
		console.log("Incorrect " + LegolasCloze.cloze);
	}
	if (quiz1.answer3 === GimliCloze.cloze){
		console.log("Correct " + GimliCloze.cloze);
	}
	else {
		console.log("Incorrect " + GimliCloze.cloze);
	}
	if (quiz1.answer4 === OcarinaCloze.cloze){
		console.log("Correct " + OcarinaCloze.cloze);
	}
	else {
		console.log("Incorrect " + OcarinaCloze.cloze);
	}
	if (quiz1.answer5 === MajoraCloze.cloze){
		console.log("Correct " + MajoraCloze.cloze);
	}
	else {
		console.log("Incorrect " + MajoraCloze.cloze);
	}
	if (quiz1.answer6 === WindWakerCloze.cloze){
		console.log("Correct " + WindWakerCloze.cloze);
	}
	else {
		console.log("Incorrect" + WindWakerCloze.cloze);
	}
		
	if (quiz1.answer7 === TwilightCloze.cloze){
		console.log("Correct " + TwilightCloze.cloze);
	}
	else {
		console.log("Incorrect" + TwilightCloze.cloze);
	}
	if (quiz1.answer8 === SkywardCloze.cloze){
		console.log("Correct" + SkywardCloze.cloze);
	}
	else {
		console.log("Incorrect" + SkywardCloze.cloze);
	}
	if (quiz1.answer9 === AgesSeasonsCloze.cloze){
		console.log("Correct" + AgesSeasonsCloze.cloze);
	}
	else {
		console.log("Incorrect" + AgesSeasonsCloze.cloze);
	}
		if (quiz1.answer10 === BreathoftheWildCloze.cloze){
		console.log("Correct " + BreathoftheWildCloze.cloze);
	}
	else {
		console.log("Incorrect " + BreathoftheWildCloze.cloze);
	}


	});

};

function mainMenu(){
var quizType = "";
inquirer.prompt([

{
name: "Menu",
message: "Press B to take the BasicCard version of the quiz, or C to take the ClozeCard version."
}

	]).then(function(answers){

		
		console.log(answers.Menu);


	if (answers.Menu=== "c") {
		ClozeQuizQuestions();

	}
	else if (answers.Menu === "b"){
		BasicQuizQuestions();
	}
	else {
		console.log("Please press c or b.")
		mainMenu();
	}
	});
};
mainMenu();

