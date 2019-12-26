import { Component, OnInit, Input } from '@angular/core';
import { Utilitaire } from './utilitaire'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

  turn: Number = 3;

  utilitaire: Utilitaire = new Utilitaire();
  produits: string = "[[JSON, tour, nom du produit, recette, prix, r&d, productio, production par installations, installation, actif, qualité, indice technique, image prix, marge brute, taux de marge brute, Demande, Stock, prix de mp, notoriété, indice r&d, breveter, Nombre de produit vendu, Frais de transport], [Bouteille d'eau 0, 0, Bouteille d'eau, 21811, 0, 0, 0, ,0,0,, ,0,1,, 0, 0, 0.000000, 1.00, 0, 0.00, null, null, null, 0.00, 1.00, 0, null, null], [Bouteille d'eau 1, 1, Bouteille d'eau, 21811, 30, 30000, 0, ,0,0,, ,0,1,, 1, 0, 0.000000, 1.00, 24, 4.00, 11200, 0, null, 0.00, 1.60, 0, 0, 0], [Bouteille d'eau 2, 2, Bouteille d'eau, 21811, 30, 30000, 2000, ,0,2000,, ,0,1,, 1, 0, 0.000000, 1.00, 19, 1.73, 9200, 0, null, 0.00, 1.60, 0, 2000, 8000], [Bouteille d'eau 3, 3, Bouteille d'eau, 21811, 30, 30000, 0, ,0,0,, ,0,1,, 1, 0, 0.000000, 1.00, 9, 0.43, 11200, 0, null, 0.00, 1.60, 0, 0, 0], [Bouteille d'eau 4, 4, Bouteille d'eau, 21811, 30, 30000, null, ,0,0,, ,0,1,, 1, 0, null, null, null, null, null, null, null, null, null, 0, null, null]]";
  json_produits: JSON;

  
  
  ngOnInit() {
    this.json_produits = this.utilitaire.StringToTable(this.produits);
    console.log(this.utilitaire.getData(this.json_produits, "Bouteille d'eau", 2, 'recette'));
  }

}