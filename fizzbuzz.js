/* Blair
fizzBuzz.js
09/23/26 */

function fizzBuzz (quo) {
    for (let num = 1; num <= quo; num++) {
        if (num % 3 === 0) {
            console.log("fizz");
        } else if (num % 5 === 0) {
            console.log("buzz");
        }
        else {
            console.log(num);
        }
    }
}

fizzBuzz(100);