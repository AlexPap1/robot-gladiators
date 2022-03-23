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

var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
         window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store?");
                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
            window.alert("You died bro... sorry :(");
            break;    
        }
    }
    endGame();
};

var endGame = function() {
    if (playerHealth > 0) {
        window.alert("That was easy")
    }
    else {
        window.alert("So, the game is over. What a truly foolish end...")
    }
};
//WHY IS THERE NEVER ENOUGH MONEY ?? NO BITCHES??
var shop = function() {
    var shopOptionPrompt = window.prompt("REFILL, UPGRADE, or LEAVE?");
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if(playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money! Broke ass bitch.");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player;s attack by 6 for 7 dollars.");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enoguh money! Broke ass bitch.");
            }
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Fix it.");
            shopOptionPrompt();
            break;
    }
};

var playAgainConfirm = window.confirm("Down for another round?");

    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Wowwww... Really? See ya chump.");
    }

startGame();

//window.alert(playerName);
//console.log(playerName);
//console.log("This logs a string, good for leaving yourself a message")
//this will do math and log 20
//console.log(10 + 10);

///=var name = "your name";
//console.log(name);
