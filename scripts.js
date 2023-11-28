// Ray Arbizu //

var rollCounter = 0;
var point = 0;
var randomNumber1 = 0;
var randomNumber2 = 0;

function roll()
{
    if (rollCounter == 0)
    {
        document.getElementById("turn").innerHTML = "This is the COME OUT Roll";
        rollCounter++;
        rollCount(rollCounter)
    }
    else if (rollCounter > 0)
    {
        document.getElementById("turn").innerHTML = "The point is " + point;
        //document.getElementById("point").innerHTML = "ON";
        rollCount(rollCounter)
    }

    var die1 = document.getElementById('die1');
    var counter1 = 0;
    var interval1 = setInterval(function () {
        randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generate a number between 1 and 6
        die1.src = 'Dice-' + randomNumber1 + '.png';
        
        counter1++;
        if (counter1 > 15) { // Adjust the number for longer/shorter animation
            clearInterval(interval1); // Stop the interval

            // The dice will show the final random number
        }
    }, 200); // 200 milliseconds for each image change

    var die2 = document.getElementById('die2');
    var counter2 = 0;
    var interval2 = setInterval(function () {
        randomNumber2 = Math.floor(Math.random() * 6) + 1; // Generate a number between 1 and 6
        die2.src = 'Dice-' + randomNumber2 + '.png';
        //lastNumber2 = randomNumber2
        counter2++;
        if (counter2 > 15) { // Adjust the number for longer/shorter animation
            clearInterval(interval2); // Stop the interval
            // The die will show the final random number
        }
    }, 200); // 200 milliseconds for each image change

    setTimeout(function() {
        var regex = /\d+/;
        var die1Img = document.getElementById('die1');
        var die2Img = document.getElementById('die2');
        var die1Scr = die1Img.getAttribute('src');
        var die2Scr = die2Img.getAttribute('src');
        var dieOne = die1Scr.match(regex);
        var dieTwo = die2Scr.match(regex);
    
        var die1Value = parseInt(dieOne, 10);
        var die2Value = parseInt(dieTwo, 10);
    
        //document.getElementById("rollCounter").innerHTML = "The roll count is " + rollCounter;
        rollCount(rollCounter)

        if (rollCounter == 1)
        {
            document.getElementById("turn").innerHTML = "This is the COME OUT Roll";
            comeOut(die1Value, die2Value)
        }
        else if (rollCounter > 0)
        {
            var diceSum = die1Value + die2Value;
            hitPoint(die1Value, die2Value)
        }
    }, 4000);
 
}




function comeOut(num1, num2)
{
    var sum =(num1 + num2);

    if ((sum == 7) || (sum == 11))
    {
        document.getElementById("status").innerHTML = "Winner!<br>You rolled a " + sum;
        rollCounter = 0;
    }
    else if ((sum == 2) || (sum==3) || (sum==12))
    {
        document.getElementById("status").innerHTML = "CRAPS! You loose!<br>You rolled a " + sum;
        rollCounter = 0;
        rollCount(rollCounter)
    }
    else if ((sum == 4) || (sum == 5) || (sum == 6) || (sum == 8) || (sum == 9) || (sum == 10))
    {
        document.getElementById("turn").innerHTML = "The point is " + sum;
        point = sum;
        //document.getElementById("point").innerHTML = "ON";
        document.getElementById("status").innerHTML = "The point is established";
        rollCounter++;
        rollCount(rollCounter)
    }
}

function hitPoint(num1, num2)
{
    
    var sum =(num1 + num2);

    //document.getElementById("point").innerHTML = point;
    //document.getElementById("turn").innerHTML = "The Point is " + point;

    if ((sum == point))
    {
        document.getElementById("status").innerHTML = "Winner!<br>You hit the point before rolling a 7.";
        rollCounter = 0;
        rollCount(rollCounter)
    }
    else if (sum == 7)
    {
        document.getElementById("status").innerHTML = "7 OUT, LINE AWAY!<br>PASS LINE bet looses.";
        document.getElementById("turn").innerHTML = "The point is 0";
        rollCounter = 0;
        rollCount(rollCounter)
    }
    else{
        document.getElementById("status").innerHTML = "You rolled, " + sum + " roll again.";
        rollCounter++;
        rollCount(rollCounter)
    }

} 

function rollCount(roll)
{
    document.getElementById("rollCounter").innerHTML = "The roll count is " + roll;
}