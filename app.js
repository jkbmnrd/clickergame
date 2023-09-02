function fiftyFifty(coinWager) {
    if (chips >= coinWager) {
        chips -= coinWager;
        let coinFlip = Math.floor(Math.random() * cFlipOdds);
        if (coinFlip >= 1) {
            let winnings = (cFlipReward * coinWager);
            chips += winnings;
            totWins += (winnings -= coinWager);
            totWin.textContent = `Total Winnings: ${totWins}`;
            chipsDisplay.textContent = `Chips: ${chips}`;
            if (chips === 3 && upgradesUnlocked === 0) {
                upgradesUnlocked === 1;
            }
            return;
        } else {
            totLoss += coinWager;
            totLos.textContent = `Total Losses: ${totLoss}`;
            chipsDisplay.textContent = `Chips: ${chips}`;
            if (chips === 0) {
                chips++;
                chipsDisplay.textContent = `Chips: ${chips}`;
            }
        }
    }
};

function newChip() {
    chips++;
    chipsDisplay.textContent = `Chips: ${chips}`;
};

function upgrades(variableToChange, typeOfUpgrade, upgradeCost) {
    // variableToChange is the variable being changed, ie CPCW
    // typeOfUpgrade determines which line this runs!
    // the upgrade cost is the number of chips the upgrade will cost

    // Upgrade type zero: 50% increase
    if (typeOfUpgrade === 0) {
        variableToChange *= 1.5;
        chips -= upgradeCost;
        return variableToChange;
    } else {
        alert("This didn't work!");
    }
};

// Initialize game variables
let chips = 0;
let cFlipOdds = 2;
let cFlipReward = 2;
let totWins = 0;
let totLoss = 0;

// TF Variables 
let upgradesUnlocked = 0;
let firstChip = 0;

// Counter Displays
totWin.textContent = `Total Winnings: ${totWins}`;
totLos.textContent = `Total Losses: ${totLoss}`;
totFlipRew.textContent = `CPCW: ${cFlipReward}`;
chipsDisplay.textContent = `Chips: ${chips}`;

 // Pickup first chip, increment display counter, and create coinflip minigame
 if (firstChip === 0) {
    findChip.addEventListener('click', () => {
        newChip();
        chipsDisplay.textContent = `Chips: ${chips}`;
        firstChip = 1;
        });
};

// Coinflip Minigame
coinWag1.addEventListener('click', () => {
    let coinWager = 1;
    fiftyFifty(1);
});
coinWag5.addEventListener('click', () => {
    let coinWager = 5;
    fiftyFifty(5);
});

// Upgrades
upCoinRew1.addEventListener('click', () => {
    if (chips >= 5) {
        upgrades(cFlipReward, 0, 4);
        totFlipRew.textContent = `CPCW: ${cFlipReward}`;
        chipsDisplay.textContent = `Chips: ${chips}`;
        upCoinRew1.style.display = 'none';
    };
});

upCoinRew2.addEventListener('click', () => {
    if (chips >= 50) {
        upgrades(cFlipReward, 0, 49);
        totFlipRew.textContent = `CPCW: ${cFlipReward}`;
        chipsDisplay.textContent = `Chips: ${chips}`;
        upCoinRew2.style.display = 'none';
    };
});

upCoinRew3.addEventListener('click', () => {
    if (chips >= 500) {
        upgrades(cFlipReward, 0, 499);
        totFlipRew.textContent = `CPCW: ${cFlipReward}`;
        chipsDisplay.textContent = `Chips: ${chips}`;
        upCoinRew3.style.display = 'none';
    };
});

upCoinWager1.addEventListener('click', () => {
    if (chips >= 25) {
        coinWag5.style.display = 'inline';
        chips -= 24;
        chipsDisplay.textContent = `Chips: ${chips}`;
        upCoinWager1.style.display = 'none';
    }
})