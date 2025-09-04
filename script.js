var genre = "";
var genre_filter = "all";
var found_movies = 0;
var subtitle = true;

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

function genreFilter(){
  genre_filter = document.getElementById("genre_list").value;
  console.log(genre_filter);
  document.getElementById("section").innerHTML = "";
  document.getElementById("featured-players").innerHTML = "";
  found_movies = 0;
  populate();
}


function populateHours(filter_selection){

  if(genre_filter == "all"){
    document.getElementById("list_title").innerHTML = "All Movies";
    all_genres(filter_selection);
  }else if(genre_filter == "action"){
    document.getElementById("list_title").innerHTML = "Action Movies";
    action(filter_selection);
  }else if(genre_filter == "adventure"){
    document.getElementById("list_title").innerHTML = "Adventure Movies";
    adventure(filter_selection);
  }else if(genre_filter == "comedy"){
    document.getElementById("list_title").innerHTML = "Comedy Movies";
    comedy(filter_selection);
  }else if(genre_filter == "crime"){
    document.getElementById("list_title").innerHTML = "Crime Movies";
    crime(filter_selection);
  }else if(genre_filter == "documentary"){
    document.getElementById("list_title").innerHTML = "Documentaries";
    documentary(filter_selection);
  }else if(genre_filter == "drama"){
    document.getElementById("list_title").innerHTML = "Drama Movies";
    drama(filter_selection);
  }else if(genre_filter == "family"){
    document.getElementById("list_title").innerHTML = "Family Movies";
    family(filter_selection);
  }else if(genre_filter == "fantasy"){
    document.getElementById("list_title").innerHTML = "Fantasy Movies";
    fantasy(filter_selection);
  }else if(genre_filter == "horror"){
    document.getElementById("list_title").innerHTML = "Horror Movies";
    horror(filter_selection);
  }else if(genre_filter == "musical"){
    document.getElementById("list_title").innerHTML = "Musicals";
    musical(filter_selection);
  }else if(genre_filter == "mystery"){
    document.getElementById("list_title").innerHTML = "Mystery Movies";
    mystery(filter_selection);
  }else if(genre_filter == "noir"){
    document.getElementById("list_title").innerHTML = "Noir Movies";
    noir(filter_selection);
  }else if(genre_filter == "romance"){
    document.getElementById("list_title").innerHTML = "Romance Movies";
    romance(filter_selection);
  }else if(genre_filter == "sci-fi"){
    document.getElementById("list_title").innerHTML = "Sci-Fi Movies";
    sci_fi(filter_selection);
  }else if(genre_filter == "sport"){
    document.getElementById("list_title").innerHTML = "Sport Movies";
    sport(filter_selection);
  }else if(genre_filter == "thriller"){
    document.getElementById("list_title").innerHTML = "Thriller Movies";
    thriller(filter_selection);
  }else if(genre_filter == "war"){
    document.getElementById("list_title").innerHTML = "War Movies";
    war(filter_selection);
  }else if(genre_filter == "western"){
    document.getElementById("list_title").innerHTML = "Westerns";
    western(filter_selection);
  }
  
}


function all_genres(obj){

  featured_players(obj);

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){
      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span>";
    }else if((obj[i].genre).length == 2){
      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span><span style='display:inline-block;padding:0px 5px'></span><span class='genre'>" + (obj[i].genre[1]) + "</span>";
    }

    //console.log((obj[i].subtitle));

    if((obj[i].subtitle) !== undefined){
      const padBlock = document.createElement('span');
      padBlock.classList.add('pad-block');
      const newBlock = document.createElement('div');
      newBlock.classList.add('movie-block');
      newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
      document.getElementById("section").appendChild(padBlock);
      document.getElementById("section").appendChild(newBlock);
      found_movies = found_movies + 1;
    }else{
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

  document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";

}

