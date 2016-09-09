// // Deck of cards
// // 13 * 4
// // Deck object
// // Player object
//
// function CardDeck(){
//   this.ranks = ["ace_of", "2_of", "3_of", "4_of", "5_of", "6_of", "7_of", "8_of", "9_of", "10_of", "jack_of", "queen_of", "king_of"]
//   this.suit = ["_clubs", "_diamonds", "_hearts", "_spades"]
//   this.newdeck = function newdeck(){
//       var cards = [];
//       for(var i=0; i < this.suit.length; i++){
//         for(var j=0; j < this.ranks.length; j++){
//          cards.push(this.ranks[j] + this.suit[i]);
//          return cards;
//         }
//       }
//   }
//   this.shuffle = function shuffle(newdeck){
//     for (var i =0; i< this.newdeck.length; i++){
//       var j= Math.floor(Math.random() * this.newdeck.length);
//       var temp= this.newdeck[i];
//       this.newdeck[i]=this.newdeck[j];
//       this.newdeck[j] = temp;
//     }
//   }
//   this.dealcard = function deal(){
//     var i = Math.floor(Math.random() * this.newdeck.length);
//     singleCard = this.newdeck.pop(this.newdeck[i]);
//     return singleCard;
//   }
//   this.reset = function reset(){
//     this.newdeck = [];
//   }
//   return CardDeck;
// }
//
// //player constructor
//
// function Player(name, PlayerDeck){
//   this.playername = name;
//   this.hand = [];
//   this.takecard = function takecard(){
//     var newcard = PlayerDeck.dealcard();
//     this.hand.push(newcard);
//   }
//   this.discard = function discard(i){
//     this.hand.pop(this.hand[i]);
//   }
//   return Player;
// }
//
// //Game
//
// // var ourCards = new CardDeck()
// // ourCards.newdeck();
// // ourCards.shuffle();
//
// // var Jeff = new Player("Jeff", ourCards)
//
// //
// // console.log(Jeff.hand)
// // ---------------------jquery start------------------------------
