// Create a for loop to go through each number from 1 to 100
for (var i=1; i <= 100; i++)
{
    // Create if statement for both numbers that are multiplied by 3 and 5 which start at 15
    if (i % 15 === 0)
        // console.log 'FizzBuzz' for number that passes through for 3 AND 5
        console.log("FizzBuzz");
    // Create else if statement for muliples of 3
    else if (i % 3 === 0)
        // console.log 'Fizz' for those multiplied by 3
        console.log("Fizz");
    // Create same for multiples of 5
    else if (i % 5 === 0)
        // console.log 'Buzz' for those multiplied by 5
        console.log("Buzz");
    // Create else statement to pass all other numbers through that doesn't fit other statments
    else
        // console.log the numbers for above
        console.log(i);
}
