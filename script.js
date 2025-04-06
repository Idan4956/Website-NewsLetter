const apiUrl = 'https://your-real-api-endpoint.com/articles'; // Replace with the actual API endpoint

async function fetchArticles() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const articles = await response.json();
        displayArticles(articles);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

const sampleArticles = [
    {
        "title": "Article 1",
        "content": "This is the content of article 1.",
        "image": "https://via.placeholder.com/300x200"
    },
    {
        "title": "Article 2",
        "content": "This is the content of article 2.",
        "image": "https://via.placeholder.com/300x200"
    },
    {
        "title": "NVIDIA RTX 5070: The Next Big Thing in Gaming!",
        "content": `Hey gamers and tech fans! NVIDIA just dropped their brand-new RTX 5070 graphics card, and it looks like a really awesome upgrade for anyone wanting smoother, better-looking games!`,
        "image": "https://via.placeholder.com/300x200"
    }
];

function displayArticles(articles) {
    const articlesContainer = document.getElementById('articles');
    articlesContainer.innerHTML = ''; // Clear any existing articles

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');

        const imageElement = document.createElement('img');
        imageElement.src = article.image;
        imageElement.alt = article.title;

        const titleElement = document.createElement('h2');
        titleElement.textContent = article.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = article.content.substring(0, 100) + '...';

        const linkElement = document.createElement('a');
        linkElement.textContent = "Read More";
        linkElement.href = `article.html?title=${encodeURIComponent(article.title)}&content=${encodeURIComponent(article.content)}`;

        articleElement.appendChild(imageElement);
        articleElement.appendChild(titleElement);
        articleElement.appendChild(contentElement);
        articleElement.appendChild(linkElement);
        articlesContainer.appendChild(articleElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayArticles(sampleArticles);
});