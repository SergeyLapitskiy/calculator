var numbers = document.getElementsByClassName("number");
var data = document.getElementById("data");
var arifm =  document.getElementsByClassName("arifm");
var result = document.getElementById("result");
var output = document.getElementById("output");


var temp=true;
var operator;
var a="";
var b="";
var res="";

data.disabled=true;
for(var i=0;i<numbers.length;i++){
	numbers[i].addEventListener("click", function(e){
		data.value += e.target.textContent;
		if(temp){
			a += e.target.textContent;
		}
		else{
			b += e.target.textContent
		}
	});
}


for(var i=0;i<arifm.length;i++){
	arifm[i].addEventListener("click", function(e){
		if(temp){
			data.value += e.target.textContent;
			operator = e.target.textContent;
			temp =false;
		}
		
	});
}

result.addEventListener("click", function(){
	//console.log("a="+a+" b="+b);
	console.log(Number(a)+Number(b));
	switch(operator) {
  		case '+':  
  			res =Number(a)+Number(b);
  			 break;
  		case '-':  // if (x === 'value2')
			res =Number(a)-Number(b);
			 break;
		case '*':  // if (x === 'value2')
			res =Number(a)*Number(b);
			 break;
		case '/':  // if (x === 'value2')
			res =Number(a)/Number(b);
			 break;
  		default:
  		break;
}
	output.value =data.value+"="+res;
	data.value="";
	temp = true;
	a="";b="";res="";operator="";
})