/*
Напиши функцию fetchCountries(name) которая делает HTTP-запрос и возвращает промис с массивом стран 
- результатом запроса. Вынеси её в отдельный файл fetchCountries.js и сделай именованный экспорт.
*/

import '../css/styles.css';


const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCountry(countryName) {
    return fetch(`${BASE_URL}/name/${countryName}`).then(response => {
        response.json();
    });
}

export default { fetchCountry };