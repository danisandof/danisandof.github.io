fetch("https://api.github.com/users/danisandof/repos").then(function(e){e.json().then(function(e){for(repo of(e.splice(2,1),e)){const e=document.createElement("li");e.innerHTML='<div class="uk-card uk-card-default uk-card-body"><div class="card-loader"><div class="loader"><div></div><div></div><div></div></div></div><div class="uk-card-badge uk-label">Github</div><h3 class="uk-card-title">'+repo.name+"</h3><p>"+repo.description+"</p><a href="+repo.html_url+">Visitar</a></div>",document.getElementById("repos").appendChild(e)}})}).catch(function(e){console.log(e)}),window.addEventListener("load",function(){const e=document.getElementById("left-loader"),d=document.getElementById("cover-loader");if(screen.width<=1024){e.remove(),d.remove();const o=document.querySelectorAll(".card-loader");o.forEach(e=>{e.remove()})}else setTimeout(()=>{e.remove(),d.remove();const o=document.querySelectorAll(".card-loader");o.forEach(e=>{e.remove()})},5e3)});