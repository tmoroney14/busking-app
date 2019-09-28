import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {

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
