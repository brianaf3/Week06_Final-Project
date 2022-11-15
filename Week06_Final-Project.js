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
const player1 = new Player('Briana');
const player2 = new Player('Violet');
console.log(player1, player2)



// class for the cards
class Card {
    constructor(cardNumber, suit) {
        this.cardNumber = cardNumber;
        this.suit = suit;
    }

    describe() {
        return `${this.cardNumber} of ${this.suit}}`
    }
}


// class for the decks
class Deck {
    constructor() {
        this.cards = [];
    }
    // shuffles the deck
    shuffle() {
        this.cards = this.cards.sort(() => Math.random() - 0.5)
    }

    // deals cards  
    dealCards(player1,player2) {
        while (this.cards.length > 0) {
            player1.hand.push(this.cards.pop());
            player2.hand.push(this.cards.pop());
        }
    }
}

// creating a deck
const deck = new Deck();

// declaring card variables
const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const cardNumber = ['1', '2', '3', '4', '5', '6', '7', '8',
'9', '10', '11', '12', '13'];


//creating a new card instance loop
suits.forEach( (suit) => {
    for (let i = 1; i < 14; i++) {
        deck.cards.push(new Card(i, `${i} of ${suit}`));
    }
});

console.log(deck);