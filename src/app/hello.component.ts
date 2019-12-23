import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  produits: string = "[[JSON, tour, nom du produit, recette, prix, r&d, productio, production par installations, installation, actif, qualité, indice technique, image prix, marge brute, taux de marge brute, Demande, Stock, prix de mp, notoriété, indice r&d, breveter, Nombre de produit vendu, Frais de transport], [Bouteille d'eau 0, 0, Bouteille d'eau, 21811, 0, 0, 0, ,0,0,, ,0,1,, 0, 0, 0.000000, 1.00, 0, 0.00, null, null, null, 0.00, 1.00, 0, null, null], [Bouteille d'eau 1, 1, Bouteille d'eau, 21811, 30, 30000, 0, ,0,0,, ,0,1,, 1, 0, 0.000000, 1.00, 24, 4.00, 11200, 0, null, 0.00, 1.60, 0, 0, 0], [Bouteille d'eau 2, 2, Bouteille d'eau, 21811, 30, 30000, 2000, ,0,2000,, ,0,1,, 1, 0, 0.000000, 1.00, 19, 1.73, 9200, 0, null, 0.00, 1.60, 0, 2000, 8000], [Bouteille d'eau 3, 3, Bouteille d'eau, 21811, 30, 30000, 0, ,0,0,, ,0,1,, 1, 0, 0.000000, 1.00, 9, 0.43, 11200, 0, null, 0.00, 1.60, 0, 0, 0], [Bouteille d'eau 4, 4, Bouteille d'eau, 21811, 30, 30000, null, ,0,0,, ,0,1,, 1, 0, null, null, null, null, null, null, null, null, null, 0, null, null]]";
  json_produits: JSON;

   ngOnInit() {
      this.StringToTable(this.produits);
      console.log(this.getData(this.json_produits, "Bouteille d'eau", 2));
   }

  public StringToTable(str:String){
    let sortie: Array<string>;
    var JSONQury = {};
    sortie = str.replace("[[", "").replace("]]", "").split("], [");
    sortie.forEach(function (value) {
      console.log(value.split(", "));
      JSONQury[value.split(", ")[0]] = value.split(", ");
    })
    this.json_produits = JSONQury as JSON;
    console.log(this.json_produits);
  }

  public getData(json: JSON, key:String, turn:Number): string{
    let sortie: Array<string> = Object.keys(json) as Array<string>;
        if(key+' '+turn in json){
           return json[key+' '+turn];
        }
        return null;
    }
}