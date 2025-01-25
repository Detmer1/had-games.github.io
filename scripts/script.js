// Sample game data
const games = [
    {
        title: "Cyberpunk 2077",
        image: "https://th.bing.com/th/id/OIP.Vw-dChxox6u47MZ1TKTMtAHaEK?w=252&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        downloadLink: "https://s1-p.cybar.xyz/S35/Cyberpunk%202077%20update%202.20%20-%202.21%20[Elamigos%20Update]/chgd.EU-GameDrive.Org.rar"
    },
    {
        title: "Elden Ring Deluxe Edition",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLnCw46kaxOCrhYcZ2Tl-UjMznzysAFnYaiw&s",
        downloadLink: "https://txtlink.cybar.xyz/views/Opr2S97KKX"
    },
    {
        title: "Call of Duty: Modern Warfare",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXj_fTlTubEuAzOjN9elpnazyl6ip_ORXXiw&s",
        downloadLink: "https://txtlink.cybar.xyz/views/CZCo827Q5U"
    },
    {
        title: "Call of Duty: Black Ops Cold War",
        image: "https://i0.wp.com/gamedrive.org/wp-content/uploads/2023/07/Call-of-Duty-Black-Ops-Cold-War.png?w=270&ssl=1",
        downloadLink: "https://txtlink.cybar.xyz/views/RpJJ4zEW3h"
    },
    {
        title: "Spider Man Miles Morales",
        image: "https://th.bing.com/th/id/OIP.GmLDGCmL3wCEBX8vUGNh_wHaEK?w=319&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        downloadLink: "https://txtlink.cybar.xyz/gets/S50iKoMbjl"
    },
    {
        title: "Ninja Gaiden",
        image: "https://i0.wp.com/gamedrive.org/wp-content/uploads/2025/01/NINJA-GAIDEN-2-Black.webp?w=270&ssl=1",
        downloadLink: "https://txtlink.cybar.xyz/views/hZinCnAVYx"
    },
    {
        title: "Marvels Wolverine",
        image: "https://i0.wp.com/gamedrive.org/wp-content/uploads/2024/07/Marvels-Wolverine.webp?w=270&ssl=1",
        downloadLink: "https://txtlink.cybar.xyz/gets/92FnDpkGhk"
    },
    {
        title: "Spiderman 2 Deluxe Edition",
        image: "https://i0.wp.com/gamedrive.org/wp-content/uploads/2022/12/Marvels-SpiderMan-Remastered.png?w=270&ssl=1",
        downloadLink: "https://txtlink.cybar.xyz/gets/Kp5V3bIXPS"
    },
    {
        title: "The Witcher 3",
        image: "https://i0.wp.com/gamedrive.org/wp-content/uploads/2022/12/The-Witcher-3-Wild-Hunt.png?w=270&ssl=1",
        downloadLink: "https://txtlink.cybar.xyz/views/sXOnD0nuen"
    },
    {
        title: "Fifa 23",
        image: "https://i0.wp.com/gamedrive.org/wp-content/uploads/2023/08/FIFA-23.jpg?w=270&ssl=1",
        downloadLink: "https://txtlink.cybar.xyz/gets/PP6n72Bgrw"
    },
    {
        title: "Forza Horizon 5",
        image: "https://i0.wp.com/gamedrive.org/wp-content/uploads/2022/10/image_2022-10-03_085626863.png?w=359&ssl=1",
        downloadLink: "https://txtlink.cybar.xyz/gets/RqhU1rpFh4"
    },
    {
        title: "Minecraft Dungeons",
        image: "https://i0.wp.com/gamedrive.org/wp-content/uploads/2023/02/Minecraft-Dungeons.png?w=270&ssl=1",
        downloadLink: "https://txtlink.cybar.xyz/gets/GjRcKn6Cgt"
    },
    {
        title: "Assasins Creed Mirage (2023)",
        image: "https://i0.wp.com/gamedrive.org/wp-content/uploads/2024/11/Assassins-Creed-Mirage.webp?w=270&ssl=1",
        downloadLink: "https://txtlink.cybar.xyz/gets/65EKf3priE"
    },



    // Add more game objects as needed
];

