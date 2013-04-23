//alert("JavaScript works!");
// Derick Mullis
// April 18, 2013
// Project 2
// This script is for completion of project 3.  Heroes are at it again.


var allHeroes = function (json) {
	for (var i = 0; i < json.heroes.length; i++) {
		var heroData = json.heroes[i];
		console.log("Hero Name: " + heroData.name + " , Class: " + heroData.job + " , Weapon: " + heroData.typeOfWeapon + " , Level: " + heroData.level); 
	};
};

allHeroes(json); 