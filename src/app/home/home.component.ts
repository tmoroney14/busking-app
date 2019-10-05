import { Component, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit {

  showToggle: string;
  mode: string;
  openSidenav:boolean;
  private screenWidth$ = new BehaviorSubject<number>
    (window.innerWidth);

  @ViewChild('sidenav') matSidenav: MatSidenav;


  ngOnInit() {
    this.getScreenWidth().subscribe(width => {
       if (width < 900) {
        this.showToggle = 'show';
        this.mode = 'over';
        this.openSidenav = false;
      }
      else if (width > 900) {
        this.showToggle = 'hide';
        this.mode = 'side';
        this.openSidenav = true;
      }
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth$.next(event.target.innerWidth);
  }
  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }


  ngAfterViewInit(): void {
    // @ts-ignore
    twttr.widgets.load(
  document.getElementById("container")
);
}

}
