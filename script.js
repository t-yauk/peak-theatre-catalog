var genre = "";
var genre_filter = "all";
var found_movies = 0;

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


function populateHours(filter_selection){

  if(genre_filter == "all"){
    all_genres(filter_selection);
  }else if(genre_filter == "comedy"){
    comedy(filter_selection);
  }else if(genre_filter == "horror"){
    horror(filter_selection);
  }
  
}


function all_genres(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){
      genre = (obj[i].genre[0]);
    }else if((obj[i].genre).length == 2){
      genre = (obj[i].genre[0]) + "<span style='color:#000'> / </span>" + (obj[i].genre[1]);
    }

    const padBlock = document.createElement('span');
    padBlock.classList.add('pad-block');
    const newBlock = document.createElement('div');
    newBlock.classList.add('movie-block');
    newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+"</span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
    document.getElementById("section").appendChild(padBlock);
    document.getElementById("section").appendChild(newBlock);

    found_movies = found_movies + 1;

  }

  document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";

}

function comedy(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){

      genre = (obj[i].genre[0]);

      if((obj[i].genre[0]) == "Comedy"){
        found_movies = found_movies + 1;
        const padBlock = document.createElement('span');
        padBlock.classList.add('pad-block');
        const newBlock = document.createElement('div');
        newBlock.classList.add('movie-block');
        newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+"</span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
        document.getElementById("section").appendChild(padBlock);
        document.getElementById("section").appendChild(newBlock);
        document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";
        
      }

    }else if((obj[i].genre).length == 2){

      genre = (obj[i].genre[0]) + "<span style='color:#000'> / </span>" + (obj[i].genre[1]);

      if(((obj[i].genre[0]) == "Comedy") || ((obj[i].genre[1]) == "Comedy")){
        found_movies + found_movies + 1;
        const padBlock = document.createElement('span');
        padBlock.classList.add('pad-block');
        const newBlock = document.createElement('div');
        newBlock.classList.add('movie-block');
        newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+"</span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
        document.getElementById("section").appendChild(padBlock);
        document.getElementById("section").appendChild(newBlock);
        document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";
        
      }

    }

  }

  

}

function horror(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){

      genre = (obj[i].genre[0]);

      if((obj[i].genre[0]) == "Horror"){
        const padBlock = document.createElement('span');
        padBlock.classList.add('pad-block');
        const newBlock = document.createElement('div');
        newBlock.classList.add('movie-block');
        newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+"</span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
        document.getElementById("section").appendChild(padBlock);
        document.getElementById("section").appendChild(newBlock);
        found_movies = found_movies + 1;
      }

    }else if((obj[i].genre).length == 2){

      genre = (obj[i].genre[0]) + "<span style='color:#000'> / </span>" + (obj[i].genre[1]);

      if(((obj[i].genre[0]) == "Horror") || ((obj[i].genre[1]) == "Horror")){
        const padBlock = document.createElement('span');
        padBlock.classList.add('pad-block');
        const newBlock = document.createElement('div');
        newBlock.classList.add('movie-block');
        newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+"</span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
        document.getElementById("section").appendChild(padBlock);
        document.getElementById("section").appendChild(newBlock);
        found_movies = found_movies + 1;
      }

    }

  }

  document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";

}









