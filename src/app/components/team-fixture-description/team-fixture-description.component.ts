import {Component, Input, OnInit} from '@angular/core';
import {FixtureViewItem} from "../../models/class/fixture-view-item";

@Component({
  selector: 'app-team-fixture-description',
  templateUrl: './team-fixture-description.component.html',
  styleUrls: ['./team-fixture-description.component.scss']
})
export class TeamFixtureDescriptionComponent implements OnInit {
  @Input() fixtureViewItem?: FixtureViewItem;
  teamTypes: (keyof FixtureViewItem)[] = ['away', 'home']

  ngOnInit() {

  }


}
