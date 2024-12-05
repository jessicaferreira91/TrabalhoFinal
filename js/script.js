$(document).ready(function () {

    $('.section-title').click(function () {
        var content = $(this).next('.section-content');

        content.slideToggle(300, function () {
            if (content.is(':visible')) {
                content.css({
                    'display': 'flex',
                    'flex-direction': 'column'
                });
            } else {
                content.css('display', 'none');
            }
        });
    });

    function fetchGitHubProjects() {

        const username = 'dhDSouza';
        const url = `https://api.github.com/users/${username}/repos`;

        fetch(url)
            .then(response => response.json())
            .then(data => {

                const projectsList = $('#projects-list');
                data.forEach(repo => {

                    const projectItem = `
                        <div class="project-item">
                            <h3>${repo.name}</h3>
                            <p>${repo.description || 'Sem descrição'}</p>
                            <a href="${repo.html_url}" target="_blank">Ver Projeto</a>
                        </div>
                    `;
                    projectsList.append(projectItem);
                });
            })
            .catch(error => console.error('Erro ao carregar os repositórios:', error));
    }

    fetchGitHubProjects();

})