console.log("js script connected");

window.onscroll = function() {myFunction()};
var header = document.getElementById("navbar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function button1(){
	console.log("in button1");

	alert("1. if age >18 it will return true else confirm , 2. if age >18 return true but also aks for confirmation ");
	
}



function button2(){

	var a = prompt("enter your age");
	sid = (a>18) ? true : false ;
	
	if(sid==false){
	confirm("did your parents allowed you ");
	}else{alert(true);}
}

function button3 () {
	var max;
	var a = this.i1.value;
	var b = this.i2.value;
	// if(a==b){

	// 	alert("please enter different numbers..");

	(a<b) ? (alert("min value is "+a))
	      : (alert("min value is "+b));
}  

 function primNumber(){

 	var i,j,num=100, n;
 	for (i = 1; i <= num; i++) {
            
            for (j = 2; j < i; j++) {
	                 n = i % j;
	                if (n == 0) {
	                    break;
	        		}
	        }
	        if (i == j) {
	                console.log(" " +i);
	        } 
	}

}

(function(){	
	var x= "Welcome to the assignmetn i am IIFE ";
	alert (x);
})();


// function declaration
function fdeclare(){
        var a = "fn declaration";
        alert("this is : " +a);
}

// function expression

function dexpression(){

	var b= function(){
		alert("this is executed by function expression");
	}
	b();
}

function sub(a,b){

	var multiple = a*b;
	document.getElementById('demo2').innerHTML = multiple;
}

function multiplenumber(){
	return sub(5,5);
}


function todaysDate(){
	//var a = Date();
	//console.log(a);
	document.getElementById("p1").innerHTML = Date();
}

function AgeCheck(){
	var a = this.age.value;
	if(a>18){
		alert("your age is greater then 18");
	}else{
		alert("not eligible");
	}
}

function AgeCheck_ternary(age){
		var a = age > 18 ? true : confirm('Did parents allow you?');
		alert(a);
}


function addition(x,y) {
	    
    var z = x+y;
    document.getElementById("p2").innerHTML = "please see the console";
    console.log(z);
    
}

function bgchangeaspertime(){

     var d = new Date();
     var n = d.getHours();
    if(n>=0 && n<=12){
 		  document.body.style.background = "yellow";
 		  
    }else if(n>=12 && n<=18){
    	document.body.style.background = "Blue";
    }
     else if(n>=18 && n<=23){
     	document.body.style.background = "Black";		
	}
}

// * to get the maximum value from the given array.
function  maxNumber(){
	var array = [3 , 6, 2, 99, 32, 5, 89, 32];
	var largest= array[0];

	for (i=0; i<=largest;i++){
    		if (array[i]>largest) {
        	var largest=array[i];
    		}	
	}
	console.log(largest);

}

function  minNumber(){
	var array = [3 , 6, 2, 99, 32, 1, 89, 32];
    var minvalue = array[0]; 
	for (var i = 0; i < array.length; i++) {
    			if(array[i]<minvalue)
    			{
			        minvalue = array[i];
   				 }

	}
console.log(minvalue);

}

function palindrome(){
	var number = "malayalam";
	number = number + "";
	numberreverse = number.split("").reverse().join('');           // this line will reverse the string  & store in number reverse
	console.log ("The number if reversed is: " +numberreverse);
	if (number == numberreverse)							//campare both string if condition satisfy it will print result.
	{
 	   console.log("Yes, this is a palindrome");}
	else{
    console.log("Nope! It isnt a palindrome");}
}

function fibonacci(){
	var n = this.fib.value;
	var i,t1=0,t2=1, nextTerm;
	for (i = 0; i <= n; ++i) 			//initialization, conditon, increment decrement
    {
    //	console.log(i); 
        nextTerm = t1 + t2;       		//addition is saved to nextTerm	
        t1 = t2;
        t2 = nextTerm;
        console.log(t1);				// display the original value
        
    }
     	
}



function show_dropdown(){
			document.getElementById("level2").style.visibility = "visible"; //css visibility :hidden is changed to :visible for id level12 due to which li section gets visible
		}
function hide_dropdown(){
			document.getElementById("level2").style.visibility = "hidden";  //css visibility :visible is changed to :hidden for id level12 & hides Li section
		}
function show_dropdown2(){
			document.getElementById("level3").style.visibility = "visible"; //css visibility :hidden is changed to :visible for id level12
		}
		function hide_dropdown2(){
			document.getElementById("level3").style.visibility = "hidden";  //css visibility :visible is changed to :hidden for id level12
		}

function openCity(tabValue){
    var obj = {a1:"London is the city on lights",           //  obj declaration
     a2:"Paris is the capital of France", 
     a3:"Tokyo is the capital of Japan."};
    
   for (var i =1; i <=3; i++) { 							
     if (tabValue == 'tab'+i) {
         
         var index= "a"+i;   								// gives dynamic string base on event , there a1 given to index
        
        document.getElementById('tab'+i).innerText = obj[index];     // index is passed in [] bcoz index is dynamic value & display 																	in <p> tag 
       
 
     }
   }
}