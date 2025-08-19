    /* var a=prompt("Enter the name")
    document.writeln(a)
    confirm("Do you want to continue")
    alert ("sample") */

 /*  var a=prompt("Enter the Number")
    if(a>0) {
        document.writeln("The given number is postive")
    }
    else if (a<0) {
        document.writeln("The given number negative")
    }
    else {
        document.writeln("The given number is zero. Its neither positive or negative")
    }
*/

/* var a=prompt("Enter the number")
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

    /*    var a=parseInt(prompt("Enter the value for A"))
        var b=parseInt(prompt("Enter the value for B"))
        var c=parseInt(prompt("Enter the value for C"))
        if ((a>b) && (a>c)) {
            document.writeln("A is greatest")
        }
        else if(b>c) {
            document.writeln("B is the greatest")
        }
        else {
            document.writeln("C is the greatest")
        }

        */

 /*       var a=parseInt(prompt("Enter the value for A"))
        var b=parseInt(prompt("Enter the value for B"))
        var c=prompt("Enter what operation you want to perform")
        switch(c) {
            case '1':
                d=a+b
                break
            case 'sub':
                d=a-b
                break
            case '*':
                d=a*b
                break
            case 'd':
                d=a/b
                break
            default:
                document.writeln("This operation is invalid")
        }

        document.writeln(d)

        */

 /*       var a=5
        while(a>0) {
            document.writeln(a)
            a=a-1
        }

        */

/*        var a=parseInt(prompt("Enter the no"))
        for(var b=1;b<=12;b++)
        {
            document.writeln(`${a} * ${b} = ${a*b} <br>`)
        }
    */

 /*       for(row=1;row<=3;row++) {
            for(col=1;col<=3;col++){
                document.writeln(row*col)
            }
            document.writeln("<br>")
        }

        */

   /*     function add(a,b) {
            var c=a+b
            return c
        }

        var d=add(10,20)
        document.writeln("The sum of the given two number are "+d)

        */

 /*       function power(a,b) {
            if(b==0) {
                return 1
            }
            else if (b==1) {
                return a
            }
            else {
                return a*power(a,b-1)
            }
        }

        */

  /*      var student= {
            name: "ABC",
            age: 30,
            address: {
                Town: "Palani",
                Street: "Appar Theru",
                District: "Dindigul"
            },
            welcome: function() {
                document.writeln("Welcome " + this.name + "<br> <br>")
            },
        }

        student.welcome()
        student["name"] = "Prashanth"
        student.welcome()

        */

       

     /*    var astudent= {
            name: "ABC",
            age: 30,
            Gender: "Male"
        }

        document.writeln(Object.keys(student) + "<br>")
        document.writeln(Object.values(student) + "<br>")
        document.writeln(Object.entries(student) + "<br>")
        */

   /*     var a= {
                name: "ABC",
                age: 30,
                Gender: "Male"
            }
            for(const i in a){
                document.writeln(`${i} = ${a[i]} <br>`)
            }

            */


  /*      if (true) {
            var x=10
            let y=20
        }

        console.log(x)
        console.log(y)

        */

    /*
        var a=parseInt(prompt("Enter the value of n"))
        if (a>1) {
            for (let i=a;i>=1;i--) {
                document.writeln(i + " ")
            }
        } 
        else if (a<0) {
            for (let i=a;i<=1;i++) {
                document.writeln(i + " ")
            }
        }
        else {
            document.writeln(a + " " + 1)
        }

        */


 /*       var a=parseInt(prompt("Enter the value for N"))
        var b=a
        while(b>=2) {
            if((b%2==0) && (b!==(a/2))) {
                document.writeln(b)
                b--
            } 
            else if (b==parseInt(a/2)) {
                document.writeln("While loop")
                b--
            }
            else {
                b--
                continue
            }
        }

        */

 /*       document.getElementById()
        document.getElementsByName()
        document.getElementsByTagName()
        document.getElementsByClassName()
        queryselector()
        queryselectorAll()

        */

    /*    var a=document.getElementById('one')
        a.style.backgroundColor='blue'
        a.style.color='white'

        */

        

     /*   function totalh() {
            var b=document.getElementsByTagName("h1")
            alert("Total heading tag "+b.length)
        }
            */

/*        var b=document.getElementsByClassName("three")
        for(i=0;i<b.length;i++) {
            b[i].style.backgroundColor="orange"
            b[i].style.color="white"
        }

*/

