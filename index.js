let cp="X";
let p1=0;
let p2=0;
let gstatus = 0; // 1 for finished, 0 for in progress
//switch the player
function reset(){
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
};
document.getElementById("pg-button").addEventListener('click',
    function()
        {
            reset();
            document.getElementById("modal-overlay").setAttribute("style","display:none;");
        });
document.getElementById("sb-button").addEventListener('click', 
    function()
        {
            document.getElementById("modal-overlay").setAttribute("style","display:none;");
        });
function p1Won(){
    p1++;
    gstatus=1;
    document.getElementById('wp1').innerHTML=p1; 
    document.getElementById("modal-overlay").setAttribute("style","display:initial;");
    document.getElementById('winner').innerText="Player One Has Won"; 
};
function p2Won(){
    p2++;
    gstatus=1;
    document.getElementById('wp2').innerHTML=p2;
    document.getElementById("modal-overlay").setAttribute("style","display:initial;");
    document.getElementById('winner').innerText="Player Two Has Won";
};

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
//test if the user enter in a filled square and if the game is over;
function gsStatus(){
    if (gstatus==1) 
                    {
                    alert("Game is over, Press Restart to play again");
                    }
                    else{
                            alert("Casuta e deja completata, alegeti o casuta goala");
                        }
}
// test if is already a caracter placed in the square     
function eSpace(element){
    if((element=="X")||(element)=="O")
    {
        return false;
    }
    else {return true;}
}
//test if somebody won
function gOver(){
            //test first line
            if((document.getElementById('l1c1').innerText==document.getElementById('l1c2').innerText)
                &&(document.getElementById('l1c2').innerText==document.getElementById('l1c3').innerText))
                            {
                                if(document.getElementById('l1c1').innerHTML=="X")
                                        {
                                            p1Won();  
                                        }
                                        else  if(document.getElementById('l1c1').innerHTML=="O")  
                                        {
                                            p2Won();
                                        }
                            }else
                //test second line
                if((document.getElementById('l2c1').innerText==document.getElementById('l2c2').innerText)
                &(document.getElementById('l2c2').innerText==document.getElementById('l2c3').innerText))
                            {
                                if(document.getElementById('l2c1').innerHTML=="X")
                                    { 
                                        p1Won();
                                    }
                                else if(document.getElementById('l2c1').innerHTML=="O")  
                                        {
                                            p2Won();

                                        }
                            } else
            //test third line
            if((document.getElementById('l3c1').innerText==document.getElementById('l3c2').innerText)
                &&(document.getElementById('l3c2').innerText==document.getElementById('l3c3').innerText))
                            {
                             if(document.getElementById('l3c1').innerHTML=="X")
                                {
                                    p1Won();
                                }
                            else
                                if(document.getElementById('l3c1').innerHTML=="O")
                                {
                                    p2Won();
                                }
                            }else
             //test first column
            if((document.getElementById('l1c1').innerText==document.getElementById('l2c1').innerText)
                &&(document.getElementById('l2c1').innerText==document.getElementById('l3c1').innerText))
                            {
                                if(document.getElementById('l1c1').innerHTML=="X")
                                        {
                                            p1Won();
                                        }
                                        else  if(document.getElementById('l1c1').innerHTML=="O")  
                                        {
                                            p2Won();
                                        }
                            }else
            //test second column
            if((document.getElementById('l1c2').innerText==document.getElementById('l2c2').innerText)
                &(document.getElementById('l2c2').innerText==document.getElementById('l3c2').innerText))
                            {
                                if(document.getElementById('l1c2').innerHTML=="X")
                                    { 
                                       p1Won();
                                    }
                                else if(document.getElementById('l1c2').innerHTML=="O")  
                                    {
                                        p2Won();
                                    }
                            } else
            ////test third column
            if((document.getElementById('l1c3').innerText==document.getElementById('l2c3').innerText)
                &&(document.getElementById('l2c3').innerText==document.getElementById('l3c3').innerText))
                            {
                                if(document.getElementById('l1c3').innerHTML=="X")
                                {
                                    p1Won();
                                }
                                else
                                    if(document.getElementById('l1c3').innerHTML=="O")
                                    {
                                        p2Won();
                                    }
                            }else
                //test first diagonal
                if((document.getElementById('l1c1').innerText==document.getElementById('l2c2').innerText)
                &(document.getElementById('l2c2').innerText==document.getElementById('l3c3').innerText))
                            {
                                if(document.getElementById('l1c1').innerHTML=="X")
                                    { 
                                        p1Won();
                                    }
                                else if(document.getElementById('l1c1').innerHTML=="O")  
                                        {
                                            p2Won();
                                        }
                            } else
            //test second diagonal
            if((document.getElementById('l1c3').innerText==document.getElementById('l2c2').innerText)
                &&(document.getElementById('l2c2').innerText==document.getElementById('l3c1').innerText))
                            {
                            if(document.getElementById('l1c3').innerHTML=="X")
                                {
                                    p1Won();
                                }
                            else
                                if(document.getElementById('l1c3').innerHTML=="O")
                                {
                                   p2Won();
                                }
                            }
    }; 

