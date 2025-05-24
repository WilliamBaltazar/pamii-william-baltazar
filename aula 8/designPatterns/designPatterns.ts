class Carro {
    marca: String;

    construtor(marca:string){
        this.marca = marca;
    }

}

const carro1 = new Carro('Toyota');
const carro2= new Carro('Honda');

console.log(carro1.marca);
console.log(carro2.marca);

class CentralDeTrafego {
    private static instance: CentralDeTrafego;

    private constructor() {
        console.log('Central de Trafego iniciada');
    }

    static getInstance(): CentralDeTrafego {
        if (!CentralDeTrafego.instance) {
            CentralDeTrafego.instance = new CentralDeTrafego();
        }
        return CentralDeTrafego.instance;
    }

    emitirAlerta(mensagem: string) {
        console.log('Alerta: ${mensagem}');
    }
}

//Uso
const Central1 = CentralDeTrafego.getInstance();
const Central2 = CentralDeTrafego.getInstance();

central1.emitirAlerta('Acidente na rodovia!');

console.log(central1===central2);

interface Carro{
    dirigir(): void;
        
}

class SUV implements Carro {
    dirigir() {
        console.log('Dirigindo SUV');
    }
}

class Esportivo implements Carro {
        dirigir() {
        console.log('Dirigindo Esportivo');
    }
}

class Sedan implements Carro {
        dirigir() {
        console.log('Dirigindo Sedan');
    }
}

class Montadora {
    static fabricarCarro(tipo: string): Carro {
        if (tipo==='SUV'){
            return new SUV();
        } else if (tipo === 'Esportivo') {
            return new Esportivo();
        } else if (tipo=== 'Sedan') {
            return new Sedan();
        } else {
            throw new Error ('Tipo de carro desconhecido');
        }
    }
}

//Uso
const meuCarro = Montadora.fabricarCarro('Esportivo');
meuCarro.dirigir();

interface Observer {
    update(evento: string): void;
}

class Painel implements Observer {
    update(evento: string) {
        console.log(' Painel: ${evento}');
    }
}

class LuzDeFreio implements Observer {
    update(evento:string) {
        console.log('Luz de Freio Ativada: ${evento}');
    }
}

class AlertaSonoro implements Observer{
    update(evento: string){
        console.log('Alerta Sonoro: ${evento');
    }
}


class Freio {
    private observers: Observer[] = [];

    registrar(observer:Observer) {
        this.observers.push(observer);
    }

    remover(observer: Observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }

    pressionar() {
        console.log('Freio Pressionado');
        this.notificar('Freio Acionado');
    }

    private notificar(evento:string) {
        this.observers.forEach(o => o.update(evento));
    }
}

// uso 

const freio = new Freio();
const painel = new Painel();
const luz = new LuzDeFreio();
const alerta = new AlertaSonoro();

freio.registrar(painel);
freio.registrar(luz);
freio.registrar(alerta);