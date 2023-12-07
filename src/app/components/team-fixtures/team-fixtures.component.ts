import {Component, Input, OnInit} from '@angular/core';
import {catchError, ignoreElements, map, Observable, of} from "rxjs";
import {FixtureItemDto} from "../../models/interfaces/football-api/football-api-fixture-return-dto";
import {FootballSportApiWebService} from "../../services/web/football-sport-api-web.service";
import {DataStorageService} from "../../services/data-storage.service";
import {FixtureViewItem} from "../../models/class/fixture-view-item";

@Component({
  selector: 'app-team-fixtures',
  templateUrl: './team-fixtures.component.html',
  styleUrls: ['./team-fixtures.component.scss']
})
export class TeamFixturesComponent implements OnInit {
  @Input() teamId?: number;
  fixtures$?: Observable<FixtureViewItem[]>;
  fixtureLoadingError$ = new Observable<any>();

  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
    this.fixtures$ = this.dataStorageService.getFixtureByTeams$(this.teamId)
   this.fixtureLoadingError$ = this.fixtures$.pipe(ignoreElements(), catchError((err) => of(err)))
  }
}
