import {Injectable} from '@angular/core';
import {catchError, map, Observable, of, Subject} from "rxjs";
import {FootballSportApiWebService} from "./web/football-sport-api-web.service";
import {FixtureViewItem} from "../models/class/fixture-view-item";
import {StandingViewItem} from "../models/class/standing-view-item";
import {Alert} from "../models/interfaces/alert";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private standings: Record<number, StandingViewItem[]> = {};
  private fixtures: Record<number, FixtureViewItem[]> = {};
  private alertSubject: Subject<Alert | undefined> = new Subject<Alert | undefined>();
  alert$ = this.alertSubject.asObservable();
  private timeoutID?: number;

  constructor(private footballSportApiWeb: FootballSportApiWebService) { }

  getFixtureByTeams$(teamId?: number): Observable<FixtureViewItem[]> {
    if (teamId) {
      if (this.fixtures[teamId]) {
        return of(this.fixtures[teamId]);
      }
      else {
        return this.footballSportApiWeb
          .getFixtures$({last: 10, team: teamId})
          .pipe(
            map((responseItem) => {
            this.fixtures[teamId] = responseItem.fixtures;
            return this.fixtures[teamId];
            }),
            catchError((error) => this.catchErrorRequest(error)));
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
            }),
            catchError((error) => this.catchErrorRequest(error))
          )
      }
    }
    else {
      return of([]);
    }
  }

  showAlert(alert: Alert) {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
    }
    this.alertSubject.next(alert);
    this.timeoutID = setTimeout(() => {
      this.alertSubject.next(undefined);
    }, 3000)
  }

  private catchErrorRequest(error: HttpErrorResponse) {
    this.showAlert({header: "Error", message: "Something bad happened; please try again later.", severity: "danger"})
    console.log(error);
    return of([])
  }
}
