import {Component, Input, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SubSink} from "subsink";

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.scss']
})
export class FixturesComponent implements OnDestroy{
  teamId?: number;
  leagueId?: number;
  private subSink = new SubSink();

  constructor(private activatedRoute: ActivatedRoute) {
    this.subSink.sink = this.activatedRoute.params.subscribe(param => {
      if (param['leagueId'] && Number(param['leagueId']) && param['teamId'] && Number(param['teamId'])) {
        this.leagueId = Number(param['leagueId']);
        this.teamId = Number(param['teamId']);
      } else {
        this.leagueId = this.teamId = undefined;
      }
    })

  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }


}
