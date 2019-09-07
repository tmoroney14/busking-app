import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import simpleParallax from 'simple-parallax-js';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}

// $('#scene').parallax();