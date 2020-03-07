const listRepos = async username => {
    const repos = await fetch(
        `https://api.github.com/users/${username}/repos`
    )
        .then(res => res.json())
        .catch(error => console.log(error));

    const markup = repos.map(
        repo => `
            <li>
            <a href="${repo.html_url}">${repo.name}</a>
            ${repo.stargazers_count}
        `)
        .join('');

    const content = document.getElementById('content');
    content.innerHTML = `<ul>${markup}</ul>`
};


listRepos('me-v-en');
