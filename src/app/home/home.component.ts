import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit() {
    
  }
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
