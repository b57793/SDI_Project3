//alert("JavaScript works!");
// Derick Mullis
// April 25, 2013
// Project 3
// This script is for completion of project 3.  Heroes are at it again.


//Global Variables
monster = "Baron Nashor"
monsterHP = 500

//Object Data

var loot = {
	"type": [gold, emeralds, diamonds],
	"available": true
};

var availableWeapons = {
	"weapons": = (weaponAxe.name + " , " + weaponBow.name)
		console.log(availableWeapons) 	

var weaponAxe = {
	"type": 		"axe",											//property: sting
	"ability": 		"cleave",
	"baseDamage": 	15,													//property: number
	"cleaveDamage": 10,	
	"durability": 10,
	"isSharp": 		true,												//property: boolean
	"getDamage": function(){				 							//method: accessor								
		var totalDamage = this.baseDamage + this.cleaveDamage			//math
			var totalDamage =  this.baseDamage + this.cleaveDamage 		//local variables
			if  ( this.isSharp === true ) {								
				totalDamage += 5;
			} 						
			else {
				totalDamage += 0;
			}
			return totalDamage										//return number
		},
		"newDamage": function(newDamage){							//method:  mutator
			if ( this.durability <= 0 ) {	
				this.isSharp = false
			};
	}							
};
	
var weaponBow = {
	"type":		 	"bow",
	"ability": 		"strike",
	"baseDamage": 	20,
	"strikeDamage": 10,
	"isSharp": 		true,
	"durability": 10,
	"getDamage": function(){											//method: function
		var totalDamage =  this.baseDamage + this.strikeDamage 			//local variables
			if  ( this.isSharp === true ) {								
				totalDamage += 5;
			} 						
			else {
				totalDamage += 0;
			}
			return totalDamage
		},
		"newDamage": function(newDamage){							//method:  mutator
			if ( this.durability <= 0 ) {	
				this.isSharp = false
			};
		}
};
	
	

//JSON Function
var allHeroes = function (json) {
	for (var i = 0; i < json.heroes.length; i++) {													//for loop
		var heroData = json.heroes[i];
		console.log("A quick scan around the camp reveals a few notable heroes. " + heroData.name + ", the " + heroData.job + ", with only their " + heroData.typeOfWeapon + ", with a seasoned ranking of " + heroData.level); 
	};
};


//Main Code
allHeroes(json);
console.log( weaponAxe.getDamage() );
console.log( weaponBow.getDamage() );
availableWeapons
	