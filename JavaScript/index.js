let currentPlayer="X";
let p1=0;
let p2=0;
let gstatus = 0;
var table=[[,,],[,,],[,,]];
let moveCounter=0;
const tableElem=document.getElementById("table");

function pSwitch(){
    if(currentPlayer=="X")
        {
            currentPlayer="O";
        }
            else   
                if (currentPlayer=="O")
                    {
                        currentPlayer="X";
                    }
}
function reset(){
    gstatus=0;
    moveCounter=0;
    for (let i=1; i<=3;i++)
        {
        for(let j=1;j<=3;j++)
                {
                table[i-1][j-1]=null;
                document.getElementById(`${i}${j}`).innerHTML=null;
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
function tiechecker(moveCounter){
            if(moveCounter==9)
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
                                        }else tiechecker(moveCounter);
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
tableElem.addEventListener('click',function(e){
        let element=e.target.innerHTML;
        if((eSpace(element)==true)&&(gstatus==0))
                    {   e.target.innerHTML=currentPlayer;
                        let currentCellId=e.target.id;
                        table[currentCellId[0]][currentCellId[1]]=currentPlayer;
                        moveCounter++;
                        pSwitch();
                        if (moveCounter>4){
                            gOver();
                        }
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