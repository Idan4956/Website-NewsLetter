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

function displayArticles(articles) {
    const articlesContainer = document.getElementById('articles');
    articlesContainer.innerHTML = ''; // Clear any existing articles

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');

        const titleElement = document.createElement('h2');
        titleElement.textContent = article.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = article.content;

        articleElement.appendChild(titleElement);
        articleElement.appendChild(contentElement);
        articlesContainer.appendChild(articleElement);
    });
}

document.addEventListener('DOMContentLoaded', fetchArticles);

const sampleArticles = [
    {
        "title": "Article 1",
        "content": "This is the content of article 1."
    },
    {
        "title": "Article 2",
        "content": "This is the content of article 2."
    }
];

displayArticles(sampleArticles);