import { Component, OnInit } from '@angular/core';
declare const L:any;

@Component({
  selector: 'ecol-viewer-climatemap',
  templateUrl: './climatemap.component.html',
  styleUrls: ['./climatemap.component.scss']
})
export class ClimatemapComponent implements OnInit {
  
  
  constructor() {
    
  }

  ngOnInit() {
    const osmUrl = '//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const  osm = new L.TileLayer(osmUrl, {minZoom: 3 , maxZoom: 12});
    
    const map = L.map('leafletmap', {
      zoomControl: false,
      center: L.latLng(35.29, -112),
      zoom: 5,
      minZoom: 4,
      maxZoom: 12,
      layers: [osm]
      });

    L.esri.basemapLayer("Gray").addTo(map);

    const andreas = L.tileLayer.wms('//fs.bioe.orst.edu:6443/arcgis/services/SoCal_SEVA/biodiv_ssolnw/ImageServer/WMSServer', {
      layers: '0',
      format: 'image/png',
      transparent: true,
  }).addTo(map);

      
  }
   leafletTestText = 'tester3';

   
   
  


  

}
