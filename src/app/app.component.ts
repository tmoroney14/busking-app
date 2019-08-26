import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider, transformer, fader, stepper } from './route-animations';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    fader,
    // slider,
    // transformer,
    // stepper
  ]
})

export class AppComponent  {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  };
  faCoffee = faCoffee;
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}