"use strict";

const numberOfFilms =prompt("Сколько фильмов",'');

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Фильм',''),
      b = prompt('Оценка',''),
      c = prompt('Фильма',''),
      d = prompt('Оценка','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
