export{toggleInfo,computer,gsStatus,WON,resetGame,resetTable,computerTurn,gameStatus,currentPlayer};
import {table} from './index.js';
let p2=0;
let p1=0;
let currentPlayer="X";
let moveCounter=0;
let computerTurn=false;
let gameStatus=true;
let line;
let coordonate;
//----------------------------------COMPUTER PLAYER FUNCTIONS---------------------------------
function computer()
{   let bestScore=-Infinity;
    let bestColumn;
    let bestRow;
    for (let n=0;n<3;n++){
       for(let m=0;m<3;m++)
            { if (table[n][m]==null)
                {
                    table[n][m]="O";
                    moveCounter++;
                    let score=minmax(table,moveCounter,false);
                    table[n][m]=null;
                    moveCounter--;
                    if (score>bestScore)
                        {
                            bestScore=score;
                            bestRow=n;
                            bestColumn=m;
                        }
                }
            }
        }
    table[bestRow][bestColumn]="O";
    document.getElementById(`${bestRow}${bestColumn}`).innerHTML='O';
    computerTurn=false;
}; 

//-----MIN MAX ALGORITHM --------///
function minmax(table,moveNo,isComputer)
{ 
    let winner=winnerCheck();
    let score;
    if(winner=="X") {score=-10;}
    else if(winner=="O") {score=+10;}
        else if(winner==0) {score=0;}
    if((score==10)||(score==-10)||(score==0))
        return score;
        else if(moveNo==9) return 0;
    if (isComputer==false)
        {
            let bestScore=+Infinity;
            for ( let n=0;n<3;n++)
                {
                    for( let m=0;m<3;m++)
                        {
                            if (table[n][m]==null)
                                {   
                                    table[n][m]="X";
                                    let score=minmax(table,moveNo+1,true);
                                    bestScore=Math.min(score, bestScore);
                                    table[n][m]=null;
                                }
                        }
                }
            return bestScore;   
        }
    if (isComputer==true)
     {
        let bestScore=-Infinity;
        for ( let n=0;n<3;n++)
            { 
                for( let m=0;m<3;m++)
                {
                    if (table[n][m]==null)
                        {
                            table[n][m]="O";
                            let score=minmax(table,moveNo+1,false);
                            bestScore=Math.max(score,bestScore);
                            table[n][m]=null;
                        }
                }
            }
        return bestScore;
     }
 };
 // -----FUNCTION FOR SCORE MIN MAX --------
//---------------------------------------FUNCTIONS------------------------
function WON()
{
    moveCounter++;
    pSwitch();
    if(moveCounter>4)
    {
        let winner=winnerCheck();
        if (winner!=null)
            {
                gameOver(winner,line,coordonate);
            }  
    }
};
function winnerCheck()
{   
     for(let h=0;h<3;h++)
        {  
            if((table[h][0]==table[h][1])&&(table[h][1]==table[h][2])&&(table[h][2]!='')&&(table[h][0]!=null)) //search for winner on rows
                        {   
                            coordonate=h;
                            line="row";
                            return table[h][0];
                         }
            if((table[0][h]==table[1][h])&&(table[1][h]==table[2][h])&&(table[2][h]!='')&&(table[0][h]!=null)) //search for winner on columns
                       { 
                        coordonate=h;
                        line="column";
                        return table[0][h];
                        }
        }
        if((table[0][0]==table[1][1])&&(table[1][1]==table[2][2])&&(table[0][0]!=null)) //search for winner on first diagonal
            {
                line="first";
                return table[0][0];
            }
        if((table[0][2]==table[1][1])&&(table[1][1]==table[2][0])&&(table[0][2]!=null)) //search for winner on second diagonal
            {
                line="second";
                return table[0][2];
            }
        if(moveCounter==9)//if max number of moves is reached return 0;
           {
             return 0;
           }
};
function gameOver(winner,line,coordonate,){
    switch (winner)
        {
            case "X":   computerTurn=false;
                        p1Won(); 
                        wonLine(line,coordonate);
                        break;
            case "O":   computerTurn=false;
                        p2Won(); 
                        wonLine(line,coordonate) ;
                        break;
            case 0:     computerTurn=false;
                        tie();
                        break;
            default: break;
        }
};
function p1Won(){
    p1++;
    gameStatus=false;
    computerTurn=false;
    moveCounter=0;
    document.getElementById('wp1').innerHTML=p1; 
    document.getElementById("modal-overlay").setAttribute("style","display:initial;");
    document.getElementById('winner').innerText="Player One Has Won";
};
function p2Won(){
    p2++;
    gameStatus=false;
    computerTurn=false;
    moveCounter=0;
    document.getElementById('wp2').innerHTML=p2;
    document.getElementById("modal-overlay").setAttribute("style","display:initial;");
    document.getElementById('winner').innerText="Player Two Has Won";
};
function tie(){
    gameStatus=false;
    computerTurn=false;
    moveCounter=0;
    document.getElementById("modal-overlay").setAttribute("style","display:initial;");
    document.getElementById('winner').innerText="It's a tie my friend";
    
};
function wonLine(line,coordonate)
{
    switch(line){
        case line="row":
        document.getElementById(`${coordonate}${1}`).classList.add("winning-line");
        document.getElementById(`${coordonate}${2}`).classList.add("winning-line");
        document.getElementById(`${coordonate}${0}`).classList.add("winning-line");
        break;
        case line="column":
        document.getElementById(`${1}${coordonate}`).classList.add("winning-line");
        document.getElementById(`${2}${coordonate}`).classList.add("winning-line");
        document.getElementById(`${0}${coordonate}`).classList.add("winning-line");
        break;
        case line="first":
        document.getElementById(`${0}${0}`).classList.add("winning-line");
        document.getElementById(`${1}${1}`).classList.add("winning-line");
        document.getElementById(`${2}${2}`).classList.add("winning-line");
        break;
        case line="second":
        document.getElementById(`${0}${2}`).classList.add("winning-line");
        document.getElementById(`${1}${1}`).classList.add("winning-line");
        document.getElementById(`${2}${0}`).classList.add("winning-line");
        break;
        default:break;
    }
    
};
function gsStatus(){
    if (gameStatus==false) 
                    {
                    alert("Game is over, Press Restart to play again");
                    }
                    else{   
                            computerTurn=false;
                            alert("Please try another square");
                            
                        }
};
function pSwitch(){
    if(currentPlayer=="X")
        {   computerTurn=true;
            currentPlayer="O";
        } else if (currentPlayer=="O")
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
    gameStatus=true;
    moveCounter=0;
    currentPlayer='X';
    for (let i=0; i<3;i++)
        {
        for(let j=0;j<3;j++)
                {
                table[i][j]=null;
                document.getElementById(`${i}${j}`).innerHTML=null;
                document.getElementById(`${i}${j}`).classList.remove("winning-line");
                }
        }
};
function toggleInfo(x)
{
    if (x.style.display=='none')
        {
            x.style.display='initial';
        }else {
            x.style.display='none'
        }
}