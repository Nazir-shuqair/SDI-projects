//Nazir Shuqair
//June 5th, 2013
//SDI 0613
// Project 1

var lCDRName = "James";
var company1 = "Alpha";
var company2 = "Bravo";
var company3 = "Charlie";
var isTankDestroyer = false;
var tankCount = 4;
var minimumRequirement = 3;
var squadCount = 12;
var battleReady = true;
var attackLocation = ["High ground", "Across River", "Enemy Flank", "Head on"];
var speed = 25;

//This is done
var specialty = function (isDestroyer){

	console.log("LCDR " + lCDRName + ":  Are the hostile Tanks designated \"Tank Destroyer\"? " );
	
	if(isDestroyer){
		console.log("This will be a high risk mission. Based on the answer of the next couple of question, a decision will be made on whether it’s a go.");
	}
	else {
		console.log("No, mission parameters are as expected.  We can proceed.");  
	};
	
}

//Needs work
var readiness = function (isReady, minimum){

	var ready;
	
	if(minimum > 3 && isReady)
		
		ready = true;
	else 
		ready = false;
		
return ready;		

}



//Number function
var calRateOfSuccess = function (tanks){

	var hostileEstimate = [2, 3, 4, 5, 6];
	var c = 0;
	
	while (c < hostileEstimate.length){
		
		var percent = (tanks / hostileEstimate[c]) * 100;
		if(percent > 100){
			console.log("We outnumber the enemy tanks if they only have " + hostileEstimate[c]);
		} else if (tanks == hostileEstimate[c]){
			console.log("The hostiles match our numbers if they have " + hostileEstimate[c] + " tanks on the battlefield");
		}else {
		
			console.log("If " + hostileEstimate[c] + " hostile tanks are present, the success rate is at " + percent + " %");
		}
		
		c++;
	}
	
	return percent;

}


var backup = function (cDR, unit) {

	var additionalT = 6;
	
	var output = "Commander " + cDR + " will assign " + unit + " Company, an addition of " + additionalT + " troops to back up the main force";
	
	return output;

};

var eTA = function (location, speedRate){

	var distance = [100, 80, 120, 40];
	
	
	for(var c = 0; c < location.length; c++){
		var time = distance[c] / speedRate;
		console.log("The distance to " + location[c] + " is " + distance[c] + " miles and will take " + time + "hr to reach the destination at a speed of 25mph");  
			// for(var e = 20; e < distance[c]; e+= 20){
// 				var remaining = distance[c] - e;
// 				console.log("We have covered " + e + " miles and have " + remaining + " miles to reach destination");
// 			}
		console.log(" ");
	}

return distance;
};

console.log("Commander " + lCDRName + " enters the room and mission discussion is underway.  Mission transcript is as follows: ");
console.log(" ");

specialty(isTankDestroyer);
console.log(" ");

console.log("LCDR " + lCDRName + ":  Where do we stand on troops and armor readiness?");
if (readiness(battleReady, tankCount)){
	console.log("We are battle ready and exceed the minimum requirement of " + minimumRequirement + " Tanks");
}
else
	console.log("We are either short on tanks, or based on a true or false, our battle readiness is at" + readiness(battleReady, tankCount));
console.log(" ");
	
console.log("LCDR " + lCDRName + ":  Whats the input from the recon team and how do we stack up");
console.log("Hostiles are estimated to have anywhere from 2 to 6 tanks. The list below describes our rate of success: " );
console.log(" ");
console.log(calRateOfSuccess(tankCount) + " % is the worst case senario");


var backupPlan = backup(lCDRName, company3);
console.log("In which case, " + backupPlan);
console.log(" ");

console.log("Command:  below are the locations to consider, along with their distance and the time it would take our tanks to reach them."); 
console.log(eTA(attackLocation, speed) + " Using the information provided.  Head on is the closest location to start the attack, while the flank is more than 3 hours farther."  );

