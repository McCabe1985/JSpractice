const diceRoll = () => Math.floor(Math.random()*10)+1;

let player = {
    cunning: 0,
    brutality: 0,
    conniving: 0,
    goons: 0,
    maxGoons: 5,
    maxEnergy: 10,
    currentEnergy: 10,
    cash: 0,
};


//hire goon action, attach to button in hud, create div displaying text and a button to close window.
function hireGoon() {
    let result
    //check that player meets the requirements to hire
    if (player.goons < player.maxGoons && player.currentEnergy >=2) {
       
        player.goons++;
        player.currentEnergy -= 2;
        result = console.log(`Hired a goon! You now have ${player.goons} goons and ${player.energy} energy`);

    //if requirements aren't met
    } else {
        result = console.log(`You cannot hire more goons, You have ${player.goons} goons and ${player.energy} energy`);
    }
     
    return result
         
};

//this function will train player stats, similar to hiring goons though costs money as well as energy and there is no max value

function trainCunning() {
    let result
    if (player.currentEnergy >=5 && player.cash >= player.cunning*40){
        player.cunning++;
        player.currentEnergy-=5;
        player.cash - player.cunning * 40;
        result = console.log(`You have grown more cunning! Cunning rating is now ${player.cunning}. you have £${player.cash} left.`);
    } else {
        result = console.log(`You cannot train your cunning right now. Cunning rating is ${player.cunning}.`)
    }
    return result;
}

function trainBrutality() {
    let result
    if (player.currentEnergy >=5 && player.cash >= player.brutality*40){
        player.brutality++;
        player.currentEnergy-=5;
        player.cash - player.brutality * 40;
        result = console.log(`You have grown more brutal! Brutality rating is now ${player.brutality}. you have £${player.cash} left.`);
    } else {
        result = console.log(`You cannot train your brutality right now. Brutality rating is ${player.brutality}.`)
    }
    return result;
}

function trainConniving() {
    let result
    if (player.currentEnergy >=5 && player.cash >= player.conniving*40){
        player.conniving++;
        player.currentEnergy-=5;
        player.cash - player.conniving * 40;
        result = console.log(`You have grown more conniving! Conniving rating is now ${player.conniving}. you have £${player.cash} left.`);
    } else {
        result = console.log(`You cannot train your conniving right now. Conniving rating is ${player.conniving}.`)
    }
    return result;
}


// training energy, much like above but costs all of the player's energy for a big buff
function trainEnergy() {
    let result
    if (player.currentEnergy == player.maxEnergy && player.cash >= player.energy + 1 * 70){
        player.Energy+= 10;
        player.currentEnergy = 0;
        player.cash - player.energy + 1 * 70;
        result = console.log(`Your energy has increased! Maximum Energy rating is now ${player.maxEnergy}. you have £${player.cash} left in the bank.`);
    } else {
        result = console.log(`You cannot train your conniving right now. Maximum Energy rating is ${player.maxEnergy}.`)
    }
    return result;
}


//do jobs gain money, 3 jobs, one based on each attribute. loop through the relevant player attribute, throwing a dice each time
//every dice that shows a 6 or more is a "success" add the selected amount of goons to that and times by the job rating to generate
//cash

function cunningJob(numOfGoons){
    //empty array stores the results of the diceRoll function for later analysis.
    let diceResults = [];
    //loops over the players cunning attribute, throwing a dice for each point in it.A bit like the World of Darkness roleplaying games.
    for (let i = 0; i < player.cunning.length; i++);
    if (player.cunning.length == i) {
    //This should, I hope, push the result of diceRoll into the empty diceResults array
        diceResults.push(diceRoll());
    } else {
    //Check the diceResults array for any entry with a value of 6 or more
    }
    //add the number generated to the player's cash
    player.cash += numOfGoons * successes;
    //store the above variable to be called up in the console.log without adding it the cash again.
    let profit = numOfGoons * successes;
    return console.log (`You made £${profit} on this job!`);
};