import { Component, OnInit, AfterViewInit, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {
  
  @ViewChild('sidenav') sidenav: MatDrawer;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth < 800) {
            this.sidenav.close();
        }
        else { this.sidenav.open(); }
    }

  constructor() {
    
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    // @ts-ignore
    twttr.widgets.load();
}
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
