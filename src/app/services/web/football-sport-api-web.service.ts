import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {FootballApiStandingReturnDto,} from "../../models/interfaces/dto/football-api-standing-return-dto";
import {FootballApiFixtureReturnDto} from "../../models/interfaces/dto/football-api-fixture-return-dto";
import {StandingView} from "../../models/class/standing-view";
import {FixtureView} from "../../models/class/fixture-view";


@Injectable({
  providedIn: 'root'
})
export class FootballSportApiWebService {
  static readonly API_KEY = "02133b3f510ed3a87160131b90bf9336";


  constructor(private httpClient: HttpClient) {

  }

  getStanding$(season: number, leagueId: number): Observable<StandingView> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append("season", season);
    httpParams = httpParams.append("league", leagueId);
    const httpHeaders = new HttpHeaders({"x-rapidapi-key": FootballSportApiWebService.API_KEY});
    return this.httpClient
      .get<FootballApiStandingReturnDto>("https://v3.football.api-sports.io/standings", {
        params: httpParams,
        headers: httpHeaders
      })
      .pipe(
        tap((val) => {
          if (!!val.errors && !Array.isArray(val.errors)) {
            throw new Error(this.mapApiErrorsToString(val.errors))
          }
        }),
        map(standingReturn => new StandingView(standingReturn)),
      )
  }

  getFixtures$(opt?: { last?: number, team?: number }): Observable<FixtureView> {
    let httpParams = new HttpParams();
    if (opt) {
      if (opt.last) {
        httpParams = httpParams.append("last", opt.last);
      }
      if (opt.team) {
        httpParams = httpParams.append("team", opt.team)
      }
    }
    const httpHeaders = new HttpHeaders({"x-rapidapi-key": FootballSportApiWebService.API_KEY});
    return this.httpClient
      .get<FootballApiFixtureReturnDto>("https://v3.football.api-sports.io/fixtures", {
        params: httpParams,
        headers: httpHeaders
      })
      .pipe(
        tap((val) => {
          if (!!val.errors && !Array.isArray(val.errors)) {
            throw new Error(this.mapApiErrorsToString(val.errors))
          }
        }),
        map(returnDto => new FixtureView(returnDto))
      );
  }

  private mapApiErrorsToString(error: Record<string, string>) {
    let errorString: string;
    try {
      errorString = Object.keys(error).map(errorKey => error[errorKey]).join('\r\n');
    } catch {
      errorString = "Unknown error"
    }
    return errorString
  }
}
