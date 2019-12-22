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
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  @Input() data: JSON;
  name = 'Angular';
  produit: Produit;
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
  }
}