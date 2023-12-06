import {Component, Input, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SubSink} from "subsink";

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.scss']
})
export class StandingComponent implements OnDestroy{
  leagueId?: number;
  private subSink = new SubSink();

  constructor(private activatedRoute: ActivatedRoute) {
    this.subSink.sink = this.activatedRoute.params.subscribe(param => {
      if (param['leagueId'] && Number(param['leagueId'])) {
        this.leagueId = Number(param['leagueId'])
      }
      else {
        this.leagueId = undefined;
      }
    })
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}
