import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {
  
  constructor() {
    console.log('constructor');
  }
  series:string[] =['Love, Death and Robots', 'Close Enought', 'Neon Genesis:Evangelion','Avatar: The last airbender','Toradora','Attack on titan'];
  borrado:string[] =[];
  //borrado:string = '';
  borrar( indice:number):void{
    console.log('borrandoo..');
    //this.borrado = this.series[0];
    this.borrado = this.series.splice(indice,1) || ["no nes"];  
    //this.borrado = this.series.splice(0,1)  || 'No hay nada que borrar' ;  //no muestra nada
    console.log(this.series.length);   
    console.log(this.borrado); 
  }

}