function action(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span>";

      if((obj[i].genre[0]) == "Action"){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

    }else if((obj[i].genre).length == 2){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span><span style='display:inline-block;padding:0px 5px'></span><span class='genre'>" + (obj[i].genre[1]) + "</span>";

      if(((obj[i].genre[0]) == "Action") || ((obj[i].genre[1]) == "Action")){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

  }

  document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";

}

function adventure(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span>";

      if((obj[i].genre[0]) == "Adventure"){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

    }else if((obj[i].genre).length == 2){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span><span style='display:inline-block;padding:0px 5px'></span><span class='genre'>" + (obj[i].genre[1]) + "</span>";

      if(((obj[i].genre[0]) == "Adventure") || ((obj[i].genre[1]) == "Adventure")){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

  }

  document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";

}


function comedy(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span>";

      if((obj[i].genre[0]) == "Comedy"){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

    }else if((obj[i].genre).length == 2){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span><span style='display:inline-block;padding:0px 5px'></span><span class='genre'>" + (obj[i].genre[1]) + "</span>";

      if(((obj[i].genre[0]) == "Comedy") || ((obj[i].genre[1]) == "Comedy")){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

  }

  document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";

}


function crime(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span>";

      if((obj[i].genre[0]) == "Crime"){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

    }else if((obj[i].genre).length == 2){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span><span style='display:inline-block;padding:0px 5px'></span><span class='genre'>" + (obj[i].genre[1]) + "</span>";

      if(((obj[i].genre[0]) == "Crime") || ((obj[i].genre[1]) == "Crime")){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

  }

  document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";

}


function documentary(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span>";

      if((obj[i].genre[0]) == "Documentary"){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

    }else if((obj[i].genre).length == 2){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span><span style='display:inline-block;padding:0px 5px'></span><span class='genre'>" + (obj[i].genre[1]) + "</span>";

      if(((obj[i].genre[0]) == "Documentary") || ((obj[i].genre[1]) == "Documentary")){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

  }

  document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";

}


function drama(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span>";

      if((obj[i].genre[0]) == "Drama"){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

    }else if((obj[i].genre).length == 2){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span><span style='display:inline-block;padding:0px 5px'></span><span class='genre'>" + (obj[i].genre[1]) + "</span>";

      if(((obj[i].genre[0]) == "Drama") || ((obj[i].genre[1]) == "Drama")){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

  }

  document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";

}


function family(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span>";

      if((obj[i].genre[0]) == "Family"){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

    }else if((obj[i].genre).length == 2){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span><span style='display:inline-block;padding:0px 5px'></span><span class='genre'>" + (obj[i].genre[1]) + "</span>";

      if(((obj[i].genre[0]) == "Family") || ((obj[i].genre[1]) == "Family")){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

  }

  document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";

}



function fantasy(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span>";

      if((obj[i].genre[0]) == "Fantasy"){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

    }else if((obj[i].genre).length == 2){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span><span style='display:inline-block;padding:0px 5px'></span><span class='genre'>" + (obj[i].genre[1]) + "</span>";

      if(((obj[i].genre[0]) == "Fantasy") || ((obj[i].genre[1]) == "Fantasy")){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

  }

  document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";

}



function horror(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span>";

      if((obj[i].genre[0]) == "Horror"){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

    }else if((obj[i].genre).length == 2){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span><span style='display:inline-block;padding:0px 5px'></span><span class='genre'>" + (obj[i].genre[1]) + "</span>";

      if(((obj[i].genre[0]) == "Horror") || ((obj[i].genre[1]) == "Horror")){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

  }

  document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";

}



function musical(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span>";

      if((obj[i].genre[0]) == "Musical"){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

    }else if((obj[i].genre).length == 2){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span><span style='display:inline-block;padding:0px 5px'></span><span class='genre'>" + (obj[i].genre[1]) + "</span>";

      if(((obj[i].genre[0]) == "Musical") || ((obj[i].genre[1]) == "Musical")){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

  }

  document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";

}



function mystery(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span>";

      if((obj[i].genre[0]) == "Mystery"){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

    }else if((obj[i].genre).length == 2){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span><span style='display:inline-block;padding:0px 5px'></span><span class='genre'>" + (obj[i].genre[1]) + "</span>";

      if(((obj[i].genre[0]) == "Mystery") || ((obj[i].genre[1]) == "Mystery")){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

  }

  document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";

}



function noir(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span>";

      if((obj[i].genre[0]) == "Noir"){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

    }else if((obj[i].genre).length == 2){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span><span style='display:inline-block;padding:0px 5px'></span><span class='genre'>" + (obj[i].genre[1]) + "</span>";

      if(((obj[i].genre[0]) == "Noir") || ((obj[i].genre[1]) == "Noir")){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

  }

  document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";

}



function romance(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span>";

      if((obj[i].genre[0]) == "Romance"){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

    }else if((obj[i].genre).length == 2){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span><span style='display:inline-block;padding:0px 5px'></span><span class='genre'>" + (obj[i].genre[1]) + "</span>";

      if(((obj[i].genre[0]) == "Romance") || ((obj[i].genre[1]) == "Romance")){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

  }

  document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";

}



function sci_fi(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span>";

      if((obj[i].genre[0]) == "Sci-Fi"){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

    }else if((obj[i].genre).length == 2){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span><span style='display:inline-block;padding:0px 5px'></span><span class='genre'>" + (obj[i].genre[1]) + "</span>";

      if(((obj[i].genre[0]) == "Sci-Fi") || ((obj[i].genre[1]) == "Sci-Fi")){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

  }

  document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";

}



function sport(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span>";

      if((obj[i].genre[0]) == "Sport"){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

    }else if((obj[i].genre).length == 2){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span><span style='display:inline-block;padding:0px 5px'></span><span class='genre'>" + (obj[i].genre[1]) + "</span>";

      if(((obj[i].genre[0]) == "Sport") || ((obj[i].genre[1]) == "Sport")){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

  }

  document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";

}



function thriller(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span>";

      if((obj[i].genre[0]) == "Thriller"){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

    }else if((obj[i].genre).length == 2){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span><span style='display:inline-block;padding:0px 5px'></span><span class='genre'>" + (obj[i].genre[1]) + "</span>";

      if(((obj[i].genre[0]) == "Thriller") || ((obj[i].genre[1]) == "Thriller")){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

  }

  document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";

}



function war(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span>";

      if((obj[i].genre[0]) == "War"){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

    }else if((obj[i].genre).length == 2){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span><span style='display:inline-block;padding:0px 5px'></span><span class='genre'>" + (obj[i].genre[1]) + "</span>";

      if(((obj[i].genre[0]) == "War") || ((obj[i].genre[1]) == "War")){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

  }

  document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";

}



function western(obj){

  const section = document.querySelector("section");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span>";

      if((obj[i].genre[0]) == "Western"){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

    }else if((obj[i].genre).length == 2){

      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span><span style='display:inline-block;padding:0px 5px'></span><span class='genre'>" + (obj[i].genre[1]) + "</span>";

      if(((obj[i].genre[0]) == "Western") || ((obj[i].genre[1]) == "Western")){
        if((obj[i].subtitle) !== undefined){
          const padBlock = document.createElement('span');
          padBlock.classList.add('pad-block');
          const newBlock = document.createElement('div');
          newBlock.classList.add('movie-block');
          newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+" <span class='subtitle'>"+(obj[i].subtitle)+"</span></span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
          document.getElementById("section").appendChild(padBlock);
          document.getElementById("section").appendChild(newBlock);
          found_movies = found_movies + 1;
        }else{
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

  }

  document.getElementById("catalog_count").innerHTML = found_movies + " Movies Found";

}


function featured_players(obj){
  const section = document.querySelector("featured-players");
  const myArticle = document.createElement("article");
  const catalog = document.createElement("p");

  const featuredBlock = document.createElement('span');
  featuredBlock.classList.add('featured-heading');
  featuredBlock.innerHTML = "The Featured Players";
  document.getElementById("featured-players").appendChild(featuredBlock);

  for(i = 0;i < obj.length;i++){
    
    if((obj[i].genre).length == 1){
      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span>";
    }else if((obj[i].genre).length == 2){
      genre = "<span class='genre'>" + (obj[i].genre[0]) + "</span><span style='display:inline-block;padding:0px 5px'></span><span class='genre'>" + (obj[i].genre[1]) + "</span>";
    }

    if((obj[i].subtitle) !== undefined){
      console.log("No Subtitle Found");
      subtitle = false;
    }

    if((obj[i].featured) == "true"){
      const padBlock = document.createElement('span');
      padBlock.classList.add('pad-block');
      const newBlock = document.createElement('div');
      newBlock.classList.add('movie-block');
      newBlock.innerHTML = "<div class='image-wrapper'><img class='poster' src="+(obj[i].image_url)+"></div>"+"<div class='content'><span class='director'>"+(obj[i].director)+"</span>"+"<br><span class='title'>"+(obj[i].title)+"</span>"+"<span class='duration'>("+(obj[i].duration)+")</span>"+"<p class='description'>"+(obj[i].description)+"</p>"+"<span class='genres'>"+genre+"</span>"+"</div>";
      document.getElementById("featured-players").appendChild(padBlock);
      document.getElementById("featured-players").appendChild(newBlock);
    }

  }

  const sectionDivide = document.createElement('span');
  sectionDivide.classList.add('separator');
  document.getElementById("featured-players").appendChild(sectionDivide);

}




function scroll_to_top(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}





// Get the vertical scroll position of the document
//const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

//console.log(`User has scrolled ${scrollTop} pixels down the page.`);












let ticking = false;
let scrollTop;

window.addEventListener("scroll", function (e) {
  scrollTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      //document.getElementById("scroll-value").innerHTML = Math.round(scrollTop);
      console.log(scrollTop);
      if(scrollTop > 850){
        document.getElementById("top-button").style.opacity = "1";
      }else{
        document.getElementById("top-button").style.opacity = "0";
      }
      ticking = false;
    });

    ticking = true;
  }
});