/* let obj = {
    name: "Prashanth",
    greet: function() {
       console.log(this.name)
    }
}

let greet=obj.greet
greet()
        */

/* let a=[10,20,30,40,50]
 for(let i in a) {
    document.writeln(i+" "+a[i]+ "<br>")
}

a.forEach(function(a) {
    document.writeln(a)
})
    */
/*
const arr=[1,2,3,4,5]
console.log(arr.indexOf(6))
*/

/* const str="1234"
console.log(str.toUpperCase() */

/* function MouseOver() {
    var a = document.getElementById("one")
    a.style.backgroundColor="Orange"
}

function MouseOut() {
    var a=document.getElementById("one")
    a.style.backgroundColor='Red'
}
*/

/* var a=document.getElementById("one")
var b= document.getElementById("two")
a.addEventListener("mouseover", function() {
    a.style.backgroundColor='yellow'
    b.textContent=`Mouse Over`
})
a.addEventListener("mouseout",function() {
    a.style.backgroundColor=`orange`
    b.textContent=`Mouse Out`
})

*/

/* console.log(location.href)
console.log(location.hostname)
console.log(location.pathname)
console.log(location.protocol) */

/* let str="hello"
let rts=""
let j=0
for( let i=str.length-1;i>=0;i--) {
    rts=rts+str[i]
}
document.writeln(rts)
*/

/* var v=[10,-9,7,8,-2]
var w=[1,4,16,64,128,256]
var vp=v.filter(num=>num>0)
var vn=v.filter(num=>num<0)
document.writeln(vp+"<br>"+vn+"<br>")
var r=v.reduce((c,d)=>c+d,0)
document.writeln(r)
var combined=[...v,...w]
document.writeln("<br>"+combined)
*/

/* function greet(message,...names) {
    document.writeln(message + "</br>" + names)
}

greet("hello","kp","karuppu","pandoo","kadalakp","ulagamsuttrumvalibankp","familyguywithkidsandmomandgrandmom")
*/

/*
function one(a) {
    document.writeln("start" +"<br>")
    a()
}

function two() {
    document.writeln("Running")
}
one(two)
*/

/*
function output(a,b,c) {
    return c(a,b)
}

function add(a,b) {
    return a+b
}

function mul(a,b) {
    return a*b
}

document.writeln( "Multiply " + output(10,20,mul)+"<br>")
document.writeln( "Add " + output(10,20,add)+"<br>")

*/
/*
var a = new Promise((resolve,reject)=> {
    b=true
    if(b) {
        setTimeout(resolve,3000,"running")
    }
    else {
        reject("error occured")
    }
})
console.log(a)
a.then(message=>console.log(message)).catch(error=>console.log(error)) 
*/

/* var a=fetch("https://api.chucknorris.io/jokes/random")
console.log(a)
// a.then(data=>console.log(data)).catch(err=>console.log(err))

a.then(data=>data.json()).then(respo=>console.log(respo.value)).catch(err=>console.log(err));
*/
/*
function convert() {
    const amount=document.getElementById("amount").value
    const from=document.getElementById("from").value
    const to=document.getElementById("to").value
    if(from===to) {
        document.getElementById("result").innerText="Same Currency Selected"
    }
    else {
        fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`)
        .then(res=>res.json())
        .then(data=> {
            document.getElementById("result").innerText=`Converted Amount: ${data.rates[to]} ${to}`
        })

}       a.catch((err)=>console.log(err))
    }
*/

  /*  const ul=document.createElement("ul")
    ul.innerHTML="<li>Item 1</li> <li>Item 2</li>"
    ul.appendChild(ul)

    */

/* let fruits = ["apple", "banana"];
let moreFruits = ["mango", "orange"];
let allFruits = [...fruits, ...moreFruits];
console.log(allFruits) */

/*
let marks = [85, 92, 76, 88];
let [top1, top2, ...others] = marks;
console.log("Topper 1:", top1);
console.log("Topper 2:", top2);
console.log("Other Marks:", others);   

var a=[10,20,30,40,50]
var b=[60,70,80,90,100]
for(i=0;i<a.length;i++) {
    
}
*/

var a=[1,2,3,4,5]
var even=[]
var odd=[]
for (let i=0;i<a.length;i++){
    if(a[i]%2==0){
        even.push(a[i])
    } 
    else {
        odd.push(a[i])
    }
}
console.log(even)
console.log(odd)