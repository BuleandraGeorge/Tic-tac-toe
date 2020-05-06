<h1>TIC TAC TOE</h1>
<p>First when I started to write the game, I was doing it for practice and after a while I found how to add the feature to play
against computer and I chose it for the second milestone.
If you beat the computer, send me a printscreen on buleandrageorge@gmail.com.
</p>

<h1>UX</h1>
<p>The website is made for everyone that want to have fun with friends or to exercices their Tic Tac Toe skills against computer.
So, you can play against other people (face to face for the moment) or against computer and soon online.

First when you land on the website you will see a menu where you can choose between: Player Vs Player, Player vs Computer or Online.
Also you can change the theme of game from Change Theme button or see more features of the game by hovering "I" button from top-right corner.
During the game you can change the name of the players, reset the table and scores and change the theme.</p>
<h2>Features</h2>
 The game is designed to be played against humans, and computers. Also you can change the theme or the name of the players.
 Every time when the user performs an action he receives a feedback like: shadow text, displaying different modals for finishing the game or for irrelevant actions performed, changing the background of the element selected and others
<h3>Existing Features
<p>
<strong>Player Vs Player</strong> - allows to play against humans.<br>
<strong>Player vs Computer </strong> - allows to play against computer.<br>
<strong>Online </strong> - it will allow to play against other humans online when it will be avaible.<br>
<strong>Change Theme </strong>- allows to change between 5 different themes; Light (default), Dark, Ancient, Neon and Jungle.<br>
<strong>'I' button </strong> - offers informations about the game.<br>
<strong>Reset Scores,Reset table </strong> - first of them allows to reset entire game, and second to reset only the table without scores.<br>
<strong>Change Name  </strong>- allows to change the name of players from "P1" to the desired one by clicking on the actual name then type the name and then press the "Set" button provided in that state of action.<br>
<strong>Others </strong>- every time when the game is over a modal tells to users what is the end of game and emphasize the winning line with a particular color.
</p>

<h3>Features Left to Implement </h3>
<p>For the near future I want to add the Online mode.<br>
   Transition between theme and from modals to table to be smooth and more pleasent.<br>
   Also to improve the design of the themes.
   To change the shape of the cursor into "X" or "O".
</p>
<h2>Technologies Used</h2>

To build the game I used html, css for design and javascript for functionalities.

<h2>Testing</h2>
 <p>During the development of game I found different bugs like:<br>
 - when the game was over the players could fill the remaining empty squares .<br>
 - to put in a filled square.<br>
 - to enter a empty name.<br>
 - the computer wasn't doing the best choises to win the game.<br>
</p>
<h2>Deployment</h2>
<p> During the Deployment of the website the only issue that I founded it is to upload the pictures and after that to link them
in my project, so I chose to insert the sourse link instead of saving them localy. <br>
The website is uploaded on GitHub and is located here:<a src='https://github.com/BuleandraGeorge/Tic-tac-toe'>GitHub Link</a>.
To see the code you just have to click on the files.<br>
 The link to website is <a href='https://buleandrageorge.github.io/Tic-tac-toe/'>Link</a> or if you want run the code locally, you have to acces the link provided above and:
- in the top-right corner you will see a green button named GitPod, you have press on it, after couple seconds GitPod page will be loaded,
- now you have to go in the terminal and type "python3 -m http.server" (without quotes), to do that you can press on the "Terminal" button in top-left of screen or CTRL+SHIFT+` shortkey,
- a new port (port 8000) will be open, the port can be seen in "Open Ports", and for port 8000 you have to press "Open Browser".
</p>

<h1>Credits</h1>

<h2>Media</h2>
<p>The photos used in this site were obtained from:<br>
<a href='https://i.ytimg.com/vi/rufWuHkmohY/maxresdefault.jpg'>Background of jungle theme</a><br>
<a href='https://i.pinimg.com/originals/83/17/83/831783ba0ce34bd5aea083a2bfa63233.jpg'>Background of ancient theme</a></p>
<h2>Acknowledgements<h2>
<p>To create a Player vs Computer mode I was inspired by my mentor Guido Cecilio; he recommended me 2 links where to find more
informations about minmax algorithm and how to implement it:<br><a href='https://www.youtube.com/watch?v=l-hh51ncgDI'>Algorithms Explained – minimax and alpha-beta pruning</a> and <a href=https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-1-introduction/;>Minimax Algorithm in Game Theory | Set 1 (Introduction)</a>
</p>