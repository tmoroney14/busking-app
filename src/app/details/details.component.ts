import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import { SafePipe } from '../safe.pipe';
import { buskers } from '../buskers';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})


export class DetailsComponent implements OnInit {
  panelOpenState = false;
  
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  
    

  constructor(
    private route: ActivatedRoute,
  ) {
    
  }

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.busker = buskers[+params.get('buskerId')];
  });
  }
}