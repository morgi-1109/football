import {FootballApiReturnDto} from "./football-api-return-dto";

export interface FootballApiFixtureReturnDto extends FootballApiReturnDto {

  response: FixtureItemDto[]

}

export interface FixtureItemDto {
  fixture: {
    id: number | null,
      referee?: any | null,
      timezone: string | null,
      date: string | null,
      timestamp: number | null,
      periods: {
      first?: number | null ,
        second?: number | null
    },
    venue: {
      id: number | null,
        name: string | null,
        city: string | null
    },
    status: {
      long: string | null,
        short: string | null,
        elapsed: number | null
    }
  },
  league: {
    id: number | null,
      name: string | null,
      country: string | null,
      logo: string | null,
      flag: string | null,
      season: number | null,
      round: string | null
  },
  teams: {
    home: {
      id: number | null,
        name: string | null,
        logo: string | null,
        winner: boolean | null
    },
    away: {
      id: number | null,
        name: string | null,
        logo: string | null,
        winner?: boolean | null
    }
  },
  goals: {
    home?: number | null,
      away?: number | null
  },
  score: {
    halftime: {
      home?: number | null,
        away?: number | null
    },
    fulltime: {
      home?: number | null,
        away?: number | null
    },
    extratime: {
      home?: number | null,
        away?: number | null
    },
    penalty: {
      home?: number | null,
        away?: number | null
    }
  }

}
