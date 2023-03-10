function myfunc(bb){
    if(bb === null || bb === undefined || bb.substring(0, 2) === "py"){
        return bb;
    }else{
        return "py"+bb;
    }
}

console.log(myfunc("python"));
console.log(myfunc("thon"));

/*multiply and devide*/

// function multiply(){
//     var first  = document.getElementById('firstNumber').value;
//     var second = document.getElementById('secondNumber').value; 

//      document.getElementById("result").innerHTML = first * second;
// }

// function devide(){
//     var first  = document.getElementById('firstNumber').value;
//     var second = document.getElementById('secondNumber').value; 

//      document.getElementById("result").innerHTML = first / second;
// }

// var today = new Date()
// var crhis = new Date(today.getFullYear())
// console.log(crhis)


/*Find 1st January be a Sunday between a range of years */

// for(year = 2014 ; year <=2050; year++){
//     var today = new Date(year, 0, 1);
//     if(today.getDay() === 0){
//         console.log("1st january is being sunday" + year)
//     }
// }

/*find leap year*/

// var year = 2024/4;
// var my = Number.isInteger(year);

// if(my == true){
//  console.log("Leap year")
// }else{
//     console.log("Not Leap year")
// }


/*The area of a triangle*/

// var side1 = 5;
// var side2 = 6;
// var side3 = 7;

// var s = (side1 + side2 + side3)*2;
// var area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));

// console.log(area);

/*Print a page*/

// function printhere(){
//     print()
// }





/*Current day and time*/

// var today = new Date();
// var day = today.getDay();
// var hour = today.getHours();
// var mins = today.getMinutes();
// var sec = today.getSeconds();
// var year = today.getFullYear();
// var date = today.getDate();
// var month = today.getMonth();


// // Find day 


// // console.log(hour);

// function dayIs(){
//     if(day == 1){
//         console.logo("Monday");
//     }else if(day == 2){
//         console.log("Tuesday");
//     }else if(day == 3){
//         console.log("Webnesday");
//     }else if(day == 4){
//         console.log("Thursday");
//     }else if(day ==  5){
//         console.log("Friday");
//     }else if(day == 6){
//         console.log("Saturday");
//     }else if(day == 7){
//         console.log("Sunday");
//     }
// }

// dayIs();

// console.log("Time Is =",hour,":",mins,":",sec)
// console.log("Date is",date,".",month,".",year )
