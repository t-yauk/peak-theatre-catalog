
function load_catalog(){

  populate();

}

async function populate(){

  const requestURL = "https://t-yauk.github.io/peak-theatre-catalog/collection.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const movies = await response.json();

  const movieList = movies.movies;

  //console.log(movieList);

  populateHours(movieList);

}


function populateHours(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  var genre = "";

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){
      genre = (obj[i].genre[0]);
    }else if((obj[i].genre).length == 2){
      genre = (obj[i].genre[0]) + "<span style='color:#000'> / </span>" + (obj[i].genre[1]);
    }
    
    console.log(genre);

    const padBlock = document.createElement('span');
    padBlock.classList.add('pad-block');
    const newBlock = document.createElement('div');
    newBlock.classList.add('movie-block');
    newBlock.innerHTML = "<img class='poster' src="+(obj[i].image_url)+">"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+"</span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
    document.getElementById("section").appendChild(padBlock);
    document.getElementById("section").appendChild(newBlock);
  }
}











