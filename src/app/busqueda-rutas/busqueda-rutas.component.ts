import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { BusquedaDestino } from './../model/busqueda-destino';

@Component({
  selector: 'app-busqueda-rutas',
  templateUrl: './busqueda-rutas.component.html',
  styleUrls: ['./busqueda-rutas.component.css']
})
export class BusquedaRutasComponent implements OnInit {

  private urlRuta: string = 'https://minticloud.uis.edu.co/c3s59grupo8/ruta';
  private urlCiudad: string = 'https://minticloud.uis.edu.co/c3s59grupo8/ciudad';

  listaCiudades: Array<any>;

  idCiudadOrigenSelected:number;
  idCiudadDestinoSelected:number;
  
  datosEncontrados:BusquedaDestino;

  constructor(private restService:RestService) { 
    this.listaCiudades = []
    this.idCiudadOrigenSelected = 0;
    this.idCiudadDestinoSelected = 0;
  }

  ngOnInit(): void {
    //this.buscarData();
    this.buscarDataCiudades();
  }

  public buscarData() {
    this.restService.getDataFromApi(`${this.urlRuta}`).subscribe(response => {
      console.log(response)
    })
  }

  public buscarDataCiudades() {
    this.restService.getDataFromApi(`${this.urlCiudad}`).subscribe(response => {
      this.listaCiudades.push(response)      
    })
  }

  public guardarCiudadOrigen(ciudad:any) {
    //console.log(ciudad)
    this.idCiudadOrigenSelected = ciudad.ciudadId
    //console.log(this.idCiudadOrigenSelected)
  }

  public guardarCiudadDestino(ciudad:any) {
    //console.log(ciudad)
    this.idCiudadDestinoSelected = ciudad.ciudadId
    //console.log(this.idCiudadDestinoSelected)
  }

  public consultarDestinosSeleccionados() {
    this.restService.getDataFromApi(`${this.urlRuta}/${this.idCiudadOrigenSelected}/${this.idCiudadDestinoSelected}`).subscribe((response:any) => {
      this.datosEncontrados = response
      //console.log(response)
    })
  }

}
