import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider, transformer, fader, stepper } from './route-animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    // fader,
    slider,
    // transformer,
    // stepper
  ]
})

export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  };

   onActivate(event) {
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
}

}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}