import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {

  @Input() personajeDetalles: any = [];

  click:boolean = false;
  ocultar:boolean = false;

  detalles(){
    this.ocultar= !this.ocultar;
    this.click= false;
  }

}
