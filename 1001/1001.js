const formularz = document.querySelector('form');
const divuzytkownicy = document.querySelector('div.uzytkownicy');
const uzytkownicy = function(e){
    e.preventDefault();
    const plec = document.querySelector('[name="plec"]').value;
    const ilosc = document.querySelector('[name="liczba_osob"]').value;
    const url = `https://randomuser.me/api/?results=${ilosc}&gender=${plec == 'both' ? 'male,female' : plec}`;
    fetch(url)
    .then(response=>{
        if(response.status != 200)
        throw Error('blad serwera');
        else return response.json();
    })

    .then(json=>{PokazUzytkownikow(json.results);

    })

    .catch((err) =>  {
        console.log(err);
    });
    const PokazUzytkownikow = function(users){
        divuzytkownicy.innerHTML = '';
        users.forEach((user)=>{
            const div = document.createElement('div');
            div.setAttribute('class', 'user');
            div.innerHTML = `
            <img src="${user.picture.medium}" alt="">
            <p>${user.name.title} ${user.name.first} ${user.name.last}</p>
            `;
            divuzytkownicy.appendChild(div);
        });

    };
};
formularz.addEventListener('submit', uzytkownicy);