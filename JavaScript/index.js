let currentPlayer="X";
let p1=0;
let p2=0;
let gameOver=0;
var table=[[,,],[,,],[,,]];
let moveCounter=0;
let computerMove=false;
let computerStatus;
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
function resetGame(){
    p1=0;
    p2=0;
    document.getElementById('wp1').innerHTML=0; 
    document.getElementById('wp2').innerHTML=0; 
    resetTable();
    
};
function resetTable()
{ gameOver=0;
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
    gameOver=1;
    document.getElementById('wp1').innerHTML=p1; 
    document.getElementById("modal-overlay").setAttribute("style","display:initial;");
    document.getElementById('winner').innerText="Player One Has Won";
    computerMove=false;
    return 1;
};
function p2Won(){
    p2++;
    gameOver=1;
    document.getElementById('wp2').innerHTML=p2;
    document.getElementById("modal-overlay").setAttribute("style","display:initial;");
    document.getElementById('winner').innerText="Player Two Has Won";
    computerMove=false;
    return -1; 
};
function tiechecker(){
                computerMove=false;
                document.getElementById("modal-overlay").setAttribute("style","display:initial;");
                document.getElementById('winner').innerText="It's a tie my friend";
                console.log(`Urmeaza computer ${computerMove} deoarece este egal`);
                gameOver=1;
                return 0;
        };
function validSlot(element){

    if((element=="X")||(element)=="O")
    {
        return false;
    }
    else {return true;}
}
function gsStatus(){
    if (gameOver==1) 
                    {
                    alert("Game is over, Press Restart to play again");
                    }
                    else{
                            alert("Please try another square");
                        }
}
//checks if the move is winner
function winnerCheck()
{       
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
    console.log(moveCounter);
    if((moveCounter>=9)&&(gameOver!=1))
            {tiechecker();}
}; 
//Modal Buttons
document.getElementById("pg-button").addEventListener('click',
    function()
        {
            resetTable();
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
        if((validSlot(move.innerHTML)==true)&&(gameOver==0))
                    {   move.innerHTML=currentPlayer;
                        let currentCellId=move.id;
                        table[currentCellId[0]][currentCellId[1]]=currentPlayer;
                        moveCounter++;
                        pSwitch();
                        computerMove=true;
                        if(moveCounter>4){
                            winnerCheck();
                        }
                    }else { 
                        gsStatus();
                     }
 if (computerStatus==true) 
    {
        computer();
    }
});
function computer()
    { console.log(`Urmeaza computer ${computerMove} in functie si gameOver ${gameOver}`);
        if((computerMove===true)&&(gameOver==0)) //test if is the computer move and if the game is not over
            { 
                for (n=0;n<3;n++) //this for goes through all of the rows
                {   if (computerMove===false) break;
                    for(m=0;m<3;m++)// this goes through all the columns
                        {   if (table[n][m]==null) //test if the slot is empty
                                {
                                    table[n][m]=currentPlayer; 
                                    document.getElementById(`${n}${m}`).innerHTML=currentPlayer;
                                    console.log(`Pc a pus ${currentPlayer} in ${n}${m}`);
                                    computerMove=false;
                                    console.log(`Urmeaza computer ${computerMove} pentru ca tocmai a pus`);
                                    moveCounter++;
                                    pSwitch();
                                }
                            if (computerMove===false) {break};
                        }
                }
                if (moveCounter>4) //test if are enough moves to check if there is a winner;
                    {
                        winnerCheck();
                    }
            }  
};
      
//Theme Changer 
themeMenu.addEventListener("click",function(themeEvent){
    choosenTheme=themeEvent.target.id;
    switch(choosenTheme){
        case 'light': document.getElementById("theme-name").innerHTML="LIGHT"; 
                      document.getElementById("theme").setAttribute("href","Styling/themes/light_theme.css"); 
                      resetTable(); 
                      break;
        case 'dark': document.getElementById("theme-name").innerHTML="DARK"; 
                     document.getElementById("theme").setAttribute("href","Styling/themes/dark_theme.css");
                     resetTable();  
                     break;
        case 'ancient': document.getElementById("theme-name").innerHTML="ANCIENT";
                        document.getElementById("theme").setAttribute("href","Styling/themes/ancient_theme.css");  
                        resetTable();  
                        break;
        case 'neon': document.getElementById("theme-name").innerHTML="NEON";
                     document.getElementById("theme").setAttribute("href","Styling/themes/neon_theme.css"); 
                     resetTable();  
                     break;
        case 'jungle': document.getElementById("theme-name").innerHTML="JUNGLE";
                       document.getElementById("theme").setAttribute("href","Styling/themes/jungle_theme.css"); 
                       resetTable();  
                       break;
    }
})
//Header click handler
headerAction.addEventListener('click',function(headerEvent){
    headerElement=headerEvent.target.id;
    switch(headerElement){
        case 'reset-table':resetTable(); ;
                           break;
        case 'reset-scores': resetGame(); 
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
        case 'pvp':document.getElementById("landing-modal-overlay").style.display="none";
                   resetGame();
                   computerStatus=false;
                   break;
        case 'pvpc':document.getElementById("landing-modal-overlay").style.display="none";
                    computerStatus=true;
                    resetGame();
                    break;
        case 'online': alert("Comming Soon");break;
        case 'closing-button': document.getElementById("landing-modal-overlay").style.display="none";
        default:break;
    }
})
