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