import {FootballApiReturn} from "./football-api-return";

export interface FootballApiStandingReturn extends FootballApiReturn{
  response: {
    league: {
      id: number | null;
      name: string | null;
      country: string | null;
      logo: string | null;
      flag: string | null;
      season: number | null;
      standings: StandingItem[] []
    }
  }[];
}
export interface StandingItem {

  rank: number | null;
  team: {
    id: number | null;
    name: string | null;
    logo: string | null
  };
  points: number | null;
  goalsDiff: number | null;
  group: string | null;
  form: string | null;
  status: string | null;
  description: string | null;
  all: {
    played: number | null;
    win: number | null;
    draw: number | null;
    lose: number | null;
    goals: {
      for: number | null;
      against: number | null
    }
  };
  home: {
    played: number | null;
    win: number | null;
    draw: number | null;
    lose: number | null;
    goals: {
      for: number | null;
      against: number | null
    }
  };
  away: {
    played: number | null;
    win: number | null;
    draw: number | null;
    lose: number | null;
    goals: {
      for: number | null;
      against: number | null
    }
  };
  update: string | null

}

