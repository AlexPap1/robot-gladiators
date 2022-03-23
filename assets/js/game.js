window.alert("This is an alert! JavaScript is Running!");


// this creates a function named "fight"

function fight () {
    window.alert("The fight has begun!");
}

fight();

var playerName = window.prompt("What is your robot's name?");
    console.log("Our robot's name is " + playerName);
var playerHealth = 100;
 if (playerHealth > 0) {
     console.log("Your player is still alive!");
 }
var playerAttack = 10;
var playerMoney = 10;

//(or console.log(playerName, playerAttack, playerHealth);)
// Note the lack of quotation marks around playernmae

var enemyNames = ["R2-D2", "T-800", "HAL-9000"];
console.log(enemyNames.length);

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0){

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight! Pussy!");
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
        else {
            fight();
        }
    }
    else if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney = playerMoney + 20;
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        playerHealth = playerHealth - enemyAttack;
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
        }
        else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    else {
        window.alert("You need to choose a valid option... idiot");
    }}
};

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
    }
    else {
        window.alert("You died bro... sorry :(");
        break;    
    }
}

//window.alert(playerName);
//console.log(playerName);
//console.log("This logs a string, good for leaving yourself a message")
//this will do math and log 20
//console.log(10 + 10);

///=var name = "your name";
//console.log(name);
