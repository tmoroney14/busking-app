import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SafePipe } from '../safe.pipe';
import { buskers } from '../buskers';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})


export class DetailsComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenavModule;

  @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth < 500) {
            this.sidenav.close();
        }
    }
    

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.busker = buskers[+params.get('buskerId')];
  });
  }
}