import { templateJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";


@Component({
    selector:'app-heroes',
    templateUrl:'./heroe.component.html'
})  

export class HeroeComponent{
    
    public titulo:string =  'Heroes trabajando';   

    nombre:string  = 'Aang';
    edad:number = 12;

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad} `;
    }
    getNombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }
    cambiarNombre():void{
        this.nombre = 'Korra';
    }
    cambiarEdad():void{
        this.edad = 18;
    }
}