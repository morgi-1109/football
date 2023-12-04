import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {StandingData} from "../../models/standing-data";

@Injectable({
  providedIn: 'root'
})
export class FootballSportApiWebService {
  static readonly API_KEY = "02133b3f510ed3a87160131b90bf9336";
  private serviceUrl = "https://v3.football.api-sports.io/standings";

  constructor(private httpClient: HttpClient) {

  }

  getStanding$(season: string, opt?: {leagueId?: string}) : Observable<StandingData>{
    let httpParams = new HttpParams();
    httpParams = httpParams.append("season", "2024");
    httpParams = httpParams.append("x-rapidapi-key", FootballSportApiWebService.API_KEY)
    if (opt && opt.leagueId) {
      httpParams = httpParams.append("league", opt.leagueId);
    }
    return this.httpClient.get<StandingData>(this.serviceUrl,{params: httpParams});
  }
}
