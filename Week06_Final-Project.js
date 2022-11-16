// declaring card variables
const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const cardNumber = ['1', '2', '3', '4', '5', '6', '7', '8',
'9', '10', '11', '12', '13'];
// how do i change 11, 12, & 13 to J, Q, K


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
const player1 = new Player(prompt ('Enter player name'));
const player2 = new Player(prompt ('Enter player name'));
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




// Playing the game

//creating a new card instance loop
suits.forEach( (suit) => {
    for (let i = 1; i < 14; i++) {
        deck.cards.push(new Card(i, `${i} of ${suit}`));
    }
});

// creating a deck
const deck = new Deck();
// dealing shuffled hands to players
deck.shuffle();
deck.dealCards(player1,player2);
console.log(player1,player2);

// players taking turns
while (player1.hand.length > 0) {
    let p1CurrentCard = player1.playCard();
    let p2CurrentCard = player2.playCard();
    console.log(p1CurrentCard, p2CurrentCard);
}

if (p1CurrentCard > p2CurrentCard) {
    let p1Score = player1.points();
    console.log(p1Score);
}