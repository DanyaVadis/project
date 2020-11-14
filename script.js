"use strict";

const numberOfFilms =prompt("Сколько фильмов",'');

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres: [],
    privat: false
};



console.log(personalMovieDB);
let i = 0;
while(i<2){
    const a = prompt('Фильм',''),
          b = prompt('Оценка','');

    if(a != null && b !=null && a != '' && a.length<50 ){
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
    i++;
}

if (personalMovieDB.count < 10){
    console.log('мало');
} else if(personalMovieDB.count >=10 && personalMovieDB.count < 30){
    console.log('норм');
} else if(personalMovieDB.count >= 30){
    console.log("много");
} else {
    console.log('ошибка,qq');
    

}