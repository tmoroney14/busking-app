import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet,  NavigationEnd } from '@angular/router';
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

export class AppComponent implements OnInit {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  };


}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}