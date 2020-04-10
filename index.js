let cp="X";
let p1=0;
let p2=0;
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
                                        document.getElementById('wp1').innerHTML=p1;
                                        }
                                        else  if(document.getElementById('l1c1').innerHTML=="O")  
                                        {
                                            p2++;
                                            document.getElementById('wp2').innerHTML=p2;
 
                                        }
                            }else
            if((document.getElementById('l2c1').innerText==document.getElementById('l2c2').innerText)
                &(document.getElementById('l2c2').innerText==document.getElementById('l2c3').innerText))
                            {
                                if(document.getElementById('l2c1').innerHTML=="X")
                                    { 
                                        p1++;
                                    document.getElementById('wp1').innerText=p1;
                                    }
                                else if(document.getElementById('l2c1').innerHTML=="O")  
                                        {
                                            p2++;
                                            document.getElementById('wp2').innerText=p2;

                                        }
                            } else
            if((document.getElementById('l3c1').innerText===document.getElementById('l3c2').innerText)
                &&(document.getElementById('l3c2').innerText===document.getElementById('l3c3').innerText))
                            {
                            if(document.getElementById('l3c1').innerHTML=="X")
                                {
                                    p1++;
                                    document.getElementById('wp1').innerText=p1;
                                }
                            else
                                if(document.getElementById('l3c1').innerHTML=="O")
                                {
                                    p2++;
                                    document.getElementById('wp2').innerText=p2;
                                }
                            }else
            if((document.getElementById('l1c1').innerText==document.getElementById('l2c1').innerText)
                &&(document.getElementById('l2c1').innerText==document.getElementById('l3c1').innerText))
                            {
                                if(document.getElementById('l1c1').innerHTML=="X")
                                        {
                                            p1++;
                                        document.getElementById('wp1').innerHTML=p1;
                                        }
                                        else  if(document.getElementById('l1c1').innerHTML=="O")  
                                        {
                                            p2++;
                                            document.getElementById('wp2').innerHTML=p2;
                                        }
                            }else
            if((document.getElementById('l1c2').innerText==document.getElementById('l2c2').innerText)
                &(document.getElementById('l2c2').innerText==document.getElementById('l3c2').innerText))
                            {
                                if(document.getElementById('l1c2').innerHTML=="X")
                                    { 
                                        p1++;
                                    document.getElementById('wp1').innerText=p1;
                                    }
                                else if(document.getElementById('l1c2').innerHTML=="O")  
                                        {
                                            p2++;
                                            document.getElementById('wp2').innerText=p2;

                                        }
                            } else
            if((document.getElementById('l1c3').innerText===document.getElementById('l2c3').innerText)
                &&(document.getElementById('l2c3').innerText===document.getElementById('l3c3').innerText))
                            {
                            if(document.getElementById('l1c3').innerHTML=="X")
                                {
                                    p1++;
                                    document.getElementById('wp1').innerText=p1;
                                }
                            else
                                if(document.getElementById('l1c3').innerHTML=="O")
                                {
                                    p2++;
                                    document.getElementById('wp2').innerText=p2;
                                }
                            }
                if((document.getElementById('l1c1').innerText==document.getElementById('l2c2').innerText)
                &(document.getElementById('l2c2').innerText==document.getElementById('l3c3').innerText))
                            {
                                if(document.getElementById('l1c1').innerHTML=="X")
                                    { 
                                        p1++;
                                    document.getElementById('wp1').innerText=p1;
                                    }
                                else if(document.getElementById('l1c1').innerHTML=="O")  
                                        {
                                            p2++;
                                            document.getElementById('wp2').innerText=p2;

                                        }
                            } else
            if((document.getElementById('l1c3').innerText===document.getElementById('l2c2').innerText)
                &&(document.getElementById('l2c2').innerText===document.getElementById('l3c1').innerText))
                            {
                            if(document.getElementById('l1c3').innerHTML=="X")
                                {
                                    p1++;
                                    document.getElementById('wp1').innerText=p1;
                                }
                            else
                                if(document.getElementById('l1c3').innerHTML=="O")
                                {
                                    p2++;
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
document.getElementById('l1c1').addEventListener("click",function(){
    let element=document.getElementById('l1c1').innerText;
    if(eSpace(element)==true){
    document.getElementById('l1c1').innerText=cp;
    pSwitch();
    gOver();
    }
     else {
         alert("Casuta e deja completata,va rog puneti-va ochelarii si alegeti o casuta goala");
        }
});
document.getElementById('l1c2').addEventListener("click",function(){
    let element=document.getElementById('l1c2').innerText;
    if(eSpace(element)==true){
    document.getElementById('l1c2').innerText=cp;
    pSwitch();
    gOver();
    }
    else{
        alert("Casuta e deja completata,va rog puneti-va ochelarii si alegeti o casuta goala");
    }
});
document.getElementById('l1c3').addEventListener("click",function(){
    let element=document.getElementById('l1c3').innerText;
    if(eSpace(element)==true){
    document.getElementById('l1c3').innerText=cp;
    pSwitch();
    gOver();
    }
    else {
         alert("Casuta e deja completata,va rog puneti-va ochelarii si alegeti o casuta goala");
        }
});
document.getElementById('l2c1').addEventListener("click",function(){
    let element=document.getElementById('l2c1').innerText;
    if(eSpace(element)==true){
    document.getElementById('l2c1').innerText=cp;
    pSwitch();
    gOver();
    }
    else {
         alert("Casuta e deja completata,va rog puneti-va ochelarii si alegeti o casuta goala");
        }
});
document.getElementById('l2c2').addEventListener("click",function(){
    let element=document.getElementById('l2c2').innerText;
    if(eSpace(element)==true){
    document.getElementById('l2c2').innerText=cp;
    pSwitch();
    gOver();
    }
    else {
         alert("Casuta e deja completata,va rog puneti-va ochelarii si alegeti o casuta goala");
        }
});
document.getElementById('l2c3').addEventListener("click",function(){
    let element=document.getElementById('l2c3').innerText;
    if(eSpace(element)==true){
    document.getElementById('l2c3').innerText=cp;
    pSwitch();
    gOver();
    }
    else {
         alert("Casuta e deja completata,va rog puneti-va ochelarii si alegeti o casuta goala");
        }
});
document.getElementById('l3c1').addEventListener("click",function(){
    let element=document.getElementById('l3c1').innerText;
    if(eSpace(element)==true){
    document.getElementById('l3c1').innerText=cp;
    pSwitch();
    gOver();
    }
   else {
         alert("Casuta e deja completata,va rog puneti-va ochelarii si alegeti o casuta goala");
        }
});
document.getElementById('l3c2').addEventListener("click",function(){
    let element=document.getElementById('l3c2').innerText;
    if(eSpace(element)==true){
    document.getElementById('l3c2').innerText=cp;
    pSwitch();
    gOver();
    }
    else {
         alert("Casuta e deja completata,va rog puneti-va ochelarii si alegeti o casuta goala");
        }
});
document.getElementById('l3c3').addEventListener("click",function(){
    let element=document.getElementById('l3c3').innerText;
    if(eSpace(element)==true){
    document.getElementById('l3c3').innerText=cp;
    pSwitch();
    gOver();
    }
    else {
         alert("Casuta e deja completata,va rog puneti-va ochelarii si alegeti o casuta goala");
        }
});
