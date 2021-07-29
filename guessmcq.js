var ans;
var choosen;
var sum=0;
var t=10;
var tt;
var chance=0;
var player;

//Onstart Check for highscorer
function highscorefinder()
{
var h_name="Computer";
var h_scorer=-100;
const data=localStorage;
const score_card=document.getElementById("score_card");
for(var i=0;i<data.length;i++)
{
const score_data=document.createElement("div");
score_data.setAttribute("class","scr_data");
score_data.innerText=data.key(i)+" : "+data.getItem(data.key(i));
score_card.appendChild(score_data);
if(data.getItem(data.key(i))>h_scorer)
{
    h_name=data.key(i);
    h_scorer=Number(data.getItem(h_name));
}
}
document.getElementById("h_score").innerText=h_name+" : "+h_scorer;
}

function start()
{
    player=document.getElementById("player").value;
    document.getElementById("show_score").style.display="none";
    if(chance<10)
    {
    t=11;
    chance++;

    if(chance<10)
    document.getElementById("curr").innerText="0"+chance;
    else
    document.getElementById("curr").innerText=chance;

    document.getElementById("popup").style.display="none";
    document.getElementById("restarter").style.display="block";
    document.getElementById("score_box").style.display="flex";
    document.getElementById("tm").style.display="flex";
    ans=Math.floor(Math.random() * 16777215).toString(16);
    tt=setInterval(timer,1000);

    document.getElementById("qh").innerHTML="Color: #"+ ans;
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
    else
    {
        document.getElementById("finalscreen").style.display="flex";
        
        if (player=="")
        player="Player";
      
        document.getElementById("fscr").innerHTML="Hi, "+player+"!!<br>You Scored : "+sum;
        
        //Save Score Into Local Storage
        localStorage.setItem(player,sum);

        //Confetti Start
        const con_start=()=>{
            setTimeout(function(){
                confetti.start();
            },100)
        }
        con_start();

    }
}

//timer
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

//Options Button Function
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
        document.getElementById("player").style.display="none";
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
        document.getElementById("player").style.display="none";
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
        document.getElementById("player").style.display="none";
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
        document.getElementById("player").style.display="none";
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
        document.getElementById("player").style.display="none";
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
        document.getElementById("player").style.display="none";
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
        document.getElementById("player").style.display="none";
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
        document.getElementById("player").style.display="none";
        document.getElementById("res").innerHTML="Wrong Choice!!<br>-5";
        sum-=5;
        document.getElementById("score").innerHTML=sum;
        document.getElementById("next").innerHTML='<i class="fas fa-caret-right"></i>';
    }
}



//Day/Night Mode
function mode(){
    if ( document.getElementById("mainbody").classList.contains('day'))
    {
    document.getElementById("mode").innerHTML='<i class="fas fa-moon"></i>';
    document.getElementById("mainbody").classList.toggle('night');
    }
    if ( document.getElementById("mainbody").classList.contains('night'))
    {
    document.getElementById("mode").innerHTML='<i class="fas fa-sun"></i>';
    }
    
}


//back

function gohome(){
    document.getElementById("scoreboard").style.display="none";
}

function show_score(){
    document.getElementById("scoreboard").style.display="flex";
}

//whatsapp share
function whatsapp() {
    window.open("whatsapp://send?text="+player+" has scored "+sum+" in colour guess game."+
    "Why don't you try and score more than "+player+"!!"+
    " Play Here: "+"https://sumitsaurav143.github.io/Color_guessgame.github.io/");
}
