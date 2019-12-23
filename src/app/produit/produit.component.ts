import { Component, OnInit, Input } from '@angular/core';

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
  @Input() data: JSON;
  name = 'Angular';
  produit: Produit;

  constructor() { }
  
  ngOnInit() {
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
    console.log(this.data);
  }

}