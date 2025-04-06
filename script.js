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
        "content": `Hey gamers and tech fans! You know how you wait for the next cool thing in the world of video games? Well, NVIDIA just dropped their brand-new RTX 5070 graphics card, and it looks like a really awesome upgrade for anyone wanting smoother, better-looking games!

Think of your computer's graphics card as the engine that makes your games look amazing. The RTX 5070 is like a brand new, more powerful engine compared to the older RTX 4070.

What's the Big Deal?

So, what makes the RTX 5070 so exciting?

New Brains! It uses NVIDIA's latest "Blackwell" technology, which is like having a smarter and faster brain for processing all the graphics in your games. The RTX 4070 had a slightly older "Ada Lovelace" brain.
More Muscle! It has more "CUDA cores" – think of these as tiny workers that do all the heavy lifting to draw what you see on the screen. More workers mean things can get done faster!
Super Speedy Memory! The RTX 5070 has a new type of memory called GDDR7. It's like having a super-wide highway for information to travel, making everything load and run much quicker than the GDDR6X memory in the RTX 4070.
Making Light Look Real! If you've heard of "ray tracing" – the tech that makes lights and shadows in games look super realistic – the RTX 5070 has improved "Ray Tracing cores" that can do this even better than before!
AI Magic for Smoother Games! Remember DLSS? It's like a clever trick that uses AI to make your games run smoother without losing much picture quality. The RTX 5070 has the newest version, DLSS 4, which can make games look and play even better than the DLSS 3.5 on the RTX 4070. It's like having a smart helper make your game run like a dream!

RTX 5070 vs. RTX 4070: The Showdown!

Imagine you're choosing between two cool toys. Here's how the RTX 5070 and RTX 4070 stack up:

Feature	RTX 5070	RTX 4070
Brain Power	Newer and Faster	Still Pretty Good
Memory Speed	Super Speedy!	Fast
Ray Tracing	Even More Realistic!	Very Realistic
AI Game Booster	Latest and Greatest!	Really Good!
Power Needed	A Bit More	A Little Less
Starting Price	Around $549 USD	Around $599 USD (initially)

So, Which One Should You Pick?

Want the newest and best for your gaming rig? If you're building a brand new computer or really want the latest tech to play your games at high settings with smooth frame rates, the RTX 5070 looks like a fantastic choice! You'll get better performance and the cool new DLSS 4.
Already have an RTX 4070? If your RTX 4070 is still running your games great, you might not need to rush out and upgrade right away. But if you're craving that extra bit of power and want to try out DLSS 4, the 5070 could be tempting!
Looking for a good deal? If you can find the RTX 4070 at a much lower price now, it's still a very capable graphics card that will let you play most games really well. It's a solid option if you're trying to save some money.

The Bottom Line:

The NVIDIA RTX 5070 seems like a really exciting new graphics card that offers a nice jump in performance over the RTX 4070. With its faster memory, improved ray tracing, and the magic of DLSS 4, it's shaping up to be a great choice for gamers everywhere! Just remember to check the prices and make sure your computer has enough power for this new beast! Happy gaming!`
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