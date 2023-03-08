import { Component, OnInit } from '@angular/core';
//import * as internal from 'stream';

interface Tarjeta {
  titulo:string;
  subtitulo:string;
  image?:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mi Primera App Angular';
  public ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(): void {
    this.ArregloTarjetas = [
      {titulo: 'video 1', subtitulo: 'subtitulo video 1', image:"https://indiehoy.com/wp-content/uploads/2021/08/yoda.jpg"},
      {titulo: 'video 2', subtitulo: 'subtitulo video 2', image:"https://sm.ign.com/t/ign_latam/screenshot/default/markhamill_1mxu.1280.jpg"},
      {titulo: 'video 3', subtitulo: 'subtitulo video 3', image:"https://lumiere-a.akamaihd.net/v1/images/anakin_skywalker_004_a316c9cb.jpeg?region=154,0,813,813"},
    ]  
  }

}
