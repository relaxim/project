
/*работа с обьектом*/ 
// let obj = {
//     name: 'Roman',
//     age: 19,
//     number: +79084568893
// };

// for (let item in obj) {
//     console.log(`Ключ ${item}, значение ${obj[item]}`);
// }


/*работа с массивом с помощью for of*/ 
// let arr = [11, 9, 5, 3, 0];

// for (let item of arr) {
//     console.log(item*2);
// }


/*работа с массивом*/ 
// let array = [11, 9, 5, 3, 0];

// for (let i = 0; i<array.length; i++) {
//     console.log(array[i]*2);
// }

// Пример цикла с while переделанный с for 
// let i = 0; 

// while (i < 1) {
//     const a = prompt('Один из последних просмотренных фильмов?',''),
//           b = prompt('На сколько оцените его?','');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// }




let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 1; i++) {
        const a = prompt('Один из последних просмотренных фильмов?',''),
              b = prompt('На сколько оцените его?','');
        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
            // Если а не "отмена" и b не "отмена" и a не пустая строка и b не пустая строка и а < 50 и b < 50 символов то
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('false');
            i--;
            // i-- возвращает если пользователь ответил не верно, повторно те же вопросы
        }
    
    }
}

rememberMyFilms();

function detecPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detecPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        if (genre != null && genre != '') {
            personalMovieDB.genres[i - 1] = genre;
        } else {
            i--;
        }
    }
}

writeYourGenres();