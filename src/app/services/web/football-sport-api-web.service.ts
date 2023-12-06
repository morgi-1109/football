import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, of, tap, throwError} from "rxjs";
import {FootballApiStandingReturn} from "../../models/interfaces/football-api/football-api-standing-return";
import {FootballApiFixtureReturn} from "../../models/interfaces/football-api/football-api-fixture-return";
import {englandResult, fixtureResponse, franceResult, germanyStanding, italyResult, spainResult} from "../../mockup";


@Injectable({
  providedIn: 'root'
})
export class FootballSportApiWebService {
  static readonly API_KEY = "02133b3f510ed3a87160131b90bf9336";


  constructor(private httpClient: HttpClient) {

  }

  getStanding$(season: number, leagueId: number): Observable<FootballApiStandingReturn> {

    switch (leagueId) {
      case 39: {
        console.log("39");
        return of(englandResult)
      }
        ;
      case 140:
        return of(spainResult);
      case 78:
        return of(germanyStanding);
      case 61:
        return of(franceResult);
      case 135:
        return of(italyResult);
      default: {
        return of()
      }
    }
    // let httpParams = new HttpParams();
    // httpParams = httpParams.append("season", season);
    // httpParams = httpParams.append("league", leagueId);
    // const httpHeaders = new HttpHeaders({"x-rapidapi-key": FootballSportApiWebService.API_KEY});
    // return this.httpClient
    //   .get<FootballApiStandingReturn>("https://v3.football.api-sports.io/standings", {params: httpParams, headers: httpHeaders})
    //   .pipe(tap((val) => {
    //     if (!Array.isArray(val.errors)) {
    //       throw new Error();
    //     }
    //   }))
  }

  getFixtures$(opt?: { last?: number, teamId?: number }): Observable<FootballApiFixtureReturn> {
    // let httpParams = new HttpParams();
    // if (opt) {
    //   if (opt.last) {
    //     httpParams = httpParams.append("last", opt.last);
    //   }
    //   if (opt.teamId) {
    //     httpParams = httpParams.append("team", opt.teamId)
    //   }
    // }
    // const httpHeaders = new HttpHeaders({"x-rapidapi-key": FootballSportApiWebService.API_KEY});
    // return this.httpClient.get<FootballApiFixtureReturn>( "https://v3.football.api-sports.io/fixtures", {params: httpParams, headers: httpHeaders})
    //   .pipe(tap((val) => {
    //     if (!Array.isArray(val.errors)) {
    //       throw new Error();
    //     }
    //   }));
    return of(fixtureResponse)
  }
}
