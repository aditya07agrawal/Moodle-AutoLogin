try{
	let ques = document.getElementById("login").innerText.split(/\s+/);

	let ans;
	if(ques[7] == "enter"){
		if(ques[8] == "first")
			ans = +ques[10];
		else
			ans = +ques[12];
	}
	else{
		if(ques[7] == "add")
			ans = +ques[8] + +ques[10];
		else(ques[7] == "subtract")
			ans = +ques[8] - +ques[10];
	}

	document.getElementById("valuepkg3").value = ans;
	document.getElementById("loginbtn").click();
} catch(err){
	alert(err.message);
}