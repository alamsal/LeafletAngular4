import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'ecol-viewer-climatemap',
  templateUrl: './climatemap.component.html',
  styleUrls: ['./climatemap.component.scss']
})
export class ClimatemapComponent implements OnInit {
  

  constructor() {

  }

  ngOnInit() {

    const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const  osm = new L.TileLayer(osmUrl, {minZoom: 3 , maxZoom: 12});

    const map = L.map('leafletmap', {
      zoomControl: false,
      center: L.latLng(35.29, -112),
      zoom: 5,
      minZoom: 4,
      maxZoom: 12,
      layers: [osm]
      });


  }
   leafletTestText = 'tester3';


   
  


  

}
