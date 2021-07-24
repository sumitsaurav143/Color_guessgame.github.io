var ans;
var choosen;
var sum=0;
var t=5;
var tt;
function start()
{
    t=6;
    document.getElementById("popup").style.display="none";
   document.getElementById("restarter").style.display="block";
    document.getElementById("tm").style.display="flex";
    ans=Math.floor(Math.random() * 16777215).toString(16);
    tt=setInterval(timer,1000);

    document.getElementById("qh").innerHTML="Color: #"+ ans;
    //document.get ElementById("ques").style.background="white";
    document.getElementById("op1").style.background="#"+ans;
    document.getElementById("op2").style.background="#"+Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("op3").style.background="#"+Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("op4").style.background="#"+Math.floor(Math.random() * 16777215).toString(16);
    console.log();
    
    //option suffle
    document.getElementById("op1").style.order=Math.floor((Math.random() * 10) + 1);
    document.getElementById("op2").style.order=Math.floor((Math.random() * 10) + 1);
    document.getElementById("op3").style.order=Math.floor((Math.random() * 10) + 1);
    document.getElementById("op4").style.order=Math.floor((Math.random() * 10) + 1);
    
}

function timer()
{
    t-=1;
    document.getElementById("timer").innerText=t;
    if(t<1){
        clearTimeout(tt);
        var wrong=new Audio("Wrong.mp3");
        wrong.play();
        document.getElementById("popup").style.background="Red";
        document.getElementById("popup").style.display="";
        document.getElementById("res").innerHTML="Times Up!!";
        document.getElementById("next").innerHTML='<i class="fas fa-caret-right"></i>';
    }
    
}

//conversion hex->rgb
function hextorgb(x)
{
    var aRgbHex = x.match(/.{1,2}/g);
      var aRgb = [
          parseInt(aRgbHex[0], 16),
          parseInt(aRgbHex[1], 16),
          parseInt(aRgbHex[2], 16)
      ];
      return aRgb;
}


function s1(){
    choosen=document.getElementById("op1").style.backgroundColor;
    clearTimeout(tt);
    var clr=hextorgb(ans);
    ans="rgb("+clr[0]+", "+clr[1]+", "+clr[2]+")";
    if(ans==choosen)
    {
        var correct=new Audio("correct.mp3");
        correct.play();
        document.getElementById("popup").style.background="green";
        document.getElementById("popup").style.display="";
        document.getElementById("res").innerHTML="Correct Choice<br>+10";
        sum+=10;
        document.getElementById("score").innerHTML=sum;
        document.getElementById("next").innerHTML='<i class="fas fa-caret-right"></i>';
    }
    else
    {
        var wrong=new Audio("Wrong.mp3");
        wrong.play();
        document.getElementById("popup").style.background="red";
        document.getElementById("popup").style.display="";
        document.getElementById("res").innerHTML="Wrong Choice!!<br>-5";
        sum-=5;
        document.getElementById("score").innerHTML=sum;
        document.getElementById("next").innerHTML='<i class="fas fa-caret-right"></i>';
    }
}

function s2(){
    clearTimeout(tt);
    choosen=document.getElementById("op2").style.backgroundColor;
    var clr=hextorgb(ans);
    ans="rgb("+clr[0]+", "+clr[1]+", "+clr[2]+")";
    if(ans==choosen)
    {
        var correct=new Audio("correct.mp3");
        correct.play();
        document.getElementById("popup").style.background="green";
        document.getElementById("popup").style.display="";
        document.getElementById("res").innerHTML="Correct Choice<br>+10";
        sum+=10;
        document.getElementById("score").innerHTML=sum;
        document.getElementById("next").innerHTML='<i class="fas fa-caret-right"></i>';
    }
    else
    {
        var wrong=new Audio("Wrong.mp3");
        wrong.play();
        document.getElementById("popup").style.background="red";
        document.getElementById("popup").style.display="";
        document.getElementById("res").innerHTML="Wrong Choice!!<br>-5";
        sum-=5;
        document.getElementById("score").innerHTML=sum;
        document.getElementById("next").innerHTML='<i class="fas fa-caret-right"></i>';
    }
}

function s3(){
    clearTimeout(tt);
    choosen=document.getElementById("op3").style.backgroundColor;
    var clr=hextorgb(ans);
    ans="rgb("+clr[0]+", "+clr[1]+", "+clr[2]+")";
    if(ans==choosen[2])
    {
        var correct=new Audio("correct.mp3");
        correct.play();
        document.getElementById("popup").style.background="green";
        document.getElementById("popup").style.display="";
        document.getElementById("res").innerHTML="Correct Choice<br>+10";
        sum+=10;
        document.getElementById("score").innerHTML=sum;
        document.getElementById("next").innerHTML='<i class="fas fa-caret-right"></i>';
    }
    else
    {
        var wrong=new Audio("Wrong.mp3");
        wrong.play();
        document.getElementById("popup").style.background="red";
        document.getElementById("popup").style.display="";
        document.getElementById("res").innerHTML="Wrong Choice!!<br>-5";
        sum-=5;
        document.getElementById("score").innerHTML=sum;
        document.getElementById("next").innerHTML='<i class="fas fa-caret-right"></i>';
    }
}

function s4(){
    clearTimeout(tt);
    choosen=document.getElementById("op4").style.backgroundColor;
    var clr=hextorgb(ans);
    ans="rgb("+clr[0]+", "+clr[1]+", "+clr[2]+")";
    if(ans==choosen[2])
    {
        var correct=new Audio("correct.mp3");
        correct.play();
        document.getElementById("popup").style.background="green";
        document.getElementById("popup").style.display="";
        document.getElementById("res").innerHTML="Correct Choice<br>+10";
        sum+=10;
        document.getElementById("score").innerHTML=sum;
        document.getElementById("next").innerHTML='<i class="fas fa-caret-right"></i>';
    }
    else
    {
        var wrong=new Audio("Wrong.mp3");
        wrong.play();
        document.getElementById("popup").style.background="red";
        document.getElementById("popup").style.display="";
        document.getElementById("res").innerHTML="Wrong Choice!!<br>-5";
        sum-=5;
        document.getElementById("score").innerHTML=sum;
        document.getElementById("next").innerHTML='<i class="fas fa-caret-right"></i>';
    }
}



//mode
function mode(){
    if ( document.getElementById("merabody").classList.contains('day'))
    {
    document.getElementById("mode").innerHTML='<i class="fas fa-moon"></i>';
    document.getElementById("merabody").classList.toggle('night');
    }
    if ( document.getElementById("merabody").classList.contains('night'))
    document.getElementById("mode").innerHTML='<i class="fas fa-sun"></i>';
    
}