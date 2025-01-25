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