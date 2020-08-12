class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i -= 1) {
      const card1 = this.cards[i];
      const j = Math.floor(Math.random() * (i + 1));
      const card2 = this.cards[j];
      this.cards[i] = card2;
      this.cards[j] = card1;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    let sameCard;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      sameCard = true;
    } else sameCard = false;
    return sameCard;
  }

  isFinished() {
    return (this.pairsGuessed === this.cards.length / 2);
  }
}