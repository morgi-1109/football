import {FixtureItemDto} from "../interfaces/football-api/football-api-fixture-return-dto";

export class FixtureViewItem {
  away: {
    goals?: number | null;
    logo?: string | null;
    teamName?: string | null;
  };

  home: {
    goals?: number | null;
    logo?: string | null;
    teamName?: string | null;
  }

  constructor(fixtureItemDto?: FixtureItemDto) {
    if (fixtureItemDto) {
      this.away = {
        goals: fixtureItemDto.goals.away,
        logo: fixtureItemDto.teams.away.logo,
        teamName: fixtureItemDto.teams.away.name
      }

      this.home = {
        goals: fixtureItemDto.goals.home,
        logo: fixtureItemDto.teams.home.logo,
        teamName: fixtureItemDto.teams.home.name
      }
    }
    else {
      this.away = {};
      this.home = {};
    }

  }
}
