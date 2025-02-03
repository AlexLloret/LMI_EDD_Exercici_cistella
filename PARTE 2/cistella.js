// Classe Producte
class Producte {
    constructor(descripcio, preu, quantitat) {
        this.descripcio = descripcio;
        this.preu = parseFloat(preu);
        this.quantitat = parseInt(quantitat);
    }

    // Calcula el subtotal del producte
    calculaSubtotal() {
        return this.preu * this.quantitat;
    }

    // Genera una fila de taula HTML per aquest producte
    generaHTML() {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${this.descripcio}</td>
            <td>${this.preu.toFixed(2)} €</td>
            <td>${this.quantitat}</td>
            <td>${this.calculaSubtotal().toFixed(2)} €</td>
        `;
        return fila;
    }
}

// Classe Cistella
class Cistella {
    constructor() {
        this.productes = [];
        this.taulaBody = document.querySelector("#taula tbody");
        this.totalElement = document.querySelector("#total");
    }

    // Afegeix un producte a la cistella i actualitza la taula
    afegirProducte(producte) {
        this.productes.push(producte);
        this.taulaBody.appendChild(producte.generaHTML());
        this.actualitzaTotal();
    }

    // Actualitza el total de la cistella
    actualitzaTotal() {
        const total = this.productes.reduce((sum, prod) => sum + prod.calculaSubtotal(), 0);
        this.totalElement.textContent = `${total.toFixed(2)} €`;
    }
}

// Iniciar l'aplicació
const cistella = new Cistella();

// Capturar elements del formulari
const formulari = document.querySelector("#formulari");
const btnAfegir = document.querySelector("#afegir");

// Afegir event al botó
btnAfegir.addEventListener("click", () => {
    const desc = document.querySelector("#desc").value;
    const preu = document.querySelector("#preu").value;
    const quantitat = document.querySelector("#quantitat").value;

    if (desc && preu > 0 && quantitat > 0) {
        const producte = new Producte(desc, preu, quantitat);
        cistella.afegirProducte(producte);
        formulari.reset();
    } else {
        alert("Si us plau, introdueix dades vàlides.");
    }
});
