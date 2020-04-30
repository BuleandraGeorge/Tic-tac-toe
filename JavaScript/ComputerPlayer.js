import {pSwitch, winnerCheck, gameOver, computerTurn, moveCounter} from './Functions.js';
import {table} from './index.js';
export {computer, minmax};
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