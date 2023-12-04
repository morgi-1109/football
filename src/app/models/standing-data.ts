export interface StandingData {
  get: string;
  parameters: {
    league?: string,
    season?: string
  },
  errors: any[],
  results: number,
  paging: {
    current: number,
    total: number
  },
  response: {
      league: {
        id: number;
        name: string;
        country: string;
        logo: string;
        flag: string;
        season: number;
        standings: {
          rank: number;
          team: {id: number; name: string; logo: string};
          points: number;
          goalsDiff: number;
          group: string;
          form: string;
          status: string;
          description: string;
          all: {played: number; win: number; draw: number; lose: number; goals: {for: number; against: number}};
          home: {
            played: number;
            win: number;
            draw: number;
            lose: number;
            goals: {
              for: number;
              against: number
            }
          },
          away: {
            played: number,
            win: number,
            draw: number,
            lose: number,
            goals: {
              for: number,
              against: number
            }
          };
          update: string;
        }[][]
      }
    }[];

}
