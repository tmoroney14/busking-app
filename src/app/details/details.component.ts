import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { buskers } from '../buskers';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.busker = buskers[+params.get('buskerId')];
  });
}

}