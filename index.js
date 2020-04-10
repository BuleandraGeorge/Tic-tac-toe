let cp="X";
let p1=0;
let p2=0;
let gstatus = 0; // 1 for finished, 0 for in progress
function pSwitch(){
    if(cp=="X")
        {
            cp="O";
        }
            else   
                if (cp=="O")
                    {
                        cp="X";
                    }
}
function gOver(){
            if((document.getElementById('l1c1').innerText==document.getElementById('l1c2').innerText)
                &&(document.getElementById('l1c2').innerText==document.getElementById('l1c3').innerText))
                            {
                                if(document.getElementById('l1c1').innerHTML=="X")
                                        {
                                            p1++;
                                            gstatus=1;
                                            document.getElementById('wp1').innerHTML=p1;
                                            statusGame(gstatus);
                                            
                                        }
                                        else  if(document.getElementById('l1c1').innerHTML=="O")  
                                        {
                                            p2++;
                                            gstatus=1;
                                            document.getElementById('wp2').innerHTML=p2;
 
                                        }
                            }else
            if((document.getElementById('l2c1').innerText==document.getElementById('l2c2').innerText)
                &(document.getElementById('l2c2').innerText==document.getElementById('l2c3').innerText))
                            {
                                if(document.getElementById('l2c1').innerHTML=="X")
                                    { 
                                        p1++;
                                        gstatus=1;
                                        document.getElementById('wp1').innerText=p1;
                                    }
                                else if(document.getElementById('l2c1').innerHTML=="O")  
                                        {
                                            p2++;
                                            gstatus=1;
                                            document.getElementById('wp2').innerText=p2;

                                        }
                            } else
            if((document.getElementById('l3c1').innerText===document.getElementById('l3c2').innerText)
                &&(document.getElementById('l3c2').innerText===document.getElementById('l3c3').innerText))
                            {
                            if(document.getElementById('l3c1').innerHTML=="X")
                                {
                                    p1++;
                                    gstatus=1;
                                    document.getElementById('wp1').innerText=p1;
                                }
                            else
                                if(document.getElementById('l3c1').innerHTML=="O")
                                {
                                    p2++;
                                    gstatus=1;
                                    document.getElementById('wp2').innerText=p2;
                                }
                            }else
            if((document.getElementById('l1c1').innerText==document.getElementById('l2c1').innerText)
                &&(document.getElementById('l2c1').innerText==document.getElementById('l3c1').innerText))
                            {
                                if(document.getElementById('l1c1').innerHTML=="X")
                                        {
                                            p1++;
                                            gstatus=1;
                                        document.getElementById('wp1').innerHTML=p1;
                                        }
                                        else  if(document.getElementById('l1c1').innerHTML=="O")  
                                        {
                                            p2++;
                                            gstatus=1;
                                            document.getElementById('wp2').innerHTML=p2;
                                        }
                            }else
            if((document.getElementById('l1c2').innerText==document.getElementById('l2c2').innerText)
                &(document.getElementById('l2c2').innerText==document.getElementById('l3c2').innerText))
                            {
                                if(document.getElementById('l1c2').innerHTML=="X")
                                    { 
                                        p1++;
                                        gstatus=1;
                                    document.getElementById('wp1').innerText=p1;
                                    }
                                else if(document.getElementById('l1c2').innerHTML=="O")  
                                        {
                                            p2++;
                                            gstatus=1;
                                            document.getElementById('wp2').innerText=p2;

                                        }
                            } else
            if((document.getElementById('l1c3').innerText===document.getElementById('l2c3').innerText)
                &&(document.getElementById('l2c3').innerText===document.getElementById('l3c3').innerText))
                            {
                            if(document.getElementById('l1c3').innerHTML=="X")
                                {
                                    p1++;
                                    gstatus=1;
                                    document.getElementById('wp1').innerText=p1;
                                }
                            else
                                if(document.getElementById('l1c3').innerHTML=="O")
                                {
                                    p2++;
                                    gstatus=1;
                                    document.getElementById('wp2').innerText=p2;
                                }
                            }
                if((document.getElementById('l1c1').innerText==document.getElementById('l2c2').innerText)
                &(document.getElementById('l2c2').innerText==document.getElementById('l3c3').innerText))
                            {
                                if(document.getElementById('l1c1').innerHTML=="X")
                                    { 
                                        p1++;
                                        gstatus=1;
                                    document.getElementById('wp1').innerText=p1;
                                    }
                                else if(document.getElementById('l1c1').innerHTML=="O")  
                                        {
                                            p2++;
                                            gstatus=1;
                                            document.getElementById('wp2').innerText=p2;

                                        }
                            } else
            if((document.getElementById('l1c3').innerText===document.getElementById('l2c2').innerText)
                &&(document.getElementById('l2c2').innerText===document.getElementById('l3c1').innerText))
                            {
                            if(document.getElementById('l1c3').innerHTML=="X")
                                {
                                    p1++;
                                    gstatus=1;
                                    document.getElementById('wp1').innerText=p1;
                                }
                            else
                                if(document.getElementById('l1c3').innerHTML=="O")
                                {
                                    p2++;
                                    gstatus=1;
                                    document.getElementById('wp2').innerText=p2;
                                }
                            }
    };      
