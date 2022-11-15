class komis{
    constructor(nazwa){
        this.nazwa = nazwa;
        this.samochody = [];
    }
    dodajSamochod(auto){
        this.samochody.push(auto);
    }
    usunSamochod(){

    }
    wyswietlSamochody(){
        let wynik = ' ';
        this.samochody.forEach((samochod) =>{
            wynik += `
            <ul>
            <li>${samochod.marka} ${samochod.model}</li>
            </ul>
            `;
        });
        return wynik;
    }
}