let currentPlayer="X";
let p1=0;
let p2=0;
let gameStatus=1;
var table=[[,,],[,,],[,,]];
let moveCounter=0;
let computerTurn=false;
let computerStatus;
const tableElem=document.getElementById("table");
const themeMenu=document.getElementById("theme-nav");
const landingModal=document.getElementById("landing-modal-overlay");
const headerAction=document.getElementById("header");
let coordonate;

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
{ gameStatus=1;
 moveCounter=0;
 currentPlayer='X';
    for (let i=0; i<3;i++)
        {
        for(let j=0;j<3;j++)
                {
                table[i][j]=null;
                document.getElementById(`${i}${j}`).innerHTML=null;
                document.getElementById(`${i}${j}`).style.backgroundColor="initial";
                }
        }
};
function p1Won(){
    p1++;
    gameStatus=0;
    computerTurn=false;
    document.getElementById('wp1').innerHTML=p1; 
    document.getElementById("modal-overlay").setAttribute("style","display:initial;");
    document.getElementById('winner').innerText="Player One Has Won";
};
function p2Won(){
    p2++;
    gameStatus=0;
    computerTurn=false;
    document.getElementById('wp2').innerHTML=p2;
    document.getElementById("modal-overlay").setAttribute("style","display:initial;");
    document.getElementById('winner').innerText="Player Two Has Won";
};
function tie(){
                computerTurn=false;
                document.getElementById("modal-overlay").setAttribute("style","display:initial;");
                document.getElementById('winner').innerText="It's a tie my friend";
                console.log(`Meci egal nr de miscari ${moveCounter}, winner check este ${winningCase}`);
                gameStatus=0;
        };
function gsStatus(){
    if (gameStatus==0) 
                    {
                    alert("Game is over, Press Restart to play again");
                    }
                    else{
                            alert("Please try another square");
                        }
}
//search for a winning move
function winnerCheck()
{   
     for(let i=0;i<3;i++)
        {
            if((table[i][0]==table[i][1])&&(table[i][1]==table[i][2])) //search for winner on rows
                     {   
                         coordonate=i;
                         line="row";
                         return table[i][0];
                        }
            if ((table[0][i]==table[1][i])&&(table[1][i]==table[2][i])) //search for winner on columns
                 {   coordonate=i;
                     line="column";
                     return table[0][i];
                    }
                
        }
        if((table[0][0]==table[1][1])&&(table[1][1]==table[2][2])) //search for winner on first diagonal
                { line="first";
                    return table[0][0];
                }

        if((table[0][2]==table[1][1])&&(table[1][1]==table[2][0])) //search for winner on second diagonal
                { line="second";
                  return table[0][2];
                }
        if(moveCounter==9) //if max number of moves is reached return 0;
            return 0;
    return undefined;
}; 
function wonLine(line,coordonate)
{
    switch(line){
        case line="row":
        document.getElementById(`${coordonate}${1}`).style.backgroundColor="red";
        document.getElementById(`${coordonate}${2}`).style.backgroundColor="red";
        document.getElementById(`${coordonate}${0}`).style.backgroundColor="red";
        break;
        case line="column":
        document.getElementById(`${1}${coordonate}`).style.backgroundColor="red";
        document.getElementById(`${2}${coordonate}`).style.backgroundColor="red";
        document.getElementById(`${0}${coordonate}`).style.backgroundColor="red";
        break;
        case line="first":
        document.getElementById(`${0}${0}`).style.backgroundColor="red";
        document.getElementById(`${1}${1}`).style.backgroundColor="red";
        document.getElementById(`${2}${2}`).style.backgroundColor="red";
        break;
        case line="second":
        document.getElementById(`${0}${2}`).style.backgroundColor="red";
        document.getElementById(`${1}${1}`).style.backgroundColor="red";
        document.getElementById(`${2}${0}`).style.backgroundColor="red";
        break;
    }
};

function gameOver(winningCase){
    switch (winnerCheck(winningCase,coordonate,line))
        {
            case "X": p1Won(); 
            computerTurn==false;
            wonLine(line,coordonate);
            break;
            case "O": p2Won(); 
            computerTurn==false;
            wonLine(line,coordonate) ;
            break;
            case 0: 
            tie(); 
            computerTurn==false;
            break;
            default: break;
        }
    };
function mmGameOver(winningCase){
    switch (winningCase)
        {
            case "X": return -10;
            case "O": return +10;
            case 0: return 0; 
            default: break;
        }
    };
function minmax(table,moveCounter,isComputer)
{   
    let winningCase=winnerCheck();
    let score=mmGameOver(winningCase);
    if ((score==10)||(score==-10)||(score==0)){
        return score;
    }
    if(isComputer==false) //minimizer
    {let bestScore=+Infinity;
        for ( let n=0;n<3;n++) //this for goes through all of the rows
            {for( let m=0;m<3;m++)// this goes through all the columns
                {if (table[n][m]==null) //test if the slot is empty
                    { 
                        table[n][m]="X";
                        let score=minmax(table,moveCounter+1,true);
                        bestScore=Math.min(score, bestScore);
                        table[n][m]=null;
                     }
                }
            }
        console.log(`mini ${bestScore}`);
        return bestScore;
     }else if (isComputer==true)
     {
        let bestScore=-Infinity;
        for ( let n=0;n<3;n++) //this for goes through all of the rows
            {for( let m=0;m<3;m++)// this goes through all the columns
                {if (table[n][m]==null) //test if the slot is empty
                    { 
                        table[n][m]="O";
                        let score=minmax(table,moveCounter+1,false);
                        bestScore=Math.max(score,bestScore);
                        table[n][m]=null;
                     }
                }
            }
        return bestScore;
     }

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
        if((move.innerHTML=='')&&(gameStatus==1))
                    {   move.innerHTML=currentPlayer;
                        let currentCellId=move.id;
                        table[currentCellId[0]][currentCellId[1]]=currentPlayer;
                        moveCounter++;
                        pSwitch();
                        if(moveCounter>4){
                            let valueWinner=winnerCheck();
                            gameOver(valueWinner);
                        }
                        computerTurn=true;
                    }else { 
                        gsStatus();
                     }
 if ((computerTurn==true)&&(computerStatus==true)&&(gameStatus==1)) 
    {
        computer();
    }
    
});
       
function computer()
{   
    let bestScore=-Infinity;
    let bestColumn;
    let bestRow;
    for (let n=0;n<3;n++){//this for goes through all of the rows
       for(let m=0;m<3;m++)// this goes through all the columns
            {if (table[n][m]==null){//test if the slot is empty
                    table[n][m]="O";
                    let score=minmax(table,moveCounter+1,false);
                    table[n][m]=null;
                    if (score>bestScore){
                        bestScore=score;
                        bestRow=n;
                        bestColumn=m;
                        }
                }
            }
        }
    table[bestRow][bestColumn]="O";
    document.getElementById(`${bestRow}${bestColumn}`).innerHTML='O';
    moveCounter++;
    computerTurn=false;
    pSwitch()
    if (moveCounter>4) //test if are enough moves to check if there is a winner;
        {
          let valueWinner=winnerCheck();
          gameOver(valueWinner);
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
