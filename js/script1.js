"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = +prompt("Слолько фильмов вы уже посмотрели?", "");

    while (
      personalMovieDB.count === "" ||
      personalMovieDB.count === null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Слолько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: () => {
    for (let i = 0; i < 2; i += 1) {
      const a = prompt("Один из последних просмотренных фильмов?", "");
      const b = prompt("На сколько оцените его?", "");

      if (a !== null && b !== null && a !== "" && b !== "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i -= 1;
      }
    }
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: (hidden) => {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibalMyDB: () => {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: () => {
    for (let i = 1; i <= 3; i += 1) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      if (genre === "" || genre === null) {
        console.log("you enter wrong");
        i -= 1;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }

    personalMovieDB.genres.forEach((item, idx) => {
      console.log(`Любимый жанр ${idx + 1} - это ${item}`);
    });
  },
};

console.log(personalMovieDB);
