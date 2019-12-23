import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;


  public StringToTable(str:String){
    let sortie: Array<string>;
    let table: Array<Array<string>>;
    sortie = str.replace("[[", "").replace("]]", "").split("], [");
    sortie.forEach(function (value) {
      table.push(value.split(", "));
    })
    
  }
}