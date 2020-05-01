export{winnerCheck, pSwitch, resetGame, resetTable, moveCounter,gameOver,computerTurn,currentPlayer,gsStatus};
import {moveCounter, table, gameStatus} from './index.js';
import{minmaxCounter} from './ComputerPlayer.js';
let p2=0;
let p1=0;
let coordonate;
let line;
let computerTurn=false;
let currentPlayer="X";
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
                { 
                    line="first";
                    return table[0][0];
                }

        if((table[0][2]==table[1][1])&&(table[1][1]==table[2][0])) //search for winner on second diagonal
                { 
                    line="second";
                    return table[0][2];
                }
        if(moveCounter==9||minmaxCounter==9) //if max number of moves is reached return 0;
            return 0;
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
            computerTurn=false;
            wonLine(line,coordonate);
            break;
            case "O": p2Won(); 
            computerTurn=false;
            wonLine(line,coordonate) ;
            break;
            case 0: 
            tie(); 
            computerTurn=false;
            break;
            default: break;
        }
    };
function pSwitch(){
    if(currentPlayer=="X")
        {
            currentPlayer="O";
        } else  if (currentPlayer=="O")
                    {
                        currentPlayer="X";
                    }
};
function resetGame(){
    let p1=0;
    let p2=0;
    document.getElementById('wp1').innerHTML=0; 
    document.getElementById('wp2').innerHTML=0; 
    resetTable();
    
};
function resetTable()
{
    let gameStatus=true;
    let moveCounter=0;
    let currentPlayer='X';
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
    let gameStatus=false;
    let computerTurn=false;
    document.getElementById('wp1').innerHTML=p1; 
    document.getElementById("modal-overlay").setAttribute("style","display:initial;");
    document.getElementById('winner').innerText="Player One Has Won";
};
function p2Won(){
    p2++;
    let gameStatus=false;
    let computerTurn=false;
    document.getElementById('wp2').innerHTML=p2;
    document.getElementById("modal-overlay").setAttribute("style","display:initial;");
    document.getElementById('winner').innerText="Player Two Has Won";
};
function tie(){
                let computerTurn=false;
                document.getElementById("modal-overlay").setAttribute("style","display:initial;");
                document.getElementById('winner').innerText="It's a tie my friend";
                let gameStatus=false;
        };
function gsStatus(){
    if (gameStatus==false) 
                    {
                    alert("Game is over, Press Restart to play again");
                    }
                    else{
                            alert("Please try another square");
                        }
}