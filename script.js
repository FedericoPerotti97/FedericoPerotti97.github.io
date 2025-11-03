window.addEventListener("load", function() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
  
    if (page === "" || page === "index.html") {
      loadHomePage();
    } else if (page === "pagina1.html") {
      loadPagina1();
    } else if (page === "pagina2.html") {
      loadPagina2();
    } else {
      console.log("Pagina non riconosciuta.");
    }
});

function loadHomePage(){
  const main = document.getElementById("Container");
  main.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/NBA_Game.jpg/960px-NBA_Game.jpg?20111125043947)";
  main.style.backgroundSize = "cover";
  main.style.backgroundPosition = "center";
}

function loadPagina1(){
    const squadre = document.querySelectorAll(".squadra");
    squadre.forEach(function(squadra) {
        squadra.addEventListener("click", function(){
            const teameName = squadra.childNodes[3].textContent;
            alert("Forza "+teameName+"!!!");
        });
    });
}

function loadPagina2(){
    const leggende = document.querySelectorAll(".leggenda");
    leggende.forEach(function(leggenda) {
        leggenda.addEventListener("click", function(){
            const name = leggenda.childNodes[1].childNodes[1].textContent.toLowerCase().replace(" ","-");
            window.open("https://www.nba.com/news/history-nba-legend-"+name, '_blank').focus();
        });
    });
}