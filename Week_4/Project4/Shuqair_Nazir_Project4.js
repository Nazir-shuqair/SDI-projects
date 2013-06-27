//Nazir Shuqair
//June 26th, 2013
//SDI 0613
//Project 4
//GitHub repository link:
//https://github.com/g67277/SDI-projects.git

//String Functions Library
var myStringLib = function(){

	//Phone number check
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
	
	return{
	
		"phoneNum" : phoneNum
	
	}
	
}

var stringLib = new myStringLib();

var num1 = "123-445-7890";
console.log(stringLib.phoneNum(num1));