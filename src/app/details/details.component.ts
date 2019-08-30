import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { SafePipe } from '../safe.pipe';
import { buskers } from '../buskers';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})


export class DetailsComponent implements OnInit {
  panelOpenState = false;

  
    

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