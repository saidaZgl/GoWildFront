import { Injectable } from '@angular/core';

@Injectable()

export class MapServices {
  position: Position;

  constructor() {
  }

  findme() {
    // Si le navigateur récupère des coordonnées de géolocalisation
    if ( navigator.geolocation ) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.position = position;
      });
      return this.position;
    }
  }
}
