import { Component, OnInit } from '@angular/core';
import { RouterOutlet,  NavigationEnd } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BehaviorSubject, Observable } from 'rxjs';
import { slider, transformer, fader, stepper } from './route-animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    // fader,
    // slider,
    // transformer,
    // stepper
  ]
})

export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  };


}
