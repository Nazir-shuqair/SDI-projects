//Nazir Shuqair
//June 26th, 2013
//SDI 0613
//Project 4
//GitHub repository link:
//https://github.com/g67277/SDI-projects.git

//String Functions Library 
var myStringLib = function(){

	//Phone number check (still needs work)
	var phoneNum = function(entry){
	
		var check1 = parseInt(entry.substring(0, entry.indexOf("-")));
		var check2 = parseInt(entry.substring(entry.indexOf("-") + 1, entry.lastIndexOf("-")));
		var check3 = parseInt(entry.substring(entry.lastIndexOf("-"), entry.length));
		
		if((entry[3] == "-" && entry[7] == "-") && entry.length == 12){
		
			if((!isNaN(check1) && !isNaN(check2)) && !isNaN(check3)){
			
				var result = true;
			}
		}else{
			
			var result = false;
		}
		return result;
	}// end phone number check
	
	//Email Address Check
	var emailCheck = function(entry){
	
		var com = entry.substring(entry.indexOf(".") + 1, entry.length);
		var c1 = "@";
		var c2 = ".";
	
		if((entry.indexOf(c1) > -1 && entry.indexOf(c2) > -1) && com == "com"){
			
			var result = true;
		}else{
		
			var result = false;
		}
	
	return result;
	
	}// end email address check
	
	//URL Check
	var uRL = function(entry){
	
		var check = entry.substring(0, entry.indexOf("p") + 1);
		var c1 = "http://";
		var c2 = "https://";
		
		if((entry.indexOf(c1) > -1 || entry.indexOf(c2) > -1) && check == "http"){
		
			var result = true;
		}else{
			var result = false;
		}
	
		return result;
	}// end URL check
	
	//Title-Case function
	var tCase = function(entry){
		
		var lower = entry.toLowerCase();
		var words = lower.split(" ");
		var wordArray = Array();
		for(var c = 0; c < words.length; c++){
		
			t = words[c];
			t = t.charAt(0).toUpperCase() + t.substring(1);
			wordArray.push(t);
		}
		
		return wordArray.join(" ");

	}// end Title-Case 
	
	//Separator Replacement (needs more research)
	var separatorReplacement = function(entry, current, replacement){
	

	}// end Separator Replacement
	
	//Library returns
	return{
	
		"phoneNum" : phoneNum,
		"emailCheck" : emailCheck,
		"uRL" : uRL,
		"tCase" : tCase
	
	}//end library returns
	
}// String lib end

//Number Functions Library 
var myNumberLib = function(){

	//Decimal Points function
	var decimalPoints = function(num, dPoints){
	
		num = num.toFixed(dPoints);
		
		return num;
	}// decimal points end
	
	//Library returns
	return {
	
		"decimalPoints" : decimalPoints
	
	}// end returns

} // Number lib end


var stringLib = new myStringLib();
var numberLib = new myNumberLib();

//Phone number test
var num1 = "123-445-7890";
console.log(stringLib.phoneNum(num1));
// end test

//email address test
var address = "one@two.com";
console.log(stringLib.emailCheck(address));
// end test

//URL test
var urlAdd = "google.https://com";
console.log(stringLib.uRL(urlAdd));
//end test

//title-case test
var sentance = "is this working?";
console.log(stringLib.tCase(sentance));
//end test

//Separator Replacement test
var sepStr = "one, two, three, four";
var currentSep = ",";
var replacmentSep = "/";

// end test


//Decimal Points test
var testCost = 146.3334458;
var points = 1;
console.log(numberLib.decimalPoints(testCost, points));
// end test

