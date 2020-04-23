let cp="X";
let p1=0;
let p2=0;
let gstatus = 0;
var table=[[,,],[,,],[,,]];
let tc=0;
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
function reset(){
    gstatus=0;
    tc=0;
    for (let i=1; i<=3;i++)
        {
        for(let j=1;j<=3;j++)
                {
                table[i-1][j-1]=null;
                document.getElementById(`l${i}c${j}`).innerHTML=null;
                }
        }
};
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
function tiechecker(tc){
            if(tc==9)
            {
                document.getElementById("modal-overlay").setAttribute("style","display:initial;");
                document.getElementById('winner').innerText="It's a tie my friend";
            }else return null;
        };
function eSpace(element){
    if((element=="X")||(element)=="O")
    {
        return false;
    }
    else {return true;}
}
function gsStatus(){
    if (gstatus==1) 
                    {
                    alert("Game is over, Press Restart to play again");
                    }
                    else{
                            alert("Please try another square");
                        }
}
//checks if the move is winner
function gOver(){
            tc++;
            for(let i=0;i<3;i++)
            {
             if((table[i][0]==table[i][1])&&(table[i][1]==table[i][2]))
                {
                    if(table[i][0]=="X")
                        {
                            p1Won();
                        }
                        else if (table[i][0]=="O")
                            {
                                p2Won();
                            }
                }
                else if ((table[0][i]==table[1][i])&&(table[1][i]==table[2][i]))
                        {
                            if(table[0][i]=="X")
                                {
                                    p1Won();
                                }
                                else if (table[0][i]=="O")
                                    {
                                        p2Won();  
                                    }
                        }else if(i==0)
                                {
                                    if((table[i][i]==table[i+1][i+1])&&(table[i+1][i+1]==table[i+2][i+2]))
                                        {
                                            if(table[i][i]=="X")
                                                    {
                                                    p1Won();
                                                    }               
                                                else if (table[i][i]=="O")
                                                        {
                                                    p2Won();  
                                                    }
                                        }
                                }else if((table[i][i+2]==table[i+1][i+1])&&(table[i+1][i+1]==table[i+2][i]))
                                        {
                                            if(table[i][i+2]=="X")
                                                    {
                                                    p1Won();
                                                    }               
                                                else if (table[i][i+2]=="O")
                                                        {
                                                    p2Won();  
                                                    }
                                        }else tiechecker(tc);

             }
    }; 
//Modal Buttons
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
//Table Buttons
document.getElementById('l1c1').addEventListener("click",
        function()
            {   
                let element=table[0][0];
                if((eSpace(element)==true)&&(gstatus==0))
                    {   
                        table[0][0]=cp;
                        document.getElementById('l1c1').innerText=cp;
                        pSwitch();
                        gOver();
                    }
                 else gsStatus();
            });
document.getElementById('l1c2').addEventListener("click",
        function()
            {
                let element=table[0][1];
                if((eSpace(element)==true)&&(gstatus==0))
                    {
                        table[0][1]=cp;
                        document.getElementById('l1c2').innerText=cp;
                        pSwitch();
                        gOver();
                    }
                else gsStatus();
            });
document.getElementById('l1c3').addEventListener("click",
        function(){ 
                    let element=table[0][2];
                    if((eSpace(element)==true)&&(gstatus==0))
                    {
                        document.getElementById('l1c3').innerText=cp;
                        table[0][2]=cp;
                        pSwitch();
                        gOver();
                        }
                    else gsStatus();
            });
document.getElementById('l2c1').addEventListener("click",
        function()
        {
            let element=table[1][0];
            if((eSpace(element)==true)&&(gstatus==0))
                {
                document.getElementById('l2c1').innerText=cp;
                table[1][0]=cp;
                pSwitch();
                gOver();
                }
            else gsStatus();
        });
document.getElementById('l2c2').addEventListener("click",
        function()
        {
            let element=table[1][1];
            if((eSpace(element)==true)&&(gstatus==0))
            {
                document.getElementById('l2c2').innerText=cp;
                table[1][1]=cp;
                pSwitch();
                gOver();
            }
                else gsStatus();
            });
document.getElementById('l2c3').addEventListener("click",
        function()
        {
            let element=table[1][2];
            if((eSpace(element)==true)&&(gstatus==0))
                {
                document.getElementById('l2c3').innerText=cp;
                table[1][2]=cp;
                pSwitch();
                gOver();
                }
        else gsStatus();
        });
document.getElementById('l3c1').addEventListener("click",
    function()
    {
        let element=table[2][0];
        if((eSpace(element)==true)&&(gstatus==0))
            {
            document.getElementById('l3c1').innerText=cp;
            table[2][0]=cp;
            pSwitch();
            gOver();
            }
        else gsStatus();
        });
document.getElementById('l3c2').addEventListener("click",
    function()
    {
        let element=table[2][1];
        if((eSpace(element)==true)&&(gstatus==0))
            {
                document.getElementById('l3c2').innerText=cp;
                table[2][1]=cp;
                pSwitch();
                gOver();
            }
        else gsStatus();
    });
document.getElementById('l3c3').addEventListener("click",
    function()
    {
        let element=table[2][2];
        if((eSpace(element)==true)&&(gstatus==0))
        {
            document.getElementById('l3c3').innerText=cp;
            table[2][2]=cp;
            pSwitch();
            gOver();
        }
        else gsStatus();
    });
document.getElementById("reset").addEventListener('click',function(){
    reset();
});
//Theme Changer
document.getElementById("menu").addEventListener("click",function(){
    document.getElementById("landing-modal-overlay").style.display="initial";
});
document.getElementById("closing-button").addEventListener("click",function(){
    document.getElementById("landing-modal-overlay").style.display="none";
});
document.getElementById("light").addEventListener("click",function(){
    document.getElementById("theme").setAttribute("href","Styling/themes/light_theme.css");
});
document.getElementById("dark").addEventListener("click",function(){
    document.getElementById("theme").setAttribute("href","Styling/themes/dark_theme.css");
});
document.getElementById("ancient").addEventListener("click",function(){
    document.getElementById("theme").setAttribute("href","Styling/themes/ancient_theme.css");
});
document.getElementById("neon").addEventListener("click",function(){
    document.getElementById("theme").setAttribute("href","Styling/themes/neon_theme.css");
});
document.getElementById("jungle").addEventListener("click",function(){
    document.getElementById("theme").setAttribute("href","Styling/themes/jungle_theme.css");
});