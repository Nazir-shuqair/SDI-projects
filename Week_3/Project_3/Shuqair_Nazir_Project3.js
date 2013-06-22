//Nazir Shuqair
//June 20th, 2013
//SDI 0613
// Project 3
//GitHub repository link:
//https://github.com/g67277/SDI-projects.git

var lCDRName = "James";
var company3 = "\"Charlie\"";
var isTankDestroyer = false;
var isTrained = true;
var type = "Tank Crew"
var yearsOfEX = 5;
var tankCount = 4;
var minimumRequirement = 3;
var battleReady = true;
var attackLocation = ["Enemy Flank", "High ground", "Across River", "Head on	"];

//JSON
var json = {
	
	"hostiles" : [
	
		{"unitNum" : 6, "tankNum" : 2},
		{"unitNum" : 9, "tankNum" : 3},
		{"unitNum" : 12, "tankNum" : 4},
		{"unitNum" : 15, "tankNum" : 5},
		{"unitNum" : 18, "tankNum" : 6}
	]

}// end of json

//Object
var tank = {
	
	"name" : "M1",
	"speed" : [10,15,20,25,30,35],
	"gasCapacity" : 498,
	"mpg" : .60,
	"isReady" : true,
	"ammunition" : {
	
		"type1" : "100mm",
		"type2" : "105mm",
		"type3" : "120mm"
	
	},	
	
	"getRange": function(){//getter
	
		var range = this.gasCapacity * this.mpg;
		return range;
	}, //end getter
	
	"setMPG": function(newMPG){//setter
	
		this.mpg = newMPG;
	}//end setter
	
}// end of tank object

//Procedure function
var specialty = function (isDestroyer){

	console.log("LCDR " + lCDRName + ":  Are the hostile Tanks designated \"Tank Destroyer\"? " );
	
	if(isDestroyer){
		console.log("This will be a high risk mission. Based on the answer of the next couple of question, a decision will be made on whether it’s a go.");
	}
	else {
		console.log("No, mission parameters are as expected.  We can proceed.");  
	};
	
}

//Boolean Function
var readiness = function (isReady, minimum){

	var ready;
	var isAirStrikAvl = true;
	
	if((isReady) || isAirStrikAvl) {
	
		if(minimum > 3){
	
			console.log("We exceed the minimum requirement for an assault, with " + minimum + " Tanks, and based on a true or false, our battle readiness is at: " + isReady + 
			".  Or an Air Strike capability is set to: " + isAirStrikAvl);
		
			ready = true;
		}
	}	
	else{
		console.log("We are either short on tanks, or based on a true or false, our battle readiness is at " + isReady);
		ready = false;
		
	}
	
		
return ready;		

}

//Number function
var calRateOfSuccess = function (tanks){

	var hostileEstimate = [2];
	var c = 0;
	
	while (c < 5){
		
		var percent = Math.round((tanks / hostileEstimate[c]) * 100);
		if(percent > 100){
			var extra = tanks - hostileEstimate[c];
			console.log("We outnumber the enemy tanks by " + extra + " if they only have " + hostileEstimate[c]);
		} else if (tanks == hostileEstimate[c]){
			console.log("The hostiles match our numbers if they have " + hostileEstimate[c] + " tanks on the battlefield");
		}else {
		
			console.log("If " + hostileEstimate[c] + " hostile tanks are present, the success rate is at " + percent + " %");
		}
		
		//Array method
		hostileEstimate.push( hostileEstimate[c] + 1 );
		c++;
	}
	
	return percent;

}

//String function
var backup = function (cDR, unit) {

	var additionalT = 6;
	
	var output = "Commander " + cDR + " will assign " + unit + " Company, an addition of " + additionalT + " troops to back up the main force";
	
	return output;

};

//Array function
var eTA = function (location, speedRate){

	var distance = [120, 100, 80, 40];
	var closeRange = 85;
	var timeArray = [0];
	
	console.log("Command:  Below are the locations to consider, along with their distance and the ETA updates we will receive:");
	console.log("Location:		Distance:");

	for(var c = 0; c < location.length; c++){
		var time = (distance[c] / speedRate);
		var time2 = (distance[c] / speedRate) * 60;
		timeArray[c] = " " + time + "hrs";
		console.log(location[c] + "		" +  distance[c] + " Miles		");
		for(var i = 30; i < time2; i += 30){
			var timelapse = i;
			console.log("ETA: " + timelapse + "mins");
		}
		
	}
	

console.log(" ");
return timeArray;
};

//object return function
var soldier = function(trained, type, years){

	var obj = {
	
		"trained" : trained,
		"type" : type,
		"years" : years,
		"successRate" : "90%"
	}
	return obj;
}

//object argument function
var important = function(object){
	for(var key in object.hostiles){
		console.log("If the enemy has " + json.hostiles[key].unitNum + " unites, then they have " + json.hostiles[key].tankNum + " Tanks.");
	}
}
	

console.log("Commander " + lCDRName + " enters the room and mission discussion is underway.  Mission transcript is as follows: ");
console.log(" ");

specialty(isTankDestroyer);
console.log(" ");

console.log("LCDR " + lCDRName + ":  Where do we stand on troops and armor readiness?");
var battleR = "Readiness is at: " + readiness(battleReady, tankCount);
console.log(battleR);
console.log(tank.name + " readiness is at: " + tank.isReady);
console.log(" ");
	

	
console.log("LCDR " + lCDRName + ":  What's the input from the recon team and how do we stack up");
console.log("Hostiles are estimated to have anywhere from 2 to 6 tanks. The list below describes our rate of success: " );
console.log(" ");
//for(var key in json.hostiles){
//	console.log("If the enemy has " + json.hostiles[key].unitNum + " unites, then they have " + json.hostiles[key].tankNum + " Tanks.");
//}
console.log(important(json));
console.log(" ");	
var rate = calRateOfSuccess(tankCount);
console.log(rate + " % is the worst case senario");



var backupPlan = backup(lCDRName, company3);
console.log("In which case, " + backupPlan);
console.log(" ");

console.log("Command" + lCDRName + " what are our soldiers criteria?");
console.log("Command: Please open the list for complete details: ");
var soldierObj = {

 	"soldier" : soldier(isTrained, type, yearsOfEX)
 
}
console.log(soldierObj.soldier);
console.log(" ");

console.log("Command: Our " + tank.name + " tanks have a range of " + tank.getRange() + " miles");
tank.setMPG(1);
console.log("Command: If we install the latest upgrade, our tank MPG will increase to " + tank.mpg + "mpg and our range will increase to " + tank.getRange() + " miles");


var estimatedArival = eTA(attackLocation, tank.speed[3]);
console.log(estimatedArival + " | The times to the left reflect the ETA(estimated time of arrival) to the list of destinations above, accordingly.");
console.log(" ");




