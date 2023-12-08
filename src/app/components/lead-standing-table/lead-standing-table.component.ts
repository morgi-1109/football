import {Component, Input, OnChanges, SimpleChanges,} from '@angular/core';
import {StandingTableColumn} from "../../models/interfaces/standing-table-column";
import {Observable} from "rxjs";
import {DataStorageService} from "../../services/data-storage.service";
import {StandingViewItem} from "../../models/class/standing-view-item";

@Component({
  selector: 'app-lead-standing-table',
  templateUrl: './lead-standing-table.component.html',
  styleUrls: ['./lead-standing-table.component.scss']
})
export class LeadStandingTableComponent implements OnChanges{
  @Input() leagueId?: number;
  standings$?: Observable<StandingViewItem[]>;

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

  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['leagueId']) {
      this.loadStanding(this.leagueId);
    }
  }

  private loadStanding(leagueId?: number) {
    this.standings$ = this.dataStorageService.getStandingByLeague$(leagueId);
  }


  getStandingProperty(standing: StandingViewItem, propertyName: string): any {
    return standing[propertyName as keyof StandingViewItem];
  }
}
