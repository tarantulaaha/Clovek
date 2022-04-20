class Clovek{
    vyska;
    vek;
    jmeno;
    constructor(_jmeno,_vek,_vyska){
        this.jmeno=_jmeno;
        this.vek=_vek;
        this.vyska=_vyska;
    }
    rekni(veta){
        document.write(veta)
    }
}

let clovek1 = new Clovek('Pepa',23,180);
clovek1.rekni('Ahoj!');