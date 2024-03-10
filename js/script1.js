"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Слолько фильмов вы уже посмотрели?", "").trim;

  while (
    numberOfFilms === "" ||
    numberOfFilms === null ||
    isNaN(numberOfFilms)
  ) {
    numberOfFilms = +prompt("Слолько фильмов вы уже посмотрели?", "").trim();
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i += 1) {
    const a = prompt("Один из последних просмотренных фильмов?", "").trim();
    const b = prompt("На сколько оцените его?", "").trim();

    if (a !== null && b !== null && a !== "" && b !== "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i -= 1;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(addGenres) {
  for (let i = 1; i <= 3; i += 1) {
    let newGenres = prompt(`Ваш любимый жанр под номером ${i}`, "").trim();
    addGenres.push(newGenres);
  }
}

writeYourGenres(personalMovieDB.genres);

console.log(personalMovieDB);
