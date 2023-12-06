import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-team-fixture-description',
  templateUrl: './team-fixture-description.component.html',
  styleUrls: ['./team-fixture-description.component.scss']
})
export class TeamFixtureDescriptionComponent {
  @Input() logo?: string | null;
  @Input() name?: string | null;
  @Input() goal?: number | null;
  @Input() reverseOrder?: boolean;

}
