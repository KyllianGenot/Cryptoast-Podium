document.addEventListener("DOMContentLoaded", function () {
    fetch('assets/json/podiumData.json')
        .then(response => response.json())
        .then(podiumData => {
            const podiumContainer = document.getElementById('podium');

            if (!podiumContainer) {
                console.error('Podium container not found.');
                return;
            }

            podiumData.forEach(data => {
                const spot = document.createElement('div');
                spot.className = 'podium-spot';
                spot.setAttribute('data-rank', data.rank);

                spot.addEventListener('click', () => {
                    if (data.link) {
                        window.open(data.link, '_blank');
                    }
                });

                spot.innerHTML = `
                    <img class="spot-logo" src="${data.logo}" alt="${data.subtitle}" loading="lazy">
                    <div class="rank-label">#${data.rank}</div>
                    <div class="spot-content">
                        <div class="spot-subtitle">${data.subtitle}</div>
                        <div class="spot-description">${data.description}</div>
                    </div>
                `;
                podiumContainer.appendChild(spot);
            });

            adjustPodiumHeights();
        })
        .catch(error => console.error('Error loading JSON data:', error));

    const closeBannerBtn = document.querySelector('.close-banner');
    const banner = document.querySelector('.banner');
    const header = document.querySelector('.main-header');
    const body = document.body;

    if (closeBannerBtn && banner) {
        closeBannerBtn.addEventListener('click', () => {
            banner.style.opacity = "0";
            banner.style.height = "0";
            banner.style.display = 'none';
            header.style.top = "0";
            body.classList.add('banner-closed');
        });
    } else {
        console.warn("Banner or close button not found.");
    }

    function adjustPodiumHeights() {
        const podiumSpots = document.querySelectorAll('.podium-spot');
        if (!podiumSpots.length) {
            console.warn('No podium spots found for height adjustment.');
            return;
        }

        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            let largestHeight = Math.max(
                ...Array.from(podiumSpots).map(spot => spot.scrollHeight + 20)
            );

            podiumSpots.forEach(spot => {
                spot.style.height = `${largestHeight}px`;
            });
        }

        else 
        {
            let smallestHeight = Math.min(
                ...Array.from(podiumSpots).map(spot => spot.scrollHeight + 20)
            );
    
            podiumSpots.forEach(spot => {
                const rank = parseInt(spot.getAttribute('data-rank'), 10);
                switch (rank) {
                    case 1:
                        spot.style.height = `${smallestHeight * 1.5}px`;
                        break;
                    case 2:
                        spot.style.height = `${smallestHeight * 1.2}px`;
                        break;
                    case 3:
                        spot.style.height = `${smallestHeight}px`;
                        break;
                    default:
                        console.warn(`Unknown rank found: ${rank}`);
                }
            });
        }
    }
});