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
	
	//Fuzzy Match function (need to check if the return is correct)
	var fuzzyMatch = function(num1, num2, num3){
	
		var check1;
		var check2;
		if(num1 < num2){
			check1 = (num1 / num2) * 100;
			if(check1 >= num3){
				var result = true;
			}else{
				var result = false;
			}
		}else{
			check2 = (num2 / num1) * 100;
			if(check2 >= num3){
				var result = true;
			}else{
				var result = false;
			}
		}
		
		return result;
	}// Fuzzy match end
	
	//Hours or Days difference function
	var timeDiff = function(date1, date2, choice){
		
		choice = choice.toLowerCase();
		date1 = new Date(date1);
		date2 = new Date(date2);
		var hour = 60 * 60 * 1000;
		var day = hour * 24;
		var difference = Math.floor(date1.getTime() - date2.getTime());
		
		if(difference < 0){
			difference = difference * -1;
		}
		
		if(choice == "days"){
			
			var result = difference / day;
		}else{
			
			var result = difference / hour;
		}
	
		return result;
	}//hours or days difference end
	
	//String conversion function
	var stringConv = function (entry){
	
		entry = parseInt(entry);
		
		return entry;
	
	}//String conversion end
	
		
	//Library returns
	return {
	
		"decimalPoints" : decimalPoints,
		"fuzzyMatch" : fuzzyMatch,
		"timeDiff" : timeDiff,
		"stringConv" : stringConv
	
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

//Fuzzy Match test
var a = 4, b = 10, c = 50;
console.log(numberLib.fuzzyMatch(a,b,c));
// end test

//Hours or Days difference test
var dateOne = "3 June 2013";
var dateTwo = "5 June 2014";
var DOrH = "days"
console.log(numberLib.timeDiff(dateOne,dateTwo,DOrH));
// end test


//String conversion test
var number = "12367456";

console.log(numberLib.stringConv(number));
// end test







