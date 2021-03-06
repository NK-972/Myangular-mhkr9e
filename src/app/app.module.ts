import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitsComponent } from './produits/produits.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ProduitComponent, ProduitsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
