function getNumber(num) 
         { 
           var result=document.getElementById("result");
           result.value += num ;
         } 
function solve() 
         { 
             let x = document.getElementById("result").value 
             let y = eval(x) 
             document.getElementById("result").value = y 
         } 
           
         //function that clear the display 
function clr() 
         { 
             document.getElementById("result").value = "" 
         } 