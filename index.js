// --------------------card deck object --------------------

var cardDeck = {
  newdeck : function (){
    ranks = ["ace_of", "2_of", "3_of", "4_of", "5_of", "6_of", "7_of", "8_of", "9_of", "10_of", "jack_of", "queen_of", "king_of"];
    suit = ["_clubs", "_diamonds", "_hearts", "_spades"];
      var cards = [];
      for(var i=0; i < suit.length; i++){
        for(var j=0; j < ranks.length; j++){
         cards.push(ranks[j] + suit[i]);
        }
      }
      return cards;
  },
  shuffle : function (){
    var cards= [];
    for (var i =0; i< cardDeck.newdeck().length; i++){
      var j= Math.floor(Math.random() * cardDeck.newdeck().length);
      var temp= cardDeck.newdeck()[i];
      cardDeck.newdeck()[i]=cardDeck.newdeck()[j];
      cards.push(cardDeck.newdeck()[i]);
      cardDeck.newdeck()[j] = temp;
      cards.push(cardDeck.newdeck()[j]);
    }
    return cards;
  },
  dealcard : function (){
    var i = Math.floor(Math.random() * cardDeck.shuffle().length);
    singleCard = cardDeck.shuffle().pop(cardDeck.shuffle()[i]);
    return singleCard;
  },
  reset : function (){
    this.newdeck = [];
  }
}
cardDeck.newdeck();
cardDeck.shuffle();
console.log("break")

// -----------------start player ----------------

var player = {
  name : "Player 1",
  hand : [],
  takeCard : function(){
    var newCard = cardDeck.dealcard();
    player.hand.push(newCard);
  },
  discard : function(i, j){
    player.hand.splice([i],[j])
  }
}
// I think it is returning doubles for some reason!
// --------tests----------
// player.takeCard();
// player.takeCard();
// player.takeCard();
// player.takeCard();
// console.log(player.hand)
// player.discard(2, 1);
console.log(player.hand)
