import {Component, Input, OnInit} from '@angular/core';
import {catchError, ignoreElements, map, Observable, of} from "rxjs";
import {FixtureItem} from "../../models/interfaces/football-api/football-api-fixture-return";
import {FootballSportApiWebService} from "../../services/web/football-sport-api-web.service";

@Component({
  selector: 'app-team-fixtures',
  templateUrl: './team-fixtures.component.html',
  styleUrls: ['./team-fixtures.component.scss']
})
export class TeamFixturesComponent implements OnInit {
  @Input() teamId?: number;
  fixtures$?: Observable<FixtureItem[]>;
  fixtureLoadingError$ = new Observable<any>();

  constructor(private footballSportApiWebService: FootballSportApiWebService) {
  }

  ngOnInit(): void {
    this.fixtures$ = this.footballSportApiWebService
      .getFixtures$({last: 10, teamId: this.teamId})
      .pipe(map((responseItem) => responseItem.response));
    this.fixtureLoadingError$ = this.fixtures$.pipe(ignoreElements(), catchError((err) => of(err)))
  }
}
