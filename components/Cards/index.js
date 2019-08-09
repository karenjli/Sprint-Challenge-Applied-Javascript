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
const cardContainer = document.querySelector(".cards-container");
console.log(cardContainer);

const articles = axios.get ('https://lambda-times-backend.herokuapp.com/articles')
    .then ((response) =>{
        console.log(response);
        let bootstrap = response.data.articles.bootstrap.map (item => item);
        let javascript = response.data.articles.javascript.map(item=> item);
        let jquery = response.data.articles.jquery.map(item=> item);
        let node = response.data.articles.node.map(item=> item);
        let tech= response.data.articles.technology.map(item=> item);
        let final = bootstrap.concat(javascript, jquery, node, tech);
        console.log(final);

        const finalResult = final.forEach (item => {
            cardContainer.appendChild(ArticleComp(item));
        });
        //console.log(finalResult);
        //cardContainer.appendChild(finalResult);
    
    })
    .catch((err) => {
        console.log(err);
    });

    //console.log(data);


function ArticleComp (data) {
    //createElement
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imgDiv = document.createElement('div');
    let img = document.createElement('img');
    let authorName = document.createElement('span');

    //class name
    card.classList.add ('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgDiv.classList.add('img-container');

    //textContent
    headline.textContent = data.headline;
    img.src = data.authorPhoto;
    authorName.textContent = `By ${data.authorName}`;

    //appendChild
    imgDiv.appendChild (img);
    author.appendChild(imgDiv);
    author.appendChild(authorName);
    card.appendChild(headline);
    card.appendChild(author);
    return card;
}


