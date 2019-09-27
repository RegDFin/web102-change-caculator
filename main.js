

var moneyDue;
var moneyReceived;
var remainingChange;
var change;

function makeChange(){

    let changeDue = (moneyReceived - moneyDue)*100; 
    change =changeDue/100;
    document.getElementById("customerChange").innerHTML = change.toFixed(2);
    
    let dollars = changeDue/100;
    remainingChange = changeDue%100;
    changeDue = remainingChange;
    document.getElementById("dollars").innerHTML = Math.floor(dollars); 
    
    let quarters = remainingChange/25;
    remainingChange = remainingChange%25; 
    document.getElementById("quarters").innerHTML = Math.floor(quarters); 

    let dimes = remainingChange/10;
    dimes = Math.floor(dimes);
    remainingChange = remainingChange%10; 
    document.getElementById("dimes").innerHTML = dimes.toFixed(0);  

   let nickels = (remainingChange/5);
   remainingChange = remainingChange%5; 
   document.getElementById("nickels").innerHTML = Math.floor(nickels); 
   let pennies = remainingChange   
   document.getElementById("pennies").innerHTML = Math.trunc(pennies);
            }         

function submitButton(){
   moneyDue = document.getElementById("amount-due").value; 
   moneyReceived = document.getElementById("amount-received").value; 
   return makeChange(); 
}                                                    

