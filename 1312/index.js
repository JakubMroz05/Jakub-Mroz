const blokPrawy = document.querySelector('.blok-prawy');
const btnColor = document.querySelectorAll('button');
btnColor[0].addEventListener('click', function(){
    blokPrawy.style.backgroundColor = 'Indigo';
});


btnColor[1].addEventListener('click', function(){
    blokPrawy.style.backgroundColor = 'SteelBlue';
});


btnColor[2].addEventListener('click', function(){
    blokPrawy.style.backgroundColor = 'Olive';
});
const kolorCzcionki = document.querySelector('select');


kolorCzcionki.addEventListener('change', function(){
    blokPrawy.style.color = kolorCzcionki.value;
});


const rozmiarCzcionki = document.querySelector('input[name="czcionka"]');
rozmiarCzcionki.addEventListener('blur', function(){
    blokPrawy.style.fontSize = rozmiarCzcionki.value;
});


const ramka = document.querySelector('input[name="ramka"]');
const image = document.querySelector('section img');
    ramka.addEventListener('change', function(){
        if(!ramka.checked)
        image.style.border = 'none';
        if(ramka.checked)
        image.style.border = '1px solid white';
});


const punktory = document.querySelectorAll('input[name="punktory"]');
const lista = document.querySelector('section ul');
    punktory[0].addEventListener('click', function(){
        lista.setAttribute('type', 'disc');
});
    punktory[1].addEventListener('click', function(){
        lista.setAttribute('type', 'square');
});
    punktory[2].addEventListener('click', function(){
        lista.setAttribute('type', 'circle');
});

