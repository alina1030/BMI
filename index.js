var weight = 60;
var height = 1.80;

var BMI;

BMI = weight/(height*height);

console.log("BMI of the person is:",BMI);


if(BMI<18.5){
console.log("Underweight");}

else if(BMI>=18.5&&BMI<=24.9)
console.log("Normal Weight");

else if(BMI>=25.0&&BMI<=29.9)   
     console.log("Overweight");
     
else if(BMI>=30)
    console.log("Obese");

else if(BMI>=30.0&&BMI<=34.9)
    console.log("Obese class 1");

else if(BMI>=35.0&&BMI<=39.9){
    console.log("Obese class 2");}
else
console.log("Obese class 3");
