import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
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

  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
    this.fixtures$ = this.dataStorageService.getFixtureByTeams$(this.teamId)
  }
}
