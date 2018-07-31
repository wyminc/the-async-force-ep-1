let oReqOne = new XMLHttpRequest();
oReqOne.open("GET", "https://swapi.co/api/people/4/");
oReqOne.send();

oReqOne.addEventListener("load", function (res) {
  console.log("response4", res.currentTarget.response);
  document.getElementById("person4Name").innerHTML = JSON.parse(
    res.currentTarget.response
  ).name;

  let oReqTwo = new XMLHttpRequest();
  oReqTwo.open("GET", JSON.parse(res.currentTarget.response).homeworld);
  oReqTwo.send();

  oReqTwo.addEventListener("load", function (res) {
    document.getElementById("person4HomeWorld").innerHTML = JSON.parse(
      res.currentTarget.response
    ).name;
  });
});

let oReqThree = new XMLHttpRequest();
oReqThree.open("GET", "https://swapi.co/api/people/14/");
oReqThree.send();

oReqThree.addEventListener("load", function (res) {
  console.log("response14", res);
  document.getElementById("person14Name").innerHTML = JSON.parse(
    res.currentTarget.response
  ).name;

  let oReqFour = new XMLHttpRequest();
  oReqFour.open("GET", JSON.parse(res.currentTarget.response).species);
  oReqFour.send();

  oReqFour.addEventListener("load", function (res) {
    document.getElementById("person14Species").innerHTML = JSON.parse(
      res.currentTarget.response
    ).name;
  });
});

let oReqFive = new XMLHttpRequest();
oReqFive.open("GET", "https://swapi.co/api/films/");
oReqFive.send();

oReqFive.addEventListener("load", function (res) {
  console.log("response film", res);
  for (var i = 0; i < JSON.parse(res.currentTarget.response).results.length; i++) {
    let newListOne = document.createElement("li");
    newListOne.className = "film";
    document.getElementById("filmList").appendChild(newListOne);

    let newHTwo = document.createElement("h2");
    newHTwo.className = "filmTitle";
    newListOne.appendChild(newHTwo);
    newHTwo.innerHTML = JSON.parse(res.currentTarget.response).results[i].title;

    let newHThree = document.createElement("h3");
    newHThree.innerHTML = "Planets";
    newListOne.appendChild(newHThree);

    let newUL = document.createElement("ul");
    newUL.class = "filmPlanets";
    newListOne.appendChild(newUL);

    let newListTwo = document.createElement("li");
    newListTwo.className = "planet";
    newUL.appendChild(newListTwo);

    for (var j = 0; j < JSON.parse(res.currentTarget.response).results[i].planets.length; j++) {
      let newHFour = document.createElement("h4");
      newHFour.className = "planetName";
      newListTwo.appendChild(newHFour);

      let oReqSix = new XMLHttpRequest();
      oReqSix.open("GET", JSON.parse(res.currentTarget.response).results[i].planets[j]);
      oReqSix.send();

      oReqSix.addEventListener("load", function (res) {
        newHFour.innerHTML = JSON.parse(res.currentTarget.response).name;
      })
    };
  };
});
