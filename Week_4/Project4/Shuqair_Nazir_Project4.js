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
	}
	
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
	
	}
	
	return{
	
		"phoneNum" : phoneNum,
		"emailCheck" : emailCheck
	
	}
	
}


var stringLib = new myStringLib();

//Phone number test
var num1 = "123-445-7890";
console.log(stringLib.phoneNum(num1));
// end test

//email address test
var address = "one@two.com";
console.log(stringLib.emailCheck(address));
// end test


