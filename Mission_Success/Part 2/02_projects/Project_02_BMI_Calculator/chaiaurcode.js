const form = document.querySelector("form");

form.addEventListener("submit" , (e) => 
{
e.preventDefault()

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    const category = document.querySelector("#category");

    if(height === "" || height < 0 || isNaN(height))
    {
        results.innerHTML = `Please Enter a Valid Number`
    }
    else if(weight === "" || weight < 0 || isNaN(weight))
    {
        results.innerHTML = `Please Enter a Valid Number`
    }
    else{
        const bmi = (weight/((height*height) / 10000)).toFixed(2);
        results.innerHTML = `Your BMI is : <span>${bmi}</span>`


        
   // Category Logic Starts Here
    if (bmi < 18.6) {
        category.innerHTML = `You are Under Weight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        category.innerHTML = `You are in the Normal Range`;
    } else {
        category.innerHTML = `You are Overweight`;
    }
  
    }

}) 

