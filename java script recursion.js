//------------------if-else--------------------
function Leapyear(year) {
  if (year % 400 == 0) {
    console.log("leap year");
  } else if (year % 4 == 0) {
    console.log("leap year");
  } else {
    console.log("not a leap year");
  }
}
//----------------- sol-1----------------------
function ageprice(age){
  if(age <= 12){
    console.log("he is a childre :10$")
  }
  else if( age >= 13 && age <= 17) {
    console.log("he is an adult:15$")
  }
  else{
    console.log("he is a teenager:20$")
  }
}
//---------------switch sol2----------------------
function ageprice(age) {
  switch (true) {
    case (age <= 12):
      console.log("he is a child: $10");
      break;
    case (age >= 13 && age <= 17):
      console.log("he is a teenager: $15");
      break;
    case (age >= 18):
      console.log("he is an adult: $20");
      break;
    default:
      console.log("Invalid age");
      break;
  }
}
//--------------------recursion------------------------
function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
//------------------------------------------------------
function power(base, expon) {
  if (expon === 0) {
    return 1;
  }
  if (expon === 1) {
    return base;
  }
  return base * power(base, expon - 1);
}







