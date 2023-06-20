fetch("https://api.github.com/users/danisandof/repos").then(function (response) {
    response.json().then(function (repos) {
        repos.splice(2, 1);
        for (repo of repos) {
            const repoitem = document.createElement("li");
            repoitem.innerHTML = "<div class=\"uk-card uk-card-default uk-card-body\"><h3 class=\"uk-card-title\">" + repo.name + "</h3><p>" + repo.description + "</p><a href=" + repo.html_url + ">Visitar</a></div>";
            document.getElementById("repos").appendChild(repoitem);
        }
    });
}).catch(function (err) {
    console.log(err);
});