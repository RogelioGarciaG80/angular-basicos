import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'  
})
export class ListadoComponent  {
   
  heroes:string[] = ['Goku','Superman','Batman','Thor'];
  heroeBorrado:string = '';
  constructor() {
    console.log('Constructor');
   }

   borrarHeroe():void
   {
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
   }
}
