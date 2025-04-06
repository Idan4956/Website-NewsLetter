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
        "content": "This is the content of article 1."
    },
    {
        "title": "Article 2",
        "content": "This is the content of article 2."
    },
    {
        "title": "NVIDIA RTX 5070: The Next Big Thing in Gaming!",
        "content": `Hey gamers and tech fans! You know how you wait for the next cool thing in the world of video games? Well, NVIDIA just dropped their brand-new RTX 5070 graphics card, and it looks like a really awesome upgrade for anyone wanting smoother, better-looking games!`
    }
];

function displayArticles(articles) {
    const articlesContainer = document.getElementById('articles');
    articlesContainer.innerHTML = ''; // Clear any existing articles

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');

        const titleElement = document.createElement('h2');
        titleElement.textContent = article.title;

        const linkElement = document.createElement('a');
        linkElement.textContent = "Read More";
        linkElement.href = `article.html?title=${encodeURIComponent(article.title)}&content=${encodeURIComponent(article.content)}`;

        articleElement.appendChild(titleElement);
        articleElement.appendChild(linkElement);
        articlesContainer.appendChild(articleElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayArticles(sampleArticles);
});