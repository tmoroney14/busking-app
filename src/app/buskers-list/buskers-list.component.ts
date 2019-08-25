import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { buskers } from '../buskers';

@Component({
  selector: 'app-buskers-list',
  templateUrl: './buskers-list.component.html',
  styleUrls: ['./buskers-list.component.css'],
})
export class BuskersListComponent implements OnInit {
  buskers = buskers;

  constructor() { }

  ngOnInit() {
  }

}