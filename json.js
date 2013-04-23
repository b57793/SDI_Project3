





var json = {
	"heroes": {
		"hero1": {
			"name": 			"Tehkuv",
			"job": 				"ranger",
			"hasWeapon": 		true,
			"typeOfWeapon": 	"bow",
			"level": 			31	
		},
		"hero2": {
			"name": 			"Vaus",
			"job": 				"warrior",
			"hasWeapon": 		true,
			"typeOfWeapon": 	"axe",
			"level": 			27	
		},	
		"hero3": {
			"name": 			"Teleria",
			"job": 				"monk",
			"hasWeapon": 		false,
			"typeOfWeapon": 	"none",
			"level": 			36	
		}
	}
}; 

//var allHeroes = function (json) {
//};

//allHeroes(json);



for (var key in json.heroes) {
	var hero = json.heroes[key];
	//hero.job
};