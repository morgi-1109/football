import {StandingItemDto} from "../interfaces/dto/football-api-standing-return-dto";

export class StandingViewItem {
  rank?: number | null;
  logo?: string | null;
  team?: {id?: number | null, name?: string | null} | null;
  played?: number | null;
  win?: number | null;
  lose?: number | null;
  draw?: number | null;
  goalsDiff?: number | null;
  points?: number | null;

  constructor(standingItemDto: StandingItemDto) {
    this.rank = standingItemDto.rank;
    this.logo = standingItemDto.team.logo;
    this.team = {id: standingItemDto.team.id, name: standingItemDto.team.name};
    this.played = standingItemDto.all.played;
    this.win = standingItemDto.all.win;
    this.lose = standingItemDto.all.lose;
    this.draw = standingItemDto.all.draw;
    this.goalsDiff = standingItemDto.goalsDiff;
    this.points = standingItemDto.points;
  }

  get teamName(): string |undefined | null {
    return this.team?.name;
  }

  get teamId(): number | undefined | null {
    return this.team?.id;
  }
}
