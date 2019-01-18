import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenDataParisServices } from '../../services/OpenDataParisServices';
import { MapServices } from '../../services/map.services';
import * as L from 'leaflet';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: any;
  event: any;
  gowildEvent: any;
  position: Position;

  constructor(private route: ActivatedRoute,
              private api: OpenDataParisServices,
              private eventApi: EventsService,
              private gps: MapServices) {
    }

  ngOnInit() {
    // recuperation of selected element
    const id = this.route.snapshot.params['id'];
    this.event = this.api.getEventById(id);
    this.gowildEvent = this.eventApi.getEventById(id);
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    this.position = this.gps.position;
    const map = L.map('map').setView([this.position.coords.latitude, this.position.coords.longitude], 11);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Carte de Paris'
    }).addTo(map);

    function onLocationFound(e: any) {
      const myIcon = L.icon({
        iconUrl: '../assets/images/marker-icon-red.png'
      });
      L.marker([e.latitude, e.longitude], { icon: myIcon }).bindPopup('Vous êtes ici').addTo(map).openPopup();
    }

    const eventLocation = () => {
      const myIcon = L.icon({
        iconUrl: '../assets/images/marker-icon-black.png'
      });
      L.marker(this.event.fields.latlon,
        {icon: myIcon}).bindPopup('Votre événement').addTo(map).openPopup();
    };

    function onLocationError(e) {
      alert(e.message);
    }

  map.on('locationerror', onLocationError);
  map.locate({setView: true, maxZoom: 11});

    map.on('locationfound', onLocationFound);
    map.on('locationfound', eventLocation);

  }

}
