// Sample game data
const games = [
    {
        title: "Cyberpunk 2077",
        image: "https://th.bing.com/th/id/OIP.Vw-dChxox6u47MZ1TKTMtAHaEK?w=252&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        downloadLink: "https://s1-p.cybar.xyz/S35/Cyberpunk%202077%20update%202.20%20-%202.21%20[Elamigos%20Update]/chgd.EU-GameDrive.Org.rar"
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
        title: "Spiderman 2 Deluxe Edition",
        image: "44a4bxedxPwGQtSnEzGzdejnCdtrDJqkJ6uqWwGbXmdx5zrjGdHivmr9pyd7x8rVQMgumwGPCfuwseieCg8tuN5jNNeMJPU",
        downloadLink: "https://txtlink.cybar.xyz/gets/Kp5V3bIXPS"
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