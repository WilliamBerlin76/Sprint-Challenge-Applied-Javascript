// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response)
    response.data.articles.javascript.forEach(item => {
        const newCard = articleCard(item);
        cardsContainer.appendChild(newCard);
    })
    response.data.articles.bootstrap.forEach(item => {
        const newCard = articleCard(item);
        cardsContainer.appendChild(newCard);
    })
    response.data.articles.technology.forEach(item => {
        const newCard = articleCard(item);
        cardsContainer.appendChild(newCard);
    })
    response.data.articles.jquery.forEach(item => {
        const newCard = articleCard(item);
        cardsContainer.appendChild(newCard);
    })
    response.data.articles.node.forEach(item => {
        const newCard = articleCard(item);
        cardsContainer.appendChild(newCard);
    })
})
.catch(error => {
    console.log('woops', error)
});

const cardsContainer = document.querySelector('.cards-container');
function articleCard(cardInfo) {
    const card = document.createElement('div'),
          headline = document.createElement('div'),
          author = document.createElement('div'),
          imageContainer = document.createElement('div'),
          image = document.createElement('img'),
          byAuthor = document.createElement('span');

    //Structure
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(image);
    author.appendChild(byAuthor);

    //Classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');

    //Content
    headline.textContent = cardInfo.headline;
    image.src = cardInfo.authorPhoto;
    byAuthor.textContent = cardInfo.authorName;


    return card;
}