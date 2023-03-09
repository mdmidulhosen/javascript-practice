var today = new Date();
var day = today.getDay();
var hour = today.getHours();
var mins = today.getMinutes();
var sec = today.getSeconds();
var year = today.getFullYear();
var date = today.getDate();
var month = today.getMonth();


// Find day 


// console.log(hour);

function dayIs(){
    if(day == 1){
        console.logo("Monday");
    }else if(day == 2){
        console.log("Tuesday");
    }else if(day == 3){
        console.log("Webnesday");
    }else if(day == 4){
        console.log("Thursday");
    }else if(day ==  5){
        console.log("Friday");
    }else if(day == 6){
        console.log("Saturday");
    }else if(day == 7){
        console.log("Sunday");
    }
}

dayIs();

console.log("Time Is =",hour,":",mins,":",sec)
console.log("Date is",date,".",month,".",year )
