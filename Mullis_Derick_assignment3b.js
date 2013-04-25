//alert("JavaScript works!");
// Derick Mullis
// April 25, 2013
// Project 3
// This script is for completion of project 3.  Heroes are at it again.


//Object Data

var weaponAxe = {
	"type": 		"axe",											//property: sting
	"ability": 		"cleave",
	"baseDamage": 	15,												//property: number
	"cleaveDamage": 10,
	"isSharp": 		true,											//property: boolean
	"Damage": function(damage){				 						//method: accessor								
		var totalDamage = this.baseDamage + this.cleaveDamage		//math
		return totalDamage											//return number
	}
	"setBaseDamage": function(30)									//argument: number
};

output.log(weaponAxe)

	
var weaponBow = {
	"type":		 	"bow",
	"ability": 		"strike",
	"baseDamage": 	10,
	"strikeDamage": 10,
	"isSharp": 		true,
	"Damage": function(){											//method: function
		var totalDamage = this.baseDamage + this.strikeDamage
			var sharpMultiplier = {
				if ( this.isSharp === true ) {						//nested loop
					baseDamage = totalDamage + 5;
				} else {
					baseDamage = totaldamage + 0;
				}
				return totalDamage
			}
	}
};
	
	

//JSON Function
var allHeroes = function (json) {
	for (var i = 0; i < json.heroes.length; i++) {													//for loop
		var heroData = json.heroes[i];
		console.log("A quick scan around the camp reveals a few notable heroes. " + heroData.name + ", the " + heroData.job + ", with only their " + heroData.typeOfWeapon + ", with a seasoned ranking of " + heroData.level); 
	};
};

	
	
	