// This file fetches articles from an external API and displays them on the webpage.

const articlesContainer = document.getElementById('articles-container');

async function fetchArticles() {
    try {
        const response = await fetch('https://api.example.com/articles'); // Replace with the actual API endpoint
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
    articlesContainer.innerHTML = ''; // Clear existing articles
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');
        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        articlesContainer.appendChild(articleElement);
    });
}

document.addEventListener('DOMContentLoaded', fetchArticles);