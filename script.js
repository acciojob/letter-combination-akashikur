function letterCombinations(input) {
  //Complete the function
	let table={
		"2":"abc",
		"3":"def",
		"4":"ghi",
		"5":"jkl",
		"6":"mno",
		"7":"pqrs",
		"8":"tuv",
		"9":"wxyz"
	}
	let solution=[];
	function solve(currIndex,calString){
		if(input.length<=currIndex){
			solution.push(calString);
			return;
		}
		let currentChat=input[currIndex];
		for(let i=0;i<table[currentChat].length,i++){
			solve(currIndex+1,calString+table[currentChat])
		}
	} 
	solve(0,"")
}

module.exports = letterCombinations;
