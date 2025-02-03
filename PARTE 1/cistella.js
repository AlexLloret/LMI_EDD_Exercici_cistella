import readlineSync from 'readline-sync';

// Classe Producte
class Producte {
    constructor(descripcio, preu) {
        this.descripcio = descripcio;
        this.preu = parseFloat(preu);
    }

    // Mètode toString() que retorna la descripció i el preu formatat
    toString() {
        return `${this.descripcio} - ${this.preu.toFixed(2)} €`;
    }
}

// Classe Cistella
class Cistella {
    constructor() {
        this.productes = []; // Vector buit per emmagatzemar els productes
    }

    // Mètode per afegir un producte amb la seva quantitat
    afegirProducte(producte, quantitat) {
        this.productes.push({ producte, quantitat: parseInt(quantitat) });
        console.log('✅ Producte afegit correctament!');
    }

    // Mètode per mostrar el contingut de la cistella
    mostrarCistella() {
        console.log('--- Contingut de la Cistella ---');
        let total = 0;

        this.productes.forEach((item, index) => {
            const subtotal = item.producte.preu * item.quantitat;
            console.log(`${index + 1}. ${item.producte.toString()} x ${item.quantitat} unitats - Subtotal: ${subtotal.toFixed(2)} €`);
            total += subtotal;
        });

        console.log(`\nPreu Total: ${total.toFixed(2)} €`);
    }
}

// Funció per mostrar ajuda
function mostraAjuda() {
    console.log('Ajuda. Ordres permeses:\n');
    console.log('\thelp: Mostra aquesta ajuda');
    console.log('\texit: Ix de l\'aplicació');
    console.log('\tadd: Afig un nou producte a la cistella');
    console.log('\tshow: Mostra el contingut de la cistella');
}

// Funció per afegir un producte a la cistella
function afegirProducte(cistella) {
    const nom = readlineSync.question('Nom del producte: ');
    const preu = readlineSync.question('Preu del producte: ');
    if (isNaN(preu)) {
        console.log('Error: El preu ha de ser un número.');
        return;
    }

    const quantitat = readlineSync.question('Nombre d\'unitats: ');
    if (isNaN(quantitat) || parseInt(quantitat) <= 0) {
        console.log('Error: La quantitat ha de ser un número positiu.');
        return;
    }

    // Crear un nou objecte de la classe Producte
    const producte = new Producte(nom, preu);

    // Afegir el producte a la cistella
    cistella.afegirProducte(producte, quantitat);
}

// Funció principal
function iniciarAplicacio() {
    // Crear un objecte de la classe Cistella
    const cistella = new Cistella();

    let ordre;

    console.log("🎄 Benvingut a l'aplicació de la Cistella de Nadal! 🎄");

    do {
        ordre = readlineSync.question('🎄> ').trim().toLowerCase();

        switch (ordre) {
            case 'add':
                afegirProducte(cistella);
                break;
            case 'show':
                cistella.mostrarCistella();
                break;
            case 'help':
                mostraAjuda();
                break;
            case 'exit':
                console.log('Bon Nadal!');
                break;
            default:
                console.log('Ordre desconeguda. Escriu "help" per vore les ordres disponibles.');
        }
    } while (ordre !== 'exit');
}

// Iniciar l'aplicació
iniciarAplicacio();
