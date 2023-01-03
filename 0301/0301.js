const formularz = document.querySelector('form');
const divuzytkownicy = document.querySelector('div.uzytkownicy');
const uzytkownicy = function(e){
    e.preventDefault();
    const plec = document.querySelector('[name="plec"]').value;
    const ilosc = document.querySelector('[name="liczba_osob"]').value;
    const url = `https://randomuser.me/api/?results=${ilosc}&gender=${plec == 'both' ? 'male,female' : plec}`;
    fetch(url)
    .then()
    .then()
    .catch();
};
formularz.addEventListener('submit', uzytkownicy);