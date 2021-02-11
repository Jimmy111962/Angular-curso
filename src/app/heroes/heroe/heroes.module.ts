import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

import { ListadoComponent } from "../listado/listado.component";
import { HeroeComponent } from "./heroe.component";

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    imports:[
        CommonModule /** Si voy a trabajar con alguna directiva como *ngIf o *ngFor*/
    ],
    exports:[
        ListadoComponent
    ]
})
export class HeroesModule{

}













































/**
 * import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { ListadoComponent } from '../listado/listado.component';

import { HeroeComponent } from './heroe.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        //van todos los modulos 
        CommonModule
    ]
})

export class HeroesModule{

}
 */