import {
  Component,
  Input, OnChanges, SimpleChanges,
} from '@angular/core';
import {FootballSportApiWebService} from "../../services/web/football-sport-api-web.service";
import {SubSink} from "subsink";
import {StandingTableColumn} from "../../models/interfaces/standing-table-column";
import {StandingItem} from "../../models/interfaces/football-api/football-api-standing-return";
import {ActivatedRoute} from "@angular/router";
import {catchError, flatMap, ignoreElements, map, Observable, of, scan, tap} from "rxjs";

@Component({
  selector: 'app-lead-standing-table',
  templateUrl: './lead-standing-table.component.html',
  styleUrls: ['./lead-standing-table.component.scss']
})
export class LeadStandingTableComponent implements OnChanges{
  @Input() leagueId?: number;
  standings$?: Observable<StandingItem[]>;
  standingsError$?: Observable<StandingItem[]>;

  columns: StandingTableColumn[] = [
    {property: 'rank'},
    {property: 'logo'},
    {property: 'name', label: 'Name'},
    {property: 'played', label: 'Games'},
    {property: 'win', label: 'W'},
    {property: 'lose', label: 'L'},
    {property: 'draw', label: 'D'},
    {property: 'goalDiff', label: 'Goal Difference'},
    {property: 'points', label: 'Points'}

  ]

  constructor(private footballSportApiWeb: FootballSportApiWebService, private activatedRoute: ActivatedRoute) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['leagueId']) {
      this.loadStanding(this.leagueId);
    }
  }

  private loadStanding(leagueId?: number) {
    if (leagueId) {
      this.standings$ = this.footballSportApiWeb
        .getStanding$(new Date().getFullYear(), leagueId)
        .pipe(
          map(standingReturn => {
            return standingReturn.response.reduce((prev, current) => [...prev, ...current.league.standings.flatMap((x) => x)],[] as StandingItem[])
          }),
        )
      this.standingsError$ = this.standings$.pipe(ignoreElements(), catchError((err) => of(err)))
    }
    else {
      this.standings$ = of([])
    }

  }






}
