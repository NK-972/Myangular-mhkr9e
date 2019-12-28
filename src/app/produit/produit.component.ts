import { Component, OnInit, Input } from '@angular/core';
import { Utilitaire } from '../utilitaire';

interface Produit{
  Prix : Number
  , RD : Number
  , Installations: string[]
  , InstallationSelected: string
  , Production: Number
  , Qualite: Number
  , IP: Number
  , IT: Number
  , Notoriete: Number
  , Demande: Number
  , Stock: Number
  , MB: Number
  , TMB: Number
}

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input() data: Array<string>;
  utilitaire: Utilitaire = new Utilitaire();
  id_Product: string; 
  produit: Produit;

  constructor() { }
  
  createProduit(data){
    //id_Product = Utilitaire.getData();
    this.produit ={
      Prix : Number()
      , RD : Number()
      , Installations: []
      , InstallationSelected: ''
      , Production: Number()
      , Qualite: Number()
      , IP: Number()
      , IT: Number()
      , Notoriete: Number()
      , Demande: Number()
      , Stock: Number()
      , MB: Number()
      , TMB: Number() 
    }
  }

  ngOnInit() {
    console.log(this.data);
  }

}