import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { buskers } from '../buskers';


@Component({
  selector: 'app-buskers-home',
  templateUrl: './buskers-home.component.html',
  styleUrls: ['./buskers-home.component.css']
})
export class BuskersHomeComponent implements OnInit {
  buskers = buskers;

  constructor() { }

  ngOnInit() {
  }

}