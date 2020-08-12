const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', event => {
  memoryGame.shuffleCards();
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.add("turned");
      console.log(card.getAttribute('data-card-name'));
      memoryGame.pickedCards.push(card);
      // const pickedCard = card;
      // .getAttribute('data-card-name');
      console.log(memoryGame.pickedCards);
      if (memoryGame.pickedCards.length === 2) {
        const pickedCardsName = memoryGame.pickedCards.map(cardName => {
          console.log(cardName.getAttribute('data-card-name'));
          return cardName.getAttribute('data-card-name');
        });
        console.log(pickedCardsName);
        const sameCard = memoryGame.checkIfPair(pickedCardsName[0], pickedCardsName[1]);
        if (sameCard) {
          if (memoryGame.isFinished()) document.querySelector('h1').innerHTML = 'You won!!!';
          console.log('mesmas cartas');
          memoryGame.pickedCards.forEach(card => card.classList.add("blocked"));
          document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed;
          memoryGame.pickedCards = [];
        } else {
          console.log('cartas diferentes');
          setTimeout(function () {
            memoryGame.pickedCards.forEach(card => card.classList.remove("turned"));
            memoryGame.pickedCards = [];
          }, 2000);
          // memoryGame.pickedCards.forEach(card => card.classList.remove("turned"));
        }

        document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked;
      }
      // }
      // console.log(`Card clicked: ${card}`);
    });
  });
});
