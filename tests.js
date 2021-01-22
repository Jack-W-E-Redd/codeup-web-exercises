// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Exercise 1:
//friday loops
// function putOnCoat() {
//     let isCold = true;
//     let counter = 0;
//     while (isCold){
//         console.log("I need a coat!");
//         counter++;
//         if(counter === 10)
//         {
//             isCold = false;
//             takeOffCoat()
//         }
//     }
// }



// // //Create a function that makes your $100k Tesla speed until the police are looking

 function speedingTesla() {
     let keepGoing = true;
     let counter = 0;
     while (keepGoing) {
         console.log("Need for speed!");
         counter++;
         if(counter === 100);
         {
             keepGoing = false;
         }
     }
 }



for (var i =0; i < 100; i++) {
    if (i % 3 == 0) {
        console.log("fizz" + i);
    } else if (i % 5 == 0) {
        console.log("buzz" + i);
    } else if ((i % 3 == 0) && (i % 5 == 0));
    {
        console.log("fizzbuzz" );
    }
}







