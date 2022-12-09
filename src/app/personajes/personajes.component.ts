import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})

export class PersonajesComponent implements OnInit{

  personajes:any = null;

  personajeBuscar:string='';

  busqueda:boolean = false;

constructor(private http: HttpClient){}

  ngOnInit(): void{
    this.http.get('https://rickandmortyapi.com/api/character/1,2,3,4,5').subscribe
    (res => this.personajes = res);
  }

}
