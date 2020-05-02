import {winnerCheck, pSwitch, resetGame, resetTable,gameOver,currentPlayer,gsStatus} from './Functions.js';
import {computer} from './ComputerPlayer.js';
export {moveCounter, gameStatus, table};
let table=[[,,],[,,],[,,]];
let computerStatus=false;
let gameStatus=true;
let computerTurn=false;
let moveCounter=0;

const tableElem=document.getElementById("table");
const themeMenu=document.getElementById("theme-nav");
const landingModal=document.getElementById("landing-modal-overlay");
const headerAction=document.getElementById("header");
//Table Squares
tableElem.addEventListener('click',function(event){
        let move=event.target;
        if((move.innerHTML=='')&&(gameStatus==true))
                    {   move.innerHTML=currentPlayer;
                        let currentCellId=move.id;
                        table[currentCellId[0]][currentCellId[1]]=currentPlayer;
                        moveCounter++;
                        if(moveCounter>4){
                            let valueWinner=winnerCheck();
                            gameOver(valueWinner);
                        }
                    pSwitch();
                    computerTurn=true;
                    }else { 
                        gsStatus();
                     }
 if ((computerTurn==true)&&(computerStatus==true)&&(gameStatus==true)) 
    {
        computer();
        if (moveCounter>4) //test if are enough moves to check if there is a winner;
        {
          let valueWinner=winnerCheck();
          gameOver(valueWinner);
         }
        pSwitch();
        computerTurn=false;
        moveCounter++;
    }
    
});
//Theme Changer 
themeMenu.addEventListener("click",function(themeEvent){
    let choosenTheme=themeEvent.target.id;
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
    let headerElement=headerEvent.target.id;
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
        case 'player1':
                       document.getElementById('name-p1').value=document.getElementById('player1').innerHTML;
                       document.getElementById('player1').innerHTML='';
                       document.getElementById('name-changer-p1').style.display="inline";
                       let set1=document.getElementsByClassName('name-button-p1');
                        set1[0].addEventListener('click',function(){
                            let nameValue=document.getElementById('name-p1').value;
                            if(nameValue!=''){
                                    document.getElementById('player1').innerHTML=document.getElementById('name-p1').value;
                                    document.getElementById('name-changer-p1').style.display="none";
                                    }else {
                                            alert('It is required to insert a name');
                                            }    
                        });          
                        break;
        case 'player2':
                       document.getElementById('name-p2').value=document.getElementById('player2').innerHTML;
                       document.getElementById('player2').innerHTML='';
                       document.getElementById('name-changer-p2').style.display="inline";
                       let set2=document.getElementsByClassName('name-button-p2');
                        set2[0].addEventListener('click',function(){
                            let nameValue=document.getElementById('name-p2').value;
                            if(nameValue!=''){
                                    document.getElementById('player2').innerHTML=document.getElementById('name-p2').value;
                                    document.getElementById('name-changer-p2').style.display="none";
                                    }else {
                                            alert('It is required to insert a name');
                                            }    
                        });
                       break; 
        default:break;
    }
});
//Landing modal click handler
landingModal.addEventListener("click",function(landingModalEvent){
    let optionModal=landingModalEvent.target.id;
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
});
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