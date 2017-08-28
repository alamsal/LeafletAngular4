import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'ecol-viewer-climatemap',
  templateUrl: './climatemap.component.html',
  styleUrls: ['./climatemap.component.scss']
})
export class ClimatemapComponent implements OnInit {
  leafletTestText = 'tester3';
  map = new L.Map('leafletmap');
  osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  constructor() {

  }

  ngOnInit() {
    
    const osm = new L.TileLayer(this.osmUrl, {minZoom: 3 , maxZoom: 12});
    this.map.setView(new L.LatLng(51, 0.7), 9);
  
    this.map.addLayer(osm);
  }


  

}
