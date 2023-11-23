function myFunction() {
  document.getElementById("demo").style.fontSize = "25px"; 
  document.getElementById("demo").style.color = "red";
  document.getElementById("demo").style.backgroundColor = "yellow";        
}


window.onload = () => {
    let button = document.querySelector("#btn");
  
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {

    	let height = parseInt(document.querySelector("#height").value);		/* Getting input from user into height variable.Input is string so typecasting is necessary. */
  
    	let weight = parseInt(document.querySelector("#weight").value);		/* Getting input from user into weight variable. Input is string so typecasting is necessary.*/
  
    	let result = document.querySelector("#result");				// Checking the user providing a proper
    										// value or not
    	if (height === "" || isNaN(height)) 
    		result.innerHTML = "大佬~~你唔可以空左個「高度」喎~~比嗰高泥先啦大佬";
	else if (weight === "" || isNaN(weight)) 
        	result.innerHTML = "大佬~~你唔可以空左個「重量」喎~~比嗰體重泥先啦大佬";										
	else {									// If both input is valid, calculate the bmi
        	let bmi = (weight / ((height * height) / 10000)).toFixed(2);	// Fixing upto 2 decimal places 
  
        if (bmi < 18.6) result.innerHTML = `夠鐘食返個tea啦大佬~~你BMI得 <span>${bmi}</span>咋~~`; // Dividing as per the bmi conditions
  	else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = `你都算正常嘅~~BMI都係 <span>${bmi}</span>姐~~`;
        else result.innerHTML =`大佬夠鍾做運動啦!!!BMI有成 <span>${bmi}</span>呀!!!!`;
    }
}