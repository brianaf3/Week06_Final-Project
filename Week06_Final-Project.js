// class for the players
class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = [];
    }

    playCard() {
        return this.hand.pop()
    }

    points() {
        this.score += 1;
    }
}
//creating players
const player1 = new Player("Briana");
const player2 = new Player("Violet");
//console.log(player1, player2)



// class for the cards
class Deck {
    constructor() {
        this.cardNumbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        this.suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
        this.deck = [];
    }
    // create deck
    createDeck() {
        // for loop iterates over suits
        for(let s = 0; s < this.suits.length; s++) {
            //  console.log(this.suit[s]);

        // for loop iterates over cardNumbers
        for(let n = 0; n < this.cardNumbers.length; n++) {
            //  console.log(this.cardNumber[n]);
            const suit = this.suits[s]; 
            const cardNumber = this.cardNumbers[n];
            const rank = this.ranks[n];
            // push card numbers in the loop
            this.deck.push({suit, cardNumber, rank})
            }
        }
        console.log('printing deck', this.deck);
    }
    // shuffles the deck
    shuffle() {
        this.deck = this.deck.sort(() => Math.random() - 0.5)
    }
    describe() {
        return `${this.cardNumber} of ${this.suits}}`
    }
    // deals cards  
    dealCards(player1,player2) {
        while (this.deck.length > 0) {
            player1.hand.push(this.deck.pop());
            player2.hand.push(this.deck.pop());
        }
    } 
}

let gameDeck = new Deck();
gameDeck.createDeck(); // allows the next lines to run
gameDeck.shuffle();
gameDeck.dealCards(player1,player2);
//console.log(gameDeck);


class Game {
    // methods

    // compare cards
    compareCards() {
        for (let round = 0; round < 26; round++) {
            console.log(player1.name, player1.hand[round]);
            console.log(player2.name, player2.hand[round]);
            // condititional statments to check which card is bigger
            if (player1.hand[round].rank > player2.hand[round].rank) {
                //add to player1 score
                player1.score += 1
                console.log(`${player1.name} score ${player1.score}`);
                console.log(`${player2.name} score ${player2.score}`);
                console.log(`${player1.name} is the winner!
                
                `);
            } else if(player2.hand[round].rank > player1.hand[round].rank) {
                player2.score += 1
                console.log(`${player1.name} score ${player1.score}`);
                console.log(`${player2.name} score ${player2.score}`);
                console.log(`${player2.name} is the winner!
                
                `);
            } else {
                console.log(`${player1.name} score ${player1.score}`);
                console.log(`${player2.name} score ${player2.score}`);
                console.log(`${player1.name} and ${player2.name} tied this round!
                
                `);
            }
        }
    }
    // determine a winner
    
    determineWinner() {
        //check to see if player1 score > player2 or tied
        if (player1.score > player2.score) {
            console.log(`${player1.name} score ${player1.score}`);
            console.log(`${player2.name} score ${player2.score}`);
            console.log(`${player1.name} is the winner!`);

        } else if (player2.score > player1.score) {
            console.log(`${player1.name} score ${player1.score}`);
            console.log(`${player2.name} score ${player2.score}`);
            console.log(`${player2.name} is the winner!`)

        } else {
            console.log(`${player1.name} score ${player1.score}`);
            console.log(`${player2.name} score ${player2.score}`);
            console.log(`${player1} and ${player2} tied the game!`);
        } 
    }
}

let playGame = new Game();
playGame.compareCards();
playGame.determineWinner();







