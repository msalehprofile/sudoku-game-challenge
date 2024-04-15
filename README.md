<h1>Suduko</h1>

<h2>Task :space_invader:</h2>
<ul>
    <li>I was set a challenge to create a full
    functioning browser based game using HTML, CSS/SCSS and TypeScript. My favourite (and only) game that I play is Sudoku, so I decided I would give this a go.</li>
</ul>

<h2>Challanges :ant:</h2>
<ul>
    <li>A challenge that I faced pretty early on was that the interactivity that I had applied when the Sudoko grid what in the index.html file, no longer worked when I changed it to being inputted when a button was clicked. To get around this I added an event listener so only when I click a button the query selectors look for the class/id.</li>
    <li> The biggest bug that I faced was the error calculation. It works as intended at  first and adds +1 to the error score with every mistake made, but then every time you press 'delete' it adds 1 to the increment added. (1 delete = +2, 2 delete = +3). I amended the calculation a myriad of ways, but couldn't get it working as I wanted.
    </li>
</ul>

<h2>Progression :white_check_mark: </h2>
<ul>
    <li> I originally had a 'Finish Game' button, which once the player pressed it took you to a different page that tells you when level you completed and the errors you made. However I didn't like that you could press it before you had actually finished the game. Therefore I decided to add a function that calculates how many empty boxes are left, and only once this equalled 0 would the end screen showed. This meant I could remove the 'Finish Game' button and it felt a lot smoother to play.</li>
    <li> My original goal was to have one game per level. Once I had finished this I decided to stretch myself and create arrays of 3 games per level, and get Math.random to randomly select the game that is shown when a player. 
</ul>

<h2>Game functionality :1234:</h2>
<ul>
    <li> Once the play selects the level they want, a Sudoku grid is display, showing one of the random games stored. When you click any of the boxes it highlists the no-repeat zone in purple. These are the boxes where you need to make sure none of the numbers are the same. If a player then clicks on the correct number it gets inputted in blue.If the number selected is incorrect, the number is still inputted, but this time it is red and a point is added to the penalties score.</li>
    <li> Once the grid is successfully completed you are taken to another display which tells the player which level they finished and how many penalties they recieved, along with a button to take them back home. 
</ul>