// Initialize games grid
function initializeGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    
    games.forEach(game => {
        const gameCard = document.createElement('a');
        gameCard.className = 'game-card';
        gameCard.href = game.downloadLink;
        
        gameCard.innerHTML = `
            <img src="${game.image}" class="game-image" alt="${game.title}">
            <div class="game-title">${game.title}</div>
        `;
        
        gamesGrid.appendChild(gameCard);
    });
}

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

// Track downloaded games
function trackDownload(game) {
    let downloadedGames = JSON.parse(localStorage.getItem('downloadedGames')) || [];
    if (!downloadedGames.some(g => g.title === game.title)) {
        game.downloadDate = new Date().toLocaleString(); // Add download date
        downloadedGames.push(game);
        localStorage.setItem('downloadedGames', JSON.stringify(downloadedGames));
    }
}

// Display downloaded games
function displayDownloads() {
    const downloadsGrid = document.getElementById('downloadsGrid');
    const noDownloadsMessage = document.getElementById('noDownloadsMessage');
    const downloadedGames = JSON.parse(localStorage.getItem('downloadedGames')) || [];

    if (downloadedGames.length === 0) {
        noDownloadsMessage.style.display = 'block';
        downloadsGrid.innerHTML = '';
    } else {
        noDownloadsMessage.style.display = 'none';
        downloadsGrid.innerHTML = '';

        downloadedGames.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            gameCard.innerHTML = `
                <img src="${game.image}" class="game-image" alt="${game.title}">
                <div class="game-title">${game.title}</div>
                <div class="download-date">Downloaded: ${game.downloadDate}</div>
                <button class="remove-btn" onclick="removeDownload('${game.title}')">×</button>
            `;

            downloadsGrid.appendChild(gameCard);
        });
    }
}

// Remove a downloaded game
function removeDownload(title) {
    let downloadedGames = JSON.parse(localStorage.getItem('downloadedGames')) || [];
    downloadedGames = downloadedGames.filter(game => game.title !== title);
    localStorage.setItem('downloadedGames', JSON.stringify(downloadedGames));
    displayDownloads(); // Refresh the list
}

// Filter games by category
function filterDownloads() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const downloadedGames = JSON.parse(localStorage.getItem('downloadedGames')) || [];
    const filteredGames = categoryFilter === 'all' 
        ? downloadedGames 
        : downloadedGames.filter(game => game.category === categoryFilter);

    const downloadsGrid = document.getElementById('downloadsGrid');
    downloadsGrid.innerHTML = '';

    filteredGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <img src="${game.image}" class="game-image" alt="${game.title}">
            <div class="game-title">${game.title}</div>
            <div class="download-date">Downloaded: ${game.downloadDate}</div>
            <button class="remove-btn" onclick="removeDownload('${game.title}')">×</button>
        `;

        downloadsGrid.appendChild(gameCard);
    });
}

// Search downloaded games
function searchDownloads() {
    const searchTerm = document.getElementById('searchDownloadsInput').value.toLowerCase();
    const downloadedGames = JSON.parse(localStorage.getItem('downloadedGames')) || [];
    const filteredGames = downloadedGames.filter(game => 
        game.title.toLowerCase().includes(searchTerm)
    );

    const downloadsGrid = document.getElementById('downloadsGrid');
    downloadsGrid.innerHTML = '';

    filteredGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <img src="${game.image}" class="game-image" alt="${game.title}">
            <div class="game-title">${game.title}</div>
            <div class="download-date">Downloaded: ${game.downloadDate}</div>
            <button class="remove-btn" onclick="removeDownload('${game.title}')">×</button>
        `;

        downloadsGrid.appendChild(gameCard);
    });
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('my-downloads.html')) {
        displayDownloads();
        document.getElementById('categoryFilter').addEventListener('change', filterDownloads);
        document.getElementById('searchDownloadsInput').addEventListener('input', searchDownloads);
    }
});