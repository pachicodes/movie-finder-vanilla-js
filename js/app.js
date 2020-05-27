const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  //console.log("It works!");

  const film = document.getElementById("fname");
  const movie = film.value;
  //console.log(movie);

  const response = fetch(
    `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${movie}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "imdb-internet-movie-database-unofficial.p.rapidapi.com",
        "x-rapidapi-key": "c5c510efb8msh5bbb56c5812a9aap1636e1jsnca895b776281",
      },
    }
  )
    .then((response) => response.json())

    .catch((err) => {
      console.log(err);
    });

  const res = document.getElementById("res");

  response.then((response) => {
    //console.log(response);
    res.innerHTML = "";

    const title = response.title;
    const poster = response.poster;
    const plot = response.plot;

    //Creating the HTML elements
    const elementTitle = document.createElement("h2");
    const textTitle = document.createTextNode(`${title}`);

    const element = document.createElement("p");
    const text = document.createTextNode(`"${plot}"`);

    const picture = document.createElement("img");
    picture.setAttribute("src", poster);

    //Appeding Elements
    elementTitle.append(textTitle);
    res.append(elementTitle);

    element.append(text);
    res.append(element);

    res.append(picture);
  });
});
