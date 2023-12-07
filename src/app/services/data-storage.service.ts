import { Injectable } from '@angular/core';
import {map, Observable, of, Subject} from "rxjs";
import {StandingItemDto} from "../models/interfaces/football-api/football-api-standing-return-dto";
import {FootballSportApiWebService} from "./web/football-sport-api-web.service";
import {FixtureItemDto} from "../models/interfaces/football-api/football-api-fixture-return-dto";
import {FixtureView} from "../models/class/fixture-view";
import {StandingView} from "../models/class/standing-view";
import {FixtureViewItem} from "../models/class/fixture-view-item";
import {StandingViewItem} from "../models/class/standing-view-item";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private standings: Record<number, StandingViewItem[]> = {};
  private fixtures: Record<number, FixtureViewItem[]> = {};
  private subject: Subject<{message: string, header: string}> = new Subject<{message: string, header: string}>();

  constructor(private footballSportApiWeb: FootballSportApiWebService) { }

  getFixtureByTeams$(teamId?: number): Observable<FixtureViewItem[]> {
    if (teamId) {
      if (this.fixtures[teamId]) {
        return of(this.fixtures[teamId]);
      }
      else {
        return this.footballSportApiWeb
          .getFixtures$({last: 10, team: teamId})
          .pipe(map((responseItem) => {
            this.fixtures[teamId] = responseItem.fixtures;
            return this.fixtures[teamId];
          }));
      }
    }
    else {
      return of([])
    }
  }

  getStandingByLeague$(leagueId?: number): Observable<StandingViewItem[]> {
    if (leagueId) {
      if (this.standings[leagueId]) {
        return of(this.standings[leagueId]);
      }
      else {
        return this.footballSportApiWeb
          .getStanding$(new Date().getFullYear(), leagueId)
          .pipe(
            map(standingReturn => {
              this.standings[leagueId] = standingReturn.standings;
              return this.standings[leagueId];
            })
          )
      }
    }
    else {
      return of([]);
    }
  }
}
