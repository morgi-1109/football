import {Component, OnDestroy, OnInit} from '@angular/core';
import {StandingData} from "./models/standing-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'certification-football-app';

  constructor() {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

}
