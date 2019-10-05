import { Component, OnInit, AfterViewInit } from '@angular/core';
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

  ngOnInit() {
    
  }

  ngAfterViewInit() {
   window.scrollTo(0, 0);
  }

}