
function calculateTax(income, expenses) {
  if(income >= expenses){
    let differenc = income-expenses;
    let total = differenc * .2;
    return(total);
  }
  else{
    console.log( "Invalid Input" );

  }
  
}
const call = calculateTax(7000,7000);
console.log(call);


