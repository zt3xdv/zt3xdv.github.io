const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light');
    themeIcon.textContent = document.body.classList.contains('light') ? 'dark_mode' : 'brightness_6';
});

const languageColors = {
    JavaScript: '#f1e05a',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Python: '#3572A5',
    Shell: '#89e051',
    Other: '#586069'
};

async function loadProjects() {
    try {
        const username = 'zt3xdv';
        console.log('Fetching repos for:', username);
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=10`);
        console.log('Response status:', response.status);
        if (!response.ok) {
            throw new Error('Failed to fetch repos: ' + response.status);
        }
        const repos = await response.json();
        console.log('Repos fetched:', repos.length);

        const projectsList = document.getElementById('projects-list');

        for (const repo of repos) {
            const projectDiv = document.createElement('div');
            projectDiv.className = 'project';

            const title = document.createElement('h3');
            title.textContent = repo.name;
            title.style.cursor = 'pointer';
            title.addEventListener('click', () => openReadme(repo.full_name));
            projectDiv.appendChild(title);

            const description = document.createElement('p');
            description.textContent = repo.description || 'No description';
            projectDiv.appendChild(description);

            const languagesDiv = document.createElement('div');
            languagesDiv.className = 'languages';
            projectDiv.appendChild(languagesDiv);

            try {
                // Small delay to avoid rate limit
                await new Promise(resolve => setTimeout(resolve, 200));
                const languagesResponse = await fetch(`https://api.github.com/repos/${repo.full_name}/languages`);
                if (languagesResponse.ok) {
                    const languages = await languagesResponse.json();

                    const totalBytes = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0);
                    if (totalBytes > 0) {
                        const sortedLanguages = Object.entries(languages).sort((a, b) => b[1] - a[1]);

                        const barContainer = document.createElement('div');
                        barContainer.className = 'language-bar';
                        languagesDiv.appendChild(barContainer);

                        const labelsContainer = document.createElement('div');
                        labelsContainer.className = 'language-labels';
                        languagesDiv.appendChild(labelsContainer);

                        sortedLanguages.forEach(([lang, bytes]) => {
                            const percentage = (bytes / totalBytes * 100).toFixed(1);
                            const color = languageColors[lang] || languageColors.Other;

                            const barSegment = document.createElement('div');
                            barSegment.className = 'language-segment';
                            barSegment.style.width = `${percentage}%`;
                            barSegment.style.backgroundColor = color;
                            barContainer.appendChild(barSegment);

                            const label = document.createElement('span');
                            label.className = 'language-label';
                            label.textContent = `${lang}: ${percentage}%`;
                            label.style.color = color;
                            labelsContainer.appendChild(label);
                        });
                    } else {
                        languagesDiv.textContent = 'No languages detected';
                    }
                } else {
                    languagesDiv.textContent = 'Languages not available';
                }
            } catch (error) {
                languagesDiv.textContent = 'Error loading languages';
            }

            const link = document.createElement('a');
            link.href = repo.html_url;
            link.textContent = 'View on GitHub';
            link.target = '_blank';
            projectDiv.appendChild(link);

            projectsList.appendChild(projectDiv);
        }
    } catch (error) {
        console.error('Error loading projects:', error);
        alert('Error loading projects: ' + error.message);
        const projectsList = document.getElementById('projects-list');
        projectsList.innerHTML = '<p>Error loading projects. Please try again later.</p>';
    }
}

async function openReadme(fullName) {
    try {
        const response = await fetch(`https://api.github.com/repos/${fullName}/readme`);
        if (!response.ok) {
            throw new Error('README not found');
        }
        const data = await response.json();
        const markdown = atob(data.content);
        const html = marked.parse(markdown);

        const mainContent = document.getElementById('main-content');
        const readmeView = document.getElementById('readme-view');
        const readmeContent = document.getElementById('readme-content');

        readmeContent.innerHTML = html;
        mainContent.style.display = 'none';
        readmeView.style.display = 'block';

        document.getElementById('back-btn').addEventListener('click', () => {
            readmeView.style.display = 'none';
            mainContent.style.display = 'block';
        });
    } catch (error) {
        alert('README not found or error loading.');
    }
}

window.onload = loadProjects;
