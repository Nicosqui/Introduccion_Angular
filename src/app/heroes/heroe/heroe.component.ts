import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: `heroe.Component.html`

})
export class HeroeComponent{

    nombre: string = 'ironman';
    edad  : number = 45

    get nombreCapitalizado() {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }

}