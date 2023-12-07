import {FootballApiStandingReturnDto, StandingItemDto} from "../interfaces/football-api/football-api-standing-return-dto";
import {StandingViewItem} from "./standing-view-item";

export class StandingView {
  standings: StandingViewItem[];

  constructor(standingReturnDto?: FootballApiStandingReturnDto) {
    if (standingReturnDto && standingReturnDto.response.length > 0 ) {
      const standingItemsDtos = standingReturnDto.response
        .reduce((prev, current) => {
          return [...prev, ...current.league.standings.flatMap((x) => x)]
        },[] as StandingItemDto[]);
      this.standings =  standingItemsDtos.map(standingItemDto => new StandingViewItem(standingItemDto));
    }
    else {
      this.standings = [];
    }

  }
}
