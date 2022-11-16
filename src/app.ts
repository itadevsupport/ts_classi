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

class Leone extends Animale implements Corri, Salta {
    velocitaMediaKmh: number;

    constructor(nome: string, eta: number, sesso: string, private carniPreferite: string[], velocita: number) {
        super(nome, eta, sesso);
        this.velocitaMediaKmh = velocita;
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

    corri(): void {
        console.log(`💨sto correndo velocissimo a ${this.velocitaMediaKmh}`);
    }
    salta(): void {
        console.log('sto saltando 🦁');
    }
}

class Gatto extends Animale implements Corri, Salta{
    velocitaMediaKmh: number;

    constructor(nome: string, eta: number, sesso: string, coccolePreferite: string[], velocita: number){
        super(nome, eta, sesso);
        this.velocitaMediaKmh = velocita;
    }

    // metodo solo del Gatto
    faiLeFusa() {
        console.log('prr prr prr');
    }

    // siamo obbligati ad implementare questo metodo in quanto è astratto nella classe base
    emettiVerso(): void {
        console.log('Meoooow');
    }

    corri(): void {
        console.log(`sto correndo a circa ${this.velocitaMediaKmh}`);
    }
    salta(): void {
        console.log('sto saltando 🐱');
    }
}

class Piccione extends Animale implements Vola {    
    velocitaMaxKmh: number;

    constructor(nome: string, eta: number, sesso: string, velocita: number) {
        super(nome, eta, sesso);
        this.velocitaMaxKmh = velocita;
    }
    emettiVerso(): void {
        console.log('urrrruuuu urrrruuuu');
    }
    spiccaIlVolo(): void {
        console.log('sto volandoooo...!');
    }
}

// interfaccia Vola
interface Vola {
    velocitaMaxKmh: number;
    spiccaIlVolo(): void; // il metodo dell'interfaccia deve essere implementato nella classe che ha l'interfaccia e non qui
}

interface Corri {
    velocitaMediaKmh: number;
    corri(): void;
}

interface Salta {
    salta(): void;
}

// non posso più istanziare oggetti di Animale in quanto la classe è astratta!
// const a1: Animale = new Animale('luca', 15, 'maschio');
// a1.presentati();
// a1.cambiaNome('lucia');

const l: Leone = new Leone('antonio', 50, 'maschio', ['zebra', 'gazzella'], 80);
l.cambiaNome('ezio');
l.presentati();

// Leone.infoSullaClasse();
// Animale.infoSullaClasse();

const g = new Gatto('monroe', 5, 'femmina', ['grattini'], 48);
g.presentati();
g.emettiVerso();
g.faiLeFusa();

const p : Piccione = new Piccione('Urru', 2, 'femmina', 80);
p.emettiVerso();
p.spiccaIlVolo();