// after user click a square: test if is empty, if someone won , switch user display message .        
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
                 else gsStatus();
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
                else gsStatus();
            });
        document.getElementById('l1c3').addEventListener("click",
        function(){
                    let element=document.getElementById('l1c3').innerText;
                    if((eSpace(element)==true)&&(gstatus==0))
                    {
                        document.getElementById('l1c3').innerText=cp;
                        pSwitch();
                        gOver();
                        }
                    else gsStatus();
            });
        document.getElementById('l2c1').addEventListener("click",
        function()
        {
            let element=document.getElementById('l2c1').innerText;
            if((eSpace(element)==true)&&(gstatus==0))
                {
                document.getElementById('l2c1').innerText=cp;
                pSwitch();
                gOver();
                }
            else gsStatus();
        });
        document.getElementById('l2c2').addEventListener("click",
        function()
        {
            let element=document.getElementById('l2c2').innerText;
            if((eSpace(element)==true)&&(gstatus==0))
            {
                document.getElementById('l2c2').innerText=cp;
                pSwitch();
                gOver();
            }
                else gsStatus();
            });
        document.getElementById('l2c3').addEventListener("click",
        function()
        {
            let element=document.getElementById('l2c3').innerText;
            if((eSpace(element)==true)&&(gstatus==0))
                {
                document.getElementById('l2c3').innerText=cp;
                pSwitch();
                gOver();
                }
        else gsStatus();
        });
    document.getElementById('l3c1').addEventListener("click",
    function()
    {
        let element=document.getElementById('l3c1').innerText;
        if((eSpace(element)==true)&&(gstatus==0))
            {
            document.getElementById('l3c1').innerText=cp;
            pSwitch();
            gOver();
            }
        else gsStatus();
        });
    document.getElementById('l3c2').addEventListener("click",
    function()
    {
        let element=document.getElementById('l3c2').innerText;
        if((eSpace(element)==true)&&(gstatus==0))
            {
                document.getElementById('l3c2').innerText=cp;
                pSwitch();
                gOver();
            }
        else gsStatus();
    });
    document.getElementById('l3c3').addEventListener("click",
    function()
    {
        let element=document.getElementById('l3c3').innerText;
        if((eSpace(element)==true)&&(gstatus==0))
        {
            document.getElementById('l3c3').innerText=cp;
            pSwitch();
            gOver();
        }
        else gsStatus();
    });
document.getElementById("reset").addEventListener('click',function(){
    reset();
});

document.getElementById("menu").addEventListener("click",function(){
    document.getElementById("landing-modal-overlay").style.display="initial";
});
document.getElementById("closing-button").addEventListener("click",function(){
    document.getElementById("landing-modal-overlay").style.display="none";
});
document.getElementById("light").addEventListener("click",function(){
    document.getElementById("theme").setAttribute("href","styling/themes/light_theme.css");
});
document.getElementById("dark").addEventListener("click",function(){
    document.getElementById("theme").setAttribute("href","styling/themes/dark_theme.css");
});
document.getElementById("ancient").addEventListener("click",function(){
    document.getElementById("theme").setAttribute("href","styling/themes/ancient_theme.css");
});
document.getElementById("neon").addEventListener("click",function(){
    document.getElementById("theme").setAttribute("href","styling/themes/neon_theme.css");
});
document.getElementById("jungle").addEventListener("click",function(){
    document.getElementById("theme").setAttribute("href","styling/themes/jungle_theme.css");
});