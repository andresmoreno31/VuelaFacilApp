import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public image:string;

  constructor() { 
    //this.image = 'http://a21.com.mx/sites/default/files/field/image/A21%20avio%CC%81n%20Me%CC%81xico%20portada%204_15.jpg';
    //this.image = 'http://a21.com.mx/sites/default/files/field/image/a21_portada_13noviembre_2017__0_0.jpg';
    //this.image = 'http://a21.com.mx/sites/default/files/field/image/Portada%20Ame%CC%81rica%20latinoamerica_0%20%281%29_0.jpeg';
    this.image = 'http://a21.com.mx/sites/default/files/field/image/nota%2027%20de%20julio_0_0.jpg';
  }

  ngOnInit(): void {    
  }

}
