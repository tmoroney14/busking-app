import { Component, OnInit, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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


export class DetailsComponent implements OnInit, AfterViewInit {
  
  panelOpenState = false;
  
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faYoutube = faYoutube;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngAfterViewInit() {
   window.scrollTo(0, 0);
  }

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.busker = buskers[+params.get('buskerId')];
  });
  this.getScreenWidth().subscribe(width => {
       if (width < 900) {
        this.showToggle = 'show';
        this.mode = 'over';
        this.openSidenav = false;
      }
      else if (width > 900) {
        this.showToggle = 'hide';
        this.mode = 'side';
        this.openSidenav = true;
      }
    });
  }

  showToggle: string;
  mode: string;
  openSidenav:boolean;
  private screenWidth$ = new BehaviorSubject<number>
    (window.innerWidth);

  @ViewChild('sidenav') matSidenav: MatSidenav;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth$.next(event.target.innerWidth);
  }
  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }
}