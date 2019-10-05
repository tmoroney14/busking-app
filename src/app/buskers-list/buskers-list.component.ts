import { Component, OnInit, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';
import { buskers } from '../buskers';

@Component({
  selector: 'app-buskers-list',
  templateUrl: './buskers-list.component.html',
  styleUrls: ['./buskers-list.component.css'],
})
export class BuskersListComponent implements OnInit, AfterViewInit {
  buskers = buskers;

  constructor() { }

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


  ngAfterViewInit() {
   window.scrollTo(0, 0);
  }

}