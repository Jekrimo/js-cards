// Deck of cards
// 13 * 4
// Deck object
// Player object

function CardDeck(){
  this.cards = [];
  this.ranks = ["A of", "2 of", "3 of", "4 of", "5 of", "6 of", "7 of", "8 of", "9 of", "10 of", "J of", "Q of", "K of"]
  this.suit = [" Clubs", " Dimonds", " Hearts", " Spades"]
  this.newdeck = function newdeck(){
      for(var i=0; i < this.suit.length; i++){
        for(var j=0; j < this.ranks.length; j++){
         this.cards.push(this.ranks[j] + this.suit[i]);
        }
      }
  }
  this.shuffle = function shuffle(){
    for (var i =0; i<this.cards.length; i++){
      var j= Math.floor(Math.random() * this.cards.length);
      var temp= this.cards[i];
      this.cards[i]=this.cards[j];
      this.cards[j] = temp;
    }
  }
  this.dealcard = function deal(){
    var i = Math.floor(Math.random() * this.cards.length);
    singleCard = this.cards.pop(this.cards[i]);
    return singleCard;
  }
  this.reset = function reset(){
    this.cards = [];
  }
}

//player constructor

function Player(name, PlayerDeck){
  this.playername = name;
  this.hand = [];
  this.takecard = function takecard(){
    var newcard = PlayerDeck.dealcard();
    this.hand.push(newcard);
  }
  this.discard = function discard(i){
    this.hand.pop(this.hand[i]);
  }
}

//Game

var ourCards = new CardDeck()
ourCards.newdeck();
ourCards.shuffle();

var Jeff = new Player("Jeff", ourCards)
Jeff.takecard();
Jeff.takecard();
Jeff.takecard();
Jeff.discard();
Jeff.takecard();
Jeff.takecard();
console.log(Jeff.hand)
