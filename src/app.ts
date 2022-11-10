abstract class Animale {
    constructor(private nome: string, public eta: number, protected readonly sesso: string) {
    }
    presentati(): void {
        console.log(`sono ${this.nome} e ho ${this.eta} anni`);
    }
    cambiaNome(nuovoNome : string): void {
        this.nome = nuovoNome;
    }
    static infoSullaClasse(): void {
        console.log('questa classe è Animale');
    }

    // emettiVerso è astratto e quindi non può essere implementato qui, ma DEVE
    // essere implementato in tutte le classi figlie!
    abstract emettiVerso(): void;
}

class Leone extends Animale {
    constructor(nome: string, eta: number, sesso: string, private carniPreferite: string[]) {
        super(nome, eta, sesso);
    }

    dichiaraSesso(): void {
        console.log(`io sono ${this.sesso}`);
    }
    //  cambiaSesso(nuovoSesso) : void {
    //     this.sesso = nuovoSesso; // dà errore in quanto sesso è readonly
    //  }
    static infoSullaClasse() {
        console.log('questa classe è Leone');
    }

    // siamo obbligati ad implementare questo metodo in quanto è astratto nella classe base
    emettiVerso(): void {
        console.log('Rooooooar');
    }
}

class Gatto extends Animale{
    constructor(nome: string, eta: number, sesso: string, coccolePreferite: string[]){
        super(nome, eta, sesso);
    }

    // metodo solo del Gatto
    faiLeFusa() {
        console.log('prr prr prr');
    }

    // siamo obbligati ad implementare questo metodo in quanto è astratto nella classe base
    emettiVerso(): void {
        console.log('Meoooow');
    }
}

// non posso più istanziare oggetti di Animale in quanto la classe è astratta!
// const a1: Animale = new Animale('luca', 15, 'maschio');
// a1.presentati();
// a1.cambiaNome('lucia');

const l: Leone = new Leone('antonio', 50, 'maschio', ['zebra', 'gazzella']);
l.cambiaNome('ezio');
l.presentati();

// Leone.infoSullaClasse();
// Animale.infoSullaClasse();

const g = new Gatto('monroe', 5, 'femmina', ['grattini']);
g.presentati();
g.emettiVerso();
g.faiLeFusa();

