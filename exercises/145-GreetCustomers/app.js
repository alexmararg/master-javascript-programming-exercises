let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let greeting = '';
  // your code here;
  let cli=false;
  greeting="Welcome! Is this your first time?";
  for (var o in customerData) {
    if (o===firstName && customerData[o]["visits"]===1) {
      greeting="Welcome back, "+firstName+"! We're glad you liked us the first time!";
    } else if(o===firstName && customerData[o]["visits"]>1){
      greeting="Welcome back, "+firstName+"! So glad to see you again!";
    } 
  }
  return greeting;
}

console.log(greetCustomer('Joe')); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
