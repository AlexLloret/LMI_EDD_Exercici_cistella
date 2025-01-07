// cistella.js (Mòdul principal)
import readlineSync from 'readline-sync';

// TO-DO
// Implementa una classe Producte, amb les propietats (que podran inicialitzar-se en el constructor):
// - descripcio: amb la descripció del producte
// - preu: el preu per unitat del producte
// I el mètode (funció):
// - toString(): que retorna un strin format per la descripció i el preu, amb el format "proucte - preu €".

// TO-DO
// Implementa una classe cistella, que contindrà com a propietat
// - Un vector (inicialment buit), al que afegirem parells JSON {producte, quantitat}

// Aquesta classe suportarà els mètodes (funcions internes a la classe)
// - afegirProducte(producte, quantitat): Que afegirà a la llista de productes el producte indicat i la quantitat. 
//       Ajuda: Si la llista de productes es diu productes (this.productes), farem:
//           this.productes.push({ producte, quantitat: parseInt(quantitat) }); // L'ordre push permet afegir un element al final del vector
 
// - mostrarCistella(): Aquest mètode recorrerà tota la llista/vector de productes i els anirà mostrant, 
//                      fent ús del mètode show del producte. 
//                      A més, calcularà el subtotal per cada línia (multiplicant) el preu unitari per la quantitat,
//                      I al final mostrarà el preu total, com a suma de tots els subtotals


// Funció per mostrar ajuda
function mostraAjuda() {
    console.log('Ajuda. Ordres permeses:\n');
    console.log('\thelp: Mostra aquesta ajuda');
    console.log('\texit: Ix de l\'aplicació');
    console.log('\tadd: Afig un nou producte a la cistella');
    console.log('\tshow: Mostra el contingut de la cistella');
}

// Funció per afegir un producte
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

    // TO-DO: Crea un nou producte anb les dades que s'han introduit, 
    // i afig-lo a la cistella.

    console.log("Funcionalitat per implementar!!");

    
}

// Funció principal
function iniciarAplicacio() {
    
    // TO-DO:
    // Crea un objecte de tipus cistella

    let ordre;

    console.log("🎄 Benvingut a l'aplicació de la Cistella de Nadal! 🎄");

    do {
        ordre = readlineSync.question('🎄> ').trim().toLowerCase();

        switch (ordre) {
            case 'add':
                console.log("Funció per implementar");
                // afegirProducte(cistella); // TO-DO: Descomentar quan es tinga implementat
                break;
            case 'show':
                console.log("Funció per implementar");
                // cistella.mostrarCistella(); // TO-DO: Descomentar quan es tinga implementat
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
