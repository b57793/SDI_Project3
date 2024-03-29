//alert("JavaScript works!");
// Derick Mullis
// April 25, 2013
// Project 3
// This script is for completion of project 3.  Heroes are at it again.



//Global Variables
var monster = "Baron Nashor"
var potions = "health"
var amountOfPotions = 5
var weaponsReady = true


//Object Data
var loot = {
	"type": ["Gold", "Emeralds", "Rubies", "Diamonds"],
	"available": true,
//	"value": [5, 10, 15, 20],    ~Failed attempt @ object property
//	"mergedValue": {"type":0,"value":0}  ~Failed attempt @ object property
};

var weaponAxe = {
	"type": 		"axe",												//property: sting
	"ability": 		"cleave",
	"baseDamage": 	40,													//property: number
	"cleaveDamage": 10,	
	"durability": 10,
	"isSharp": 		true,												//property: boolean
	"getDamage": function(hasWeapon){				 					//method: accessor								
		var totalDamage = this.baseDamage + this.cleaveDamage			//math
			var totalDamage =  this.baseDamage + this.cleaveDamage 		//method: procedure
			if  ( this.isSharp === true && hasWeapon === true ) {								
				totalDamage += 5;
			} 						
			else {
				totalDamage += 0;
			}
			return totalDamage											//return number
		},
		"newDamage": function(newDamage){								//method:  mutator
			if ( this.durability <= 0 ) {	
				this.isSharp = false
			};
	}							
};




//JSON Function
var allHeroes = function (json) {										//argument: property
	for (var i = 0; i < json.heroes.length; i++) {						//for loop
		var heroData = json.heroes[i];
		console.log("A quick scan around the camp reveals a few notable heroes. " + heroData.name + ", the " + heroData.job + ", with " + heroData.typeOfWeapon + " in hand and a seasoned ranking of " + heroData.level); 
	};
};




//Procedure
var letsGoAdventuring = function(feelingAdventurous) {
	if ( feelingAdventurous === "yes" ) {
		console.log( "The heroes appear adventurous and start checking their gear." );		//output
	} else {
		console.log( "The check their health and potions before heading out." );
	};
};




// Boolean Function
var readyCheck = function(health, numberOfPotions) {
	if ( health === 100 && numberOfPotions >= 5 ) {											//conditional
		console.log( "The ready check is complete and they are good to go." )
		if ( weaponsReady === true ) {														//nested conditional
			console.log ( "'Our weapons are ready and yearn for battle', they proclaim!" );
		} else {
			console.log ( "Well actually, we need to condition our weapons before heading out." );
		};
	} else {
		console.log( "We should rest up to 100 health and make sure we have at least " + amountOfPotions+ " " + potions + " potions before we head out." );
	};
		if ( health === 100 && numberOfPotions === 5 ) {
			return (true);																	//return boolean
		} else {
			return (false);
		};
};



//String Function
var baronAppears = function(travelDistance, monster) {
	var monsterFight = console.log( "After leaving camp and traveling " + travelDistance + ". They encounter " + monster + "!" );
	return monsterFight;																	//return string
};




//Number Function
var baronFight = function(baronHP) {
		while (baronHP >= 0) {																//while loop
		
			console.log( monster + "'s health is " + baronHP);
			baronHP = baronHP - weaponAxe.getDamage(json.heroes[1].hasWeapon)													//math & boolean argument
		
			if (baronHP > 0) {
				console.log( monster + " has been attacked by " + json.heroes[1].name + " with his " + weaponAxe.type + ".");
			} else {
				console.log( monster + " has been slain.");
			};
		};
		var BaronLife = baronHP
		return BaronLife		
};




//Array Function
var chests = function(argArray, number) {
	var chestTypes = argArray.length;														//local variable
	var timedTreasureHunt = number - chestTypes
		argArray.push("Sapphire")
	for ( var time = 1; time < timedTreasureHunt; time ++) {
	var timeRemain = (timedTreasureHunt - time);
		console.log("Look around for treasure, " + timeRemain + " minutes remain before we have to depart.");	
	};
	for ( var i= 0;  i < chestTypes; i++) {
		console.log("Huzzah! Look at all the loot! " + argArray[i] + " chests for everyone!");
	};
	var updatedArray = argArray
	return updatedArray																		//return array
};




//Main Code
allHeroes(json)  																		//JSON Data
letsGoAdventuring("yes") 																//Procedure
var status = readyCheck(100, 5);
var monsterFight = baronAppears("a fortnight", "Baron Nashor");							//argument: string
var baronLife = baronFight(165);														//argument: number
var updatedChests = chests (loot.type, 10);  											//argument: array
		