function eSpace(element){
    if((element=="X")||(element)=="O")
    {
        return false;
    }
    else {return true;}
}
function statusGame()
{
        document.getElementById('l1c1').addEventListener("click",
        function()
            {
                let element=document.getElementById('l1c1').innerText;
                if((eSpace(element)==true)&&(gstatus==0))
                    {
                        document.getElementById('l1c1').innerText=cp;
                        pSwitch();
                        gOver();
                    }
                 else if (gstatus==1) {
                         alert("Game is over, Press Restart to play again");}
                            else{
                        alert("Casuta e deja completata,va rog puneti-va ochelarii si alegeti o casuta goala");
                        }
            });
        document.getElementById('l1c2').addEventListener("click",
        function()
            {
                let element=document.getElementById('l1c2').innerText;
                if((eSpace(element)==true)&&(gstatus==0))
                    {
                        document.getElementById('l1c2').innerText=cp;
                        pSwitch();
                        gOver();
                    }
                else if (gstatus==1) 
                            {
                             alert("Game is over, Press Restart to play again");
                            }
                            else{
                                alert("Casuta e deja completata,va rog puneti-va ochelarii si alegeti o casuta goala");
                            }
            });
document.getElementById('l1c3').addEventListener("click",function(){
    let element=document.getElementById('l1c3').innerText;
    if((eSpace(element)==true)&&(gstatus==0)){
    document.getElementById('l1c3').innerText=cp;
    pSwitch();
    gOver();
    }
     else if (gstatus==1) {
                         alert("Game is over, Press Restart to play again");}
                            else{
                        alert("Casuta e deja completata,va rog puneti-va ochelarii si alegeti o casuta goala");
                        }
});
document.getElementById('l2c1').addEventListener("click",function(){
    let element=document.getElementById('l2c1').innerText;
    if((eSpace(element)==true)&&(gstatus==0)){
    document.getElementById('l2c1').innerText=cp;
    pSwitch();
    gOver();
    }
     else if (gstatus==1) {
                         alert("Game is over, Press Restart to play again");}
                            else{
                        alert("Casuta e deja completata,va rog puneti-va ochelarii si alegeti o casuta goala");
                        }
});
document.getElementById('l2c2').addEventListener("click",function(){
    let element=document.getElementById('l2c2').innerText;
    if((eSpace(element)==true)&&(gstatus==0)){
    document.getElementById('l2c2').innerText=cp;
    pSwitch();
    gOver();
    }
     else if (gstatus==1) {
                         alert("Game is over, Press Restart to play again");}
                            else{
                        alert("Casuta e deja completata,va rog puneti-va ochelarii si alegeti o casuta goala");
                        }
});
document.getElementById('l2c3').addEventListener("click",function(){
    let element=document.getElementById('l2c3').innerText;
    if((eSpace(element)==true)&&(gstatus==0)){
    document.getElementById('l2c3').innerText=cp;
    pSwitch();
    gOver();
    }
     else if (gstatus==1) {
                         alert("Game is over, Press Restart to play again");}
                            else{
                        alert("Casuta e deja completata,va rog puneti-va ochelarii si alegeti o casuta goala");
                        }
});
document.getElementById('l3c1').addEventListener("click",function(){
    let element=document.getElementById('l3c1').innerText;
    if((eSpace(element)==true)&&(gstatus==0)){
    document.getElementById('l3c1').innerText=cp;
    pSwitch();
    gOver();
    }
    else if (gstatus==1) {
                         alert("Game is over, Press Restart to play again");}
                            else{
                        alert("Casuta e deja completata,va rog puneti-va ochelarii si alegeti o casuta goala");
                        }
});
document.getElementById('l3c2').addEventListener("click",function(){
    let element=document.getElementById('l3c2').innerText;
    if((eSpace(element)==true)&&(gstatus==0)){
    document.getElementById('l3c2').innerText=cp;
    pSwitch();
    gOver();
    }
     else if (gstatus==1) {
                         alert("Game is over, Press Restart to play again");}
                            else{
                        alert("Casuta e deja completata,va rog puneti-va ochelarii si alegeti o casuta goala");
                        }
});
document.getElementById('l3c3').addEventListener("click",function(){
    let element=document.getElementById('l3c3').innerText;
    if((eSpace(element)==true)&&(gstatus==0)){
    document.getElementById('l3c3').innerText=cp;
    pSwitch();
    gOver();
    }
     else if (gstatus==1) {
                        alert("Game is over, Press Restart to play again");
                        }
                            else{
                        alert("Casuta e deja completata,va rog puneti-va ochelarii si alegeti o casuta goala");
                        }
});
}
statusGame();
document.getElementById("reset").addEventListener('click',function reset(){
    document.getElementById('l1c1').innerHTML=null;
    document.getElementById('l1c2').innerHTML=null;
    document.getElementById('l1c3').innerHTML=null;
    document.getElementById('l2c1').innerHTML=null;
    document.getElementById('l2c2').innerHTML=null;
    document.getElementById('l2c3').innerHTML=null;
    document.getElementById('l3c1').innerHTML=null;
    document.getElementById('l3c2').innerHTML=null;
    document.getElementById('l3c3').innerHTML=null;
    gstatus=0;
});