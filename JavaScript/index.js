let currentPlayer="X";
let p1=0;
let p2=0;
let gameStatus=0;
var table=[[,,],[,,],[,,]];
let moveCounter=0;
const tableElem=document.getElementById("table");
const themeMenu=document.getElementById("theme-nav");
const landingModal=document.getElementById("landing-modal-overlay");
const headerAction=document.getElementById("header");

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
    gameStatus=0;
    moveCounter=0;
    for (let i=0; i<3;i++)
        {
        for(let j=0;j<3;j++)
                {
                table[i][j]=null;
                document.getElementById(`${i}${j}`).innerHTML=null;
                }
        }
};
function p1Won(){
    p1++;
    gameStatus=1;
    document.getElementById('wp1').innerHTML=p1; 
    document.getElementById("modal-overlay").setAttribute("style","display:initial;");
    document.getElementById('winner').innerText="Player One Has Won"; 
};
function p2Won(){
    p2++;
    gameStatus=1;
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
function validSlot(element){
    if((element=="X")||(element)=="O")
    {
        return false;
    }
    else {return true;}
}
function gsStatus(){
    if (gameStatus==1) 
                    {
                    alert("Game is over, Press Restart to play again");
                    }
                    else{
                            alert("Please try another square");
                        }
}
//checks if the move is winner
function winnerCheck(){
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
                    }else if ((table[0][i]==table[1][i])&&(table[1][i]==table[2][i]))
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
                                            }
                                    }
            }
            if(gameStatus!=1){
                tiechecker(moveCounter);
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
//Table Squares
tableElem.addEventListener('click',function(event){
        let move=event.target;
        if((validSlot(move.innerHTML)==true)&&(gameStatus==0))
                    {   move.innerHTML=currentPlayer;
                        let currentCellId=move.id;
                        table[currentCellId[0]][currentCellId[1]]=currentPlayer;
                        moveCounter++;
                        pSwitch();
                        if (moveCounter>4){
                            winnerCheck();
                        }
                    }
                 else gsStatus();
});
//Theme Changer 
themeMenu.addEventListener("click",function(themeEvent){
    choosenTheme=themeEvent.target.id;
    switch(choosenTheme){
        case 'light': document.getElementById("theme-name").innerHTML="LIGHT"; 
                      document.getElementById("theme").setAttribute("href","Styling/themes/light_theme.css"); 
                      reset(); 
                      break;
        case 'dark': document.getElementById("theme-name").innerHTML="DARK"; 
                     document.getElementById("theme").setAttribute("href","Styling/themes/dark_theme.css");
                     reset(); 
                     break;
        case 'ancient': document.getElementById("theme-name").innerHTML="ANCIENT";
                        document.getElementById("theme").setAttribute("href","Styling/themes/ancient_theme.css");  
                        reset(); 
                        break;
        case 'neon': document.getElementById("theme-name").innerHTML="NEON";
                     document.getElementById("theme").setAttribute("href","Styling/themes/neon_theme.css"); 
                     reset(); 
                     break;
        case 'jungle': document.getElementById("theme-name").innerHTML="JUNGLE";
                       document.getElementById("theme").setAttribute("href","Styling/themes/jungle_theme.css"); 
                       reset(); 
                       break;
    }
})
//Header click handler
headerAction.addEventListener('click',function(headerEvent){
    headerElement=headerEvent.target.id;
    switch(headerElement){
        case 'reset-table':reset();
                           break;
        case 'reset-score': p1=0;
                            p2=0;
                            document.getElementById('wp1').innerHTML=p1; 
                            document.getElementById('wp2').innerHTML=p2; 
                            break;
        case 'menu': 
        case 'top': //the hamburger menu as you have seen is made out from 4 components, container, top, center and bottom
        case 'center': // because of that, the user happens to click on different component so i had to add all of this cases
        case 'bottom':document.getElementById("landing-modal-overlay").style.display="initial";
                    document.getElementById("closing-button").style.display="initial";
                    break;
        case 'player1':break;
        case 'player2':break;
        default:break;
    }
});
//Landing modal click handler
landingModal.addEventListener("click",function(landingModalEvent){
    optionModal=landingModalEvent.target.id;
    switch(optionModal){
        case 'pvp':document.getElementById("landing-modal-overlay").style.display="none"; break;
        case 'pvpc':document.getElementById("landing-modal-overlay").style.display="none"; break;
        case 'online': alert("Comming Soon");break;
        case 'closing-button': document.getElementById("landing-modal-overlay").style.display="none";
        default:break;
    }
})
