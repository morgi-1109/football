import {FootballApiFixtureReturnDto} from "../interfaces/football-api/football-api-fixture-return-dto";
import {FixtureViewItem} from "./fixture-view-item";

export class FixtureView {
  fixtures:FixtureViewItem[];
  //fixtures: Record<'away' | 'home', FixtureViewItem[]>
  constructor(fixtureDto?: FootballApiFixtureReturnDto) {
    if (fixtureDto && fixtureDto.response.length > 0) {

      this.fixtures = fixtureDto.response.map(fixtureItemDto => new FixtureViewItem(fixtureItemDto))
    }
    else {
      this.fixtures = [];
    }

  }
}
