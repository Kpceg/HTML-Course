 // Positive of Negative Homework
 /* var a=parseInt(prompt("Enter the number"))
    if (a>0) {
        document.writeln("The number is positive")
    }
    else {
        if(a<0) {
            document.writeln("The number is negative")
        }
        else {
            document.writeln("The number is Zero. Its neither positive or negative")
        }
    } */
        

// Odd or Even Home Work
 /*   var a=parseInt(prompt("Enter the Number"))
    if (a%2==0) {
        document.writeln("The number is even")
    } else {
        document.writeln("The number is odd")
    }

    */


   // Voter Age Home Work  
 /*    
 var a=parseInt(prompt("Enter the Age of the Voter"))
    if (a>=18) {
        document.writeln("The Voter is Eligible to Vote")
    }
    else {
        document.writeln("The Voter is not eligible to vote")
    }
*/


      // Co-Ordinates

 var x=parseInt(prompt("Please enter the value of X"))
 var y=parseInt(prompt("Please enter the value of Y"))
    if (x>0 && y>0) {
        document.writeln("These co-ordinates lie in 1st quadrant")
    }
    else if (x<0 && y>0) {
        document.writeln("These co-ordinates lie in 2nd quadrant")
    }
    else if (y<0 && x>0) {
        document.writeln("These co-ordinates lie in the 4th quadrant")
    }
    else if (y<0 && x<0){
        document.writeln("These co-ordinates lie in the 3rd quadrant")
    }
    else if (x==0 && y==0) {
        document.writeln(" This is the point of origin")
    }
    else {
        if (x==0) {
            document.writeln("It lies along the X-axis")
        }
        else {
            document.writeln("It lies along the Y-axis")
        }
    }

