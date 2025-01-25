// Sample game data with categories
const games = [
    {
        title: "Call of Duty: Modern Warfare",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXj_fTlTubEuAzOjN9elpnazyl6ip_ORXXiw&s",
        downloadLink: "#",
        category: "Action"
    },
    {
        title: "Call of Duty: Black Ops Cold War",
        image: "https://i0.wp.com/gamedrive.org/wp-content/uploads/2023/07/Call-of-Duty-Black-Ops-Cold-War.png?w=270&ssl=1",
        downloadLink: "#",
        category: "Action"
    },
    {
        title: "Cyberpunk 2077",
        image: "https://th.bing.com/th/id/OIP.Vw-dChxox6u47MZ1TKTMtAHaEK?w=252&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        downloadLink: "#",
        category: "RPG"
    },
    {
        title: "Assasins Creed Mirage (2023",
        image: "https://i0.wp.com/gamedrive.org/wp-content/uploads/2024/11/Assassins-Creed-Mirage.webp?w=270&ssl=1",
        downloadLink: "https://txtlink.cybar.xyz/gets/65EKf3priE",
        category: "RPG"
    },
    {
        title: "Forza Horizon 5",
        image: "https://i0.wp.com/gamedrive.org/wp-content/uploads/2022/10/image_2022-10-03_085626863.png?w=359&ssl=1",
        downloadLink: "#",
        category: "Racing"
    },
    {
        title: "The Witcher 3",
        image: "https://i0.wp.com/gamedrive.org/wp-content/uploads/2022/12/The-Witcher-3-Wild-Hunt.png?w=270&ssl=1",
        downloadLink: "#",
        category: "Adventure"
    },
    {
        title: "FIFA 23",
        image: "https://i0.wp.com/gamedrive.org/wp-content/uploads/2023/08/FIFA-23.jpg?w=270&ssl=1",
        downloadLink: "https://txtlink.cybar.xyz/gets/PP6n72Bgrw",
        category: "Sports"
    },
    {
        title: "Minecraft",
        image: "https://i0.wp.com/gamedrive.org/wp-content/uploads/2023/02/Minecraft-Dungeons.png?w=270&ssl=1",
        downloadLink: "https://txtlink.cybar.xyz/gets/GjRcKn6Cgt",
        category: "Sandbox"
    }
];

// Initialize categories
function initializeCategories() {
    const categoriesContainer = document.getElementById('categoriesContainer');
    if (!categoriesContainer) return;

    // Get unique categories
    const categories = [...new Set(games.map(game => game.category))];

    // Create a section for each category
    categories.forEach(category => {
        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';

        // Add category title
        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category;
        categorySection.appendChild(categoryTitle);

        // Create games grid for this category
        const gamesGrid = document.createElement('div');
        gamesGrid.className = 'games-grid';

        // Filter games by category
        const categoryGames = games.filter(game => game.category === category);

        // Add games to the grid
        categoryGames.forEach(game => {
            const gameCard = document.createElement('a');
            gameCard.className = 'game-card';
            gameCard.href = game.downloadLink;

            gameCard.innerHTML = `
                <img src="${game.image}" class="game-image" alt="${game.title}">
                <div class="game-title">${game.title}</div>
            `;

            gamesGrid.appendChild(gameCard);
        });

        categorySection.appendChild(gamesGrid);
        categoriesContainer.appendChild(categorySection);
    });
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    initializeCategories();
    searchGames(); // Keep search functionality
});

// Search functionality
function searchGames() {
    const searchInput = document.getElementById('searchInput');
    const gameCards = document.querySelectorAll('.game-card');
    
    searchInput.addEventListener('input', debounce((e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        gameCards.forEach(card => {
            const title = card.querySelector('.game-title').textContent.toLowerCase();
            card.style.display = title.includes(searchTerm) ? 'block' : 'none';
        });
    }, 300));
}

// Debounce function for search
function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    initializeGames();
    searchGames();
});

function trackDownload(game) {
    let downloadedGames = JSON.parse(localStorage.getItem('downloadedGames')) || [];
    if (!downloadedGames.some(g => g.title === game.title)) {
        game.downloadDate = new Date().toLocaleString(); // Add download date
        downloadedGames.push(game);
        localStorage.setItem('downloadedGames', JSON.stringify(downloadedGames));
    }
}