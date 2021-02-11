import {Component} from '@angular/core';

@Component({
    selector:'app-contador',
    template:`

        <h1> {{ title }}</h1>

        <h3>La base es: <strong>{{base}}</strong></h3>
        
        <button (click)=" acumular(-base) ">-{{base}}</button>
        
        <span> {{ numeroA }}</span>
        
        <button (click)=" acumular(base) ">+{{base}}</button>    
    `
})

export class ContadorComponent{

    public title  : string = 'Contador App';
    public numeroA: number = 10;
    public nb     : number = 0;

    acumular( valor:number ):number{
    this.numeroA +=valor;
    return valor
    }
    //sumar(){ this.numeroA += 1 };
    //restar= ()=> this.numeroA -= 1;
    public base: number = 5;
    //crear una nueva propiedad llamada base: number = 5;

}