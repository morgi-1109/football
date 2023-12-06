import {FootballApiFixtureReturn} from "./models/interfaces/football-api/football-api-fixture-return";
import {FootballApiStandingReturn} from "./models/interfaces/football-api/football-api-standing-return";



export const italyResult : FootballApiStandingReturn ={
  "get": "standings",
  "parameters": {
    "season": "2023",
    "league": "135"
  },
  "errors": [],
  "results": 1,
  "paging": {
    "current": 1,
    "total": 1
  },
  "response": [
    {
      "league": {
        "id": 135,
        "name": "Serie A",
        "country": "Italy",
        "logo": "https:\/\/media-4.api-sports.io\/football\/leagues\/135.png",
        "flag": "https:\/\/media-4.api-sports.io\/flags\/it.svg",
        "season": 2023,
        "standings": [
          [
            {
              "rank": 1,
              "team": {
                "id": 505,
                "name": "Inter",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/505.png"
              },
              "points": 35,
              "goalsDiff": 26,
              "group": "Serie A",
              "form": "WDWWW",
              "status": "same",
              "description": "Promotion - Champions League (Group Stage: )",
              "all": {
                "played": 14,
                "win": 11,
                "draw": 2,
                "lose": 1,
                "goals": {
                  "for": 33,
                  "against": 7
                }
              },
              "home": {
                "played": 7,
                "win": 5,
                "draw": 1,
                "lose": 1,
                "goals": {
                  "for": 17,
                  "against": 5
                }
              },
              "away": {
                "played": 7,
                "win": 6,
                "draw": 1,
                "lose": 0,
                "goals": {
                  "for": 16,
                  "against": 2
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 2,
              "team": {
                "id": 496,
                "name": "Juventus",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/496.png"
              },
              "points": 33,
              "goalsDiff": 13,
              "group": "Serie A",
              "form": "WDWWW",
              "status": "same",
              "description": "Promotion - Champions League (Group Stage: )",
              "all": {
                "played": 14,
                "win": 10,
                "draw": 3,
                "lose": 1,
                "goals": {
                  "for": 22,
                  "against": 9
                }
              },
              "home": {
                "played": 7,
                "win": 5,
                "draw": 2,
                "lose": 0,
                "goals": {
                  "for": 11,
                  "against": 4
                }
              },
              "away": {
                "played": 7,
                "win": 5,
                "draw": 1,
                "lose": 1,
                "goals": {
                  "for": 11,
                  "against": 5
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 3,
              "team": {
                "id": 489,
                "name": "AC Milan",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/489.png"
              },
              "points": 29,
              "goalsDiff": 9,
              "group": "Serie A",
              "form": "WWDLD",
              "status": "same",
              "description": "Promotion - Champions League (Group Stage: )",
              "all": {
                "played": 14,
                "win": 9,
                "draw": 2,
                "lose": 3,
                "goals": {
                  "for": 24,
                  "against": 15
                }
              },
              "home": {
                "played": 7,
                "win": 5,
                "draw": 0,
                "lose": 2,
                "goals": {
                  "for": 11,
                  "against": 4
                }
              },
              "away": {
                "played": 7,
                "win": 4,
                "draw": 2,
                "lose": 1,
                "goals": {
                  "for": 13,
                  "against": 11
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 4,
              "team": {
                "id": 497,
                "name": "AS Roma",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/497.png"
              },
              "points": 24,
              "goalsDiff": 11,
              "group": "Serie A",
              "form": "WWDWL",
              "status": "same",
              "description": "Promotion - Champions League (Group Stage: )",
              "all": {
                "played": 14,
                "win": 7,
                "draw": 3,
                "lose": 4,
                "goals": {
                  "for": 27,
                  "against": 16
                }
              },
              "home": {
                "played": 7,
                "win": 5,
                "draw": 1,
                "lose": 1,
                "goals": {
                  "for": 18,
                  "against": 6
                }
              },
              "away": {
                "played": 7,
                "win": 2,
                "draw": 2,
                "lose": 3,
                "goals": {
                  "for": 9,
                  "against": 10
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 5,
              "team": {
                "id": 492,
                "name": "Napoli",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/492.png"
              },
              "points": 24,
              "goalsDiff": 9,
              "group": "Serie A",
              "form": "LWLWD",
              "status": "same",
              "description": "Promotion - Europa League (Group Stage: )",
              "all": {
                "played": 14,
                "win": 7,
                "draw": 3,
                "lose": 4,
                "goals": {
                  "for": 26,
                  "against": 17
                }
              },
              "home": {
                "played": 7,
                "win": 2,
                "draw": 1,
                "lose": 4,
                "goals": {
                  "for": 10,
                  "against": 12
                }
              },
              "away": {
                "played": 7,
                "win": 5,
                "draw": 2,
                "lose": 0,
                "goals": {
                  "for": 16,
                  "against": 5
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 6,
              "team": {
                "id": 502,
                "name": "Fiorentina",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/502.png"
              },
              "points": 23,
              "goalsDiff": 6,
              "group": "Serie A",
              "form": "WLWLL",
              "status": "same",
              "description": "Promotion - Europa Conference League (Qualification: )",
              "all": {
                "played": 14,
                "win": 7,
                "draw": 2,
                "lose": 5,
                "goals": {
                  "for": 23,
                  "against": 17
                }
              },
              "home": {
                "played": 7,
                "win": 4,
                "draw": 1,
                "lose": 2,
                "goals": {
                  "for": 13,
                  "against": 8
                }
              },
              "away": {
                "played": 7,
                "win": 3,
                "draw": 1,
                "lose": 3,
                "goals": {
                  "for": 10,
                  "against": 9
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 7,
              "team": {
                "id": 500,
                "name": "Bologna",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/500.png"
              },
              "points": 22,
              "goalsDiff": 5,
              "group": "Serie A",
              "form": "DWLWD",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 5,
                "draw": 7,
                "lose": 2,
                "goals": {
                  "for": 16,
                  "against": 11
                }
              },
              "home": {
                "played": 7,
                "win": 5,
                "draw": 1,
                "lose": 1,
                "goals": {
                  "for": 10,
                  "against": 4
                }
              },
              "away": {
                "played": 7,
                "win": 0,
                "draw": 6,
                "lose": 1,
                "goals": {
                  "for": 6,
                  "against": 7
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 8,
              "team": {
                "id": 499,
                "name": "Atalanta",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/499.png"
              },
              "points": 20,
              "goalsDiff": 5,
              "group": "Serie A",
              "form": "LLDLW",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 6,
                "draw": 2,
                "lose": 6,
                "goals": {
                  "for": 21,
                  "against": 16
                }
              },
              "home": {
                "played": 6,
                "win": 3,
                "draw": 1,
                "lose": 2,
                "goals": {
                  "for": 9,
                  "against": 4
                }
              },
              "away": {
                "played": 8,
                "win": 3,
                "draw": 1,
                "lose": 4,
                "goals": {
                  "for": 12,
                  "against": 12
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 9,
              "team": {
                "id": 487,
                "name": "Lazio",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/487.png"
              },
              "points": 20,
              "goalsDiff": 0,
              "group": "Serie A",
              "form": "WLDLW",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 6,
                "draw": 2,
                "lose": 6,
                "goals": {
                  "for": 15,
                  "against": 15
                }
              },
              "home": {
                "played": 7,
                "win": 4,
                "draw": 2,
                "lose": 1,
                "goals": {
                  "for": 8,
                  "against": 4
                }
              },
              "away": {
                "played": 7,
                "win": 2,
                "draw": 0,
                "lose": 5,
                "goals": {
                  "for": 7,
                  "against": 11
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 10,
              "team": {
                "id": 503,
                "name": "Torino",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/503.png"
              },
              "points": 19,
              "goalsDiff": -3,
              "group": "Serie A",
              "form": "WLDWW",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 5,
                "draw": 4,
                "lose": 5,
                "goals": {
                  "for": 13,
                  "against": 16
                }
              },
              "home": {
                "played": 7,
                "win": 3,
                "draw": 3,
                "lose": 1,
                "goals": {
                  "for": 7,
                  "against": 5
                }
              },
              "away": {
                "played": 7,
                "win": 2,
                "draw": 1,
                "lose": 4,
                "goals": {
                  "for": 6,
                  "against": 11
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 11,
              "team": {
                "id": 1579,
                "name": "Monza",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/1579.png"
              },
              "points": 18,
              "goalsDiff": 1,
              "group": "Serie A",
              "form": "LDDWD",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 4,
                "draw": 6,
                "lose": 4,
                "goals": {
                  "for": 15,
                  "against": 14
                }
              },
              "home": {
                "played": 7,
                "win": 2,
                "draw": 4,
                "lose": 1,
                "goals": {
                  "for": 9,
                  "against": 5
                }
              },
              "away": {
                "played": 7,
                "win": 2,
                "draw": 2,
                "lose": 3,
                "goals": {
                  "for": 6,
                  "against": 9
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 12,
              "team": {
                "id": 512,
                "name": "Frosinone",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/512.png"
              },
              "points": 18,
              "goalsDiff": -4,
              "group": "Serie A",
              "form": "LWLWL",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 5,
                "draw": 3,
                "lose": 6,
                "goals": {
                  "for": 20,
                  "against": 24
                }
              },
              "home": {
                "played": 7,
                "win": 5,
                "draw": 1,
                "lose": 1,
                "goals": {
                  "for": 14,
                  "against": 10
                }
              },
              "away": {
                "played": 7,
                "win": 0,
                "draw": 2,
                "lose": 5,
                "goals": {
                  "for": 6,
                  "against": 14
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 13,
              "team": {
                "id": 867,
                "name": "Lecce",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/867.png"
              },
              "points": 16,
              "goalsDiff": -3,
              "group": "Serie A",
              "form": "DDDLL",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 3,
                "draw": 7,
                "lose": 4,
                "goals": {
                  "for": 16,
                  "against": 19
                }
              },
              "home": {
                "played": 8,
                "win": 3,
                "draw": 3,
                "lose": 2,
                "goals": {
                  "for": 9,
                  "against": 10
                }
              },
              "away": {
                "played": 6,
                "win": 0,
                "draw": 4,
                "lose": 2,
                "goals": {
                  "for": 7,
                  "against": 9
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 14,
              "team": {
                "id": 495,
                "name": "Genoa",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/495.png"
              },
              "points": 15,
              "goalsDiff": -4,
              "group": "Serie A",
              "form": "DLWLW",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 4,
                "draw": 3,
                "lose": 7,
                "goals": {
                  "for": 15,
                  "against": 19
                }
              },
              "home": {
                "played": 7,
                "win": 3,
                "draw": 2,
                "lose": 2,
                "goals": {
                  "for": 10,
                  "against": 9
                }
              },
              "away": {
                "played": 7,
                "win": 1,
                "draw": 1,
                "lose": 5,
                "goals": {
                  "for": 5,
                  "against": 10
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 15,
              "team": {
                "id": 488,
                "name": "Sassuolo",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/488.png"
              },
              "points": 15,
              "goalsDiff": -5,
              "group": "Serie A",
              "form": "LWDLD",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 4,
                "draw": 3,
                "lose": 7,
                "goals": {
                  "for": 21,
                  "against": 26
                }
              },
              "home": {
                "played": 8,
                "win": 2,
                "draw": 2,
                "lose": 4,
                "goals": {
                  "for": 11,
                  "against": 13
                }
              },
              "away": {
                "played": 6,
                "win": 2,
                "draw": 1,
                "lose": 3,
                "goals": {
                  "for": 10,
                  "against": 13
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 16,
              "team": {
                "id": 494,
                "name": "Udinese",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/494.png"
              },
              "points": 12,
              "goalsDiff": -9,
              "group": "Serie A",
              "form": "DLDWD",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 1,
                "draw": 9,
                "lose": 4,
                "goals": {
                  "for": 12,
                  "against": 21
                }
              },
              "home": {
                "played": 7,
                "win": 0,
                "draw": 5,
                "lose": 2,
                "goals": {
                  "for": 7,
                  "against": 12
                }
              },
              "away": {
                "played": 7,
                "win": 1,
                "draw": 4,
                "lose": 2,
                "goals": {
                  "for": 5,
                  "against": 9
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 17,
              "team": {
                "id": 511,
                "name": "Empoli",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/511.png"
              },
              "points": 11,
              "goalsDiff": -17,
              "group": "Serie A",
              "form": "DLWLL",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 3,
                "draw": 2,
                "lose": 9,
                "goals": {
                  "for": 9,
                  "against": 26
                }
              },
              "home": {
                "played": 7,
                "win": 1,
                "draw": 1,
                "lose": 5,
                "goals": {
                  "for": 4,
                  "against": 11
                }
              },
              "away": {
                "played": 7,
                "win": 2,
                "draw": 1,
                "lose": 4,
                "goals": {
                  "for": 5,
                  "against": 15
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 18,
              "team": {
                "id": 504,
                "name": "Verona",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/504.png"
              },
              "points": 10,
              "goalsDiff": -9,
              "group": "Serie A",
              "form": "DDLLL",
              "status": "same",
              "description": "Relegation - Serie B",
              "all": {
                "played": 14,
                "win": 2,
                "draw": 4,
                "lose": 8,
                "goals": {
                  "for": 12,
                  "against": 21
                }
              },
              "home": {
                "played": 6,
                "win": 1,
                "draw": 2,
                "lose": 3,
                "goals": {
                  "for": 6,
                  "against": 10
                }
              },
              "away": {
                "played": 8,
                "win": 1,
                "draw": 2,
                "lose": 5,
                "goals": {
                  "for": 6,
                  "against": 11
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 19,
              "team": {
                "id": 490,
                "name": "Cagliari",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/490.png"
              },
              "points": 10,
              "goalsDiff": -13,
              "group": "Serie A",
              "form": "LDLWW",
              "status": "same",
              "description": "Relegation - Serie B",
              "all": {
                "played": 14,
                "win": 2,
                "draw": 4,
                "lose": 8,
                "goals": {
                  "for": 13,
                  "against": 26
                }
              },
              "home": {
                "played": 7,
                "win": 2,
                "draw": 2,
                "lose": 3,
                "goals": {
                  "for": 9,
                  "against": 14
                }
              },
              "away": {
                "played": 7,
                "win": 0,
                "draw": 2,
                "lose": 5,
                "goals": {
                  "for": 4,
                  "against": 12
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 20,
              "team": {
                "id": 514,
                "name": "Salernitana",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/514.png"
              },
              "points": 8,
              "goalsDiff": -18,
              "group": "Serie A",
              "form": "LWDLL",
              "status": "same",
              "description": "Relegation - Serie B",
              "all": {
                "played": 14,
                "win": 1,
                "draw": 5,
                "lose": 8,
                "goals": {
                  "for": 10,
                  "against": 28
                }
              },
              "home": {
                "played": 7,
                "win": 1,
                "draw": 3,
                "lose": 3,
                "goals": {
                  "for": 6,
                  "against": 14
                }
              },
              "away": {
                "played": 7,
                "win": 0,
                "draw": 2,
                "lose": 5,
                "goals": {
                  "for": 4,
                  "against": 14
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            }
          ]
        ]
      }
    }
  ]
}

export const germanyStanding: FootballApiStandingReturn = {
  "get": "standings",
  "parameters": {
    "season": "2023",
    "league": "78"
  },
  "errors": [],
  "results": 1,
  "paging": {
    "current": 1,
    "total": 1
  },
  "response": [
    {
      "league": {
        "id": 78,
        "name": "Bundesliga",
        "country": "Germany",
        "logo": "https:\/\/media.api-sports.io\/football\/leagues\/78.png",
        "flag": "https:\/\/media.api-sports.io\/flags\/de.svg",
        "season": 2023,
        "standings": [
          [
            {
              "rank": 1,
              "team": {
                "id": 168,
                "name": "Bayer Leverkusen",
                "logo": "https:\/\/media.api-sports.io\/football\/teams\/168.png"
              },
              "points": 35,
              "goalsDiff": 27,
              "group": "Bundesliga",
              "form": "DWWWW",
              "status": "same",
              "description": "Promotion - Champions League (Group Stage: )",
              "all": {
                "played": 13,
                "win": 11,
                "draw": 2,
                "lose": 0,
                "goals": {
                  "for": 38,
                  "against": 11
                }
              },
              "home": {
                "played": 7,
                "win": 6,
                "draw": 1,
                "lose": 0,
                "goals": {
                  "for": 22,
                  "against": 6
                }
              },
              "away": {
                "played": 6,
                "win": 5,
                "draw": 1,
                "lose": 0,
                "goals": {
                  "for": 16,
                  "against": 5
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 2,
              "team": {
                "id": 157,
                "name": "Bayern Munich",
                "logo": "https:\/\/media.api-sports.io\/football\/teams\/157.png"
              },
              "points": 32,
              "goalsDiff": 34,
              "group": "Bundesliga",
              "form": "WWWWW",
              "status": "same",
              "description": "Promotion - Champions League (Group Stage: )",
              "all": {
                "played": 12,
                "win": 10,
                "draw": 2,
                "lose": 0,
                "goals": {
                  "for": 43,
                  "against": 9
                }
              },
              "home": {
                "played": 6,
                "win": 5,
                "draw": 1,
                "lose": 0,
                "goals": {
                  "for": 27,
                  "against": 5
                }
              },
              "away": {
                "played": 6,
                "win": 5,
                "draw": 1,
                "lose": 0,
                "goals": {
                  "for": 16,
                  "against": 4
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 3,
              "team": {
                "id": 172,
                "name": "VfB Stuttgart",
                "logo": "https:\/\/media.api-sports.io\/football\/teams\/172.png"
              },
              "points": 30,
              "goalsDiff": 18,
              "group": "Bundesliga",
              "form": "WWWLL",
              "status": "same",
              "description": "Promotion - Champions League (Group Stage: )",
              "all": {
                "played": 13,
                "win": 10,
                "draw": 0,
                "lose": 3,
                "goals": {
                  "for": 33,
                  "against": 15
                }
              },
              "home": {
                "played": 7,
                "win": 6,
                "draw": 0,
                "lose": 1,
                "goals": {
                  "for": 22,
                  "against": 6
                }
              },
              "away": {
                "played": 6,
                "win": 4,
                "draw": 0,
                "lose": 2,
                "goals": {
                  "for": 11,
                  "against": 9
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 4,
              "team": {
                "id": 173,
                "name": "RB Leipzig",
                "logo": "https:\/\/media.api-sports.io\/football\/teams\/173.png"
              },
              "points": 26,
              "goalsDiff": 18,
              "group": "Bundesliga",
              "form": "WLWLW",
              "status": "same",
              "description": "Promotion - Champions League (Group Stage: )",
              "all": {
                "played": 13,
                "win": 8,
                "draw": 2,
                "lose": 3,
                "goals": {
                  "for": 31,
                  "against": 13
                }
              },
              "home": {
                "played": 7,
                "win": 5,
                "draw": 2,
                "lose": 0,
                "goals": {
                  "for": 21,
                  "against": 5
                }
              },
              "away": {
                "played": 6,
                "win": 3,
                "draw": 0,
                "lose": 3,
                "goals": {
                  "for": 10,
                  "against": 8
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 5,
              "team": {
                "id": 165,
                "name": "Borussia Dortmund",
                "logo": "https:\/\/media.api-sports.io\/football\/teams\/165.png"
              },
              "points": 25,
              "goalsDiff": 6,
              "group": "Bundesliga",
              "form": "DWLLD",
              "status": "same",
              "description": "Promotion - Europa League (Group Stage: )",
              "all": {
                "played": 13,
                "win": 7,
                "draw": 4,
                "lose": 2,
                "goals": {
                  "for": 26,
                  "against": 20
                }
              },
              "home": {
                "played": 7,
                "win": 5,
                "draw": 1,
                "lose": 1,
                "goals": {
                  "for": 13,
                  "against": 10
                }
              },
              "away": {
                "played": 6,
                "win": 2,
                "draw": 3,
                "lose": 1,
                "goals": {
                  "for": 13,
                  "against": 10
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 6,
              "team": {
                "id": 167,
                "name": "1899 Hoffenheim",
                "logo": "https:\/\/media.api-sports.io\/football\/teams\/167.png"
              },
              "points": 20,
              "goalsDiff": 2,
              "group": "Bundesliga",
              "form": "LDDLW",
              "status": "same",
              "description": "Promotion - Europa Conference League (Qualification: )",
              "all": {
                "played": 13,
                "win": 6,
                "draw": 2,
                "lose": 5,
                "goals": {
                  "for": 25,
                  "against": 23
                }
              },
              "home": {
                "played": 6,
                "win": 1,
                "draw": 1,
                "lose": 4,
                "goals": {
                  "for": 9,
                  "against": 13
                }
              },
              "away": {
                "played": 7,
                "win": 5,
                "draw": 1,
                "lose": 1,
                "goals": {
                  "for": 16,
                  "against": 10
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 7,
              "team": {
                "id": 169,
                "name": "Eintracht Frankfurt",
                "logo": "https:\/\/media.api-sports.io\/football\/teams\/169.png"
              },
              "points": 18,
              "goalsDiff": 4,
              "group": "Bundesliga",
              "form": "LLDWD",
              "status": "same",
              "description": null,
              "all": {
                "played": 13,
                "win": 4,
                "draw": 6,
                "lose": 3,
                "goals": {
                  "for": 19,
                  "against": 15
                }
              },
              "home": {
                "played": 6,
                "win": 2,
                "draw": 3,
                "lose": 1,
                "goals": {
                  "for": 8,
                  "against": 6
                }
              },
              "away": {
                "played": 7,
                "win": 2,
                "draw": 3,
                "lose": 2,
                "goals": {
                  "for": 11,
                  "against": 9
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 8,
              "team": {
                "id": 160,
                "name": "SC Freiburg",
                "logo": "https:\/\/media.api-sports.io\/football\/teams\/160.png"
              },
              "points": 18,
              "goalsDiff": -7,
              "group": "Bundesliga",
              "form": "WDLDL",
              "status": "same",
              "description": null,
              "all": {
                "played": 13,
                "win": 5,
                "draw": 3,
                "lose": 5,
                "goals": {
                  "for": 16,
                  "against": 23
                }
              },
              "home": {
                "played": 6,
                "win": 3,
                "draw": 2,
                "lose": 1,
                "goals": {
                  "for": 11,
                  "against": 9
                }
              },
              "away": {
                "played": 7,
                "win": 2,
                "draw": 1,
                "lose": 4,
                "goals": {
                  "for": 5,
                  "against": 14
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 9,
              "team": {
                "id": 170,
                "name": "FC Augsburg",
                "logo": "https:\/\/media.api-sports.io\/football\/teams\/170.png"
              },
              "points": 17,
              "goalsDiff": -2,
              "group": "Bundesliga",
              "form": "WDDDW",
              "status": "same",
              "description": null,
              "all": {
                "played": 13,
                "win": 4,
                "draw": 5,
                "lose": 4,
                "goals": {
                  "for": 23,
                  "against": 25
                }
              },
              "home": {
                "played": 7,
                "win": 3,
                "draw": 3,
                "lose": 1,
                "goals": {
                  "for": 15,
                  "against": 13
                }
              },
              "away": {
                "played": 6,
                "win": 1,
                "draw": 2,
                "lose": 3,
                "goals": {
                  "for": 8,
                  "against": 12
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 10,
              "team": {
                "id": 163,
                "name": "Borussia Monchengladbach",
                "logo": "https:\/\/media.api-sports.io\/football\/teams\/163.png"
              },
              "points": 16,
              "goalsDiff": -1,
              "group": "Bundesliga",
              "form": "WLWDW",
              "status": "same",
              "description": null,
              "all": {
                "played": 13,
                "win": 4,
                "draw": 4,
                "lose": 5,
                "goals": {
                  "for": 27,
                  "against": 28
                }
              },
              "home": {
                "played": 7,
                "win": 3,
                "draw": 1,
                "lose": 3,
                "goals": {
                  "for": 11,
                  "against": 10
                }
              },
              "away": {
                "played": 6,
                "win": 1,
                "draw": 3,
                "lose": 2,
                "goals": {
                  "for": 16,
                  "against": 18
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 11,
              "team": {
                "id": 161,
                "name": "VfL Wolfsburg",
                "logo": "https:\/\/media.api-sports.io\/football\/teams\/161.png"
              },
              "points": 16,
              "goalsDiff": -6,
              "group": "Bundesliga",
              "form": "LWLDL",
              "status": "same",
              "description": null,
              "all": {
                "played": 13,
                "win": 5,
                "draw": 1,
                "lose": 7,
                "goals": {
                  "for": 18,
                  "against": 24
                }
              },
              "home": {
                "played": 6,
                "win": 4,
                "draw": 1,
                "lose": 1,
                "goals": {
                  "for": 11,
                  "against": 6
                }
              },
              "away": {
                "played": 7,
                "win": 1,
                "draw": 0,
                "lose": 6,
                "goals": {
                  "for": 7,
                  "against": 18
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 12,
              "team": {
                "id": 176,
                "name": "VfL BOCHUM",
                "logo": "https:\/\/media.api-sports.io\/football\/teams\/176.png"
              },
              "points": 13,
              "goalsDiff": -12,
              "group": "Bundesliga",
              "form": "WDDWD",
              "status": "same",
              "description": null,
              "all": {
                "played": 13,
                "win": 2,
                "draw": 7,
                "lose": 4,
                "goals": {
                  "for": 14,
                  "against": 26
                }
              },
              "home": {
                "played": 6,
                "win": 1,
                "draw": 4,
                "lose": 1,
                "goals": {
                  "for": 9,
                  "against": 9
                }
              },
              "away": {
                "played": 7,
                "win": 1,
                "draw": 3,
                "lose": 3,
                "goals": {
                  "for": 5,
                  "against": 17
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 13,
              "team": {
                "id": 162,
                "name": "Werder Bremen",
                "logo": "https:\/\/media.api-sports.io\/football\/teams\/162.png"
              },
              "points": 11,
              "goalsDiff": -9,
              "group": "Bundesliga",
              "form": "LLDDW",
              "status": "same",
              "description": null,
              "all": {
                "played": 13,
                "win": 3,
                "draw": 2,
                "lose": 8,
                "goals": {
                  "for": 18,
                  "against": 27
                }
              },
              "home": {
                "played": 7,
                "win": 3,
                "draw": 1,
                "lose": 3,
                "goals": {
                  "for": 12,
                  "against": 13
                }
              },
              "away": {
                "played": 6,
                "win": 0,
                "draw": 1,
                "lose": 5,
                "goals": {
                  "for": 6,
                  "against": 14
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 14,
              "team": {
                "id": 180,
                "name": "FC Heidenheim",
                "logo": "https:\/\/media.api-sports.io\/football\/teams\/180.png"
              },
              "points": 11,
              "goalsDiff": -10,
              "group": "Bundesliga",
              "form": "LDLWL",
              "status": "same",
              "description": null,
              "all": {
                "played": 13,
                "win": 3,
                "draw": 2,
                "lose": 8,
                "goals": {
                  "for": 18,
                  "against": 28
                }
              },
              "home": {
                "played": 6,
                "win": 3,
                "draw": 1,
                "lose": 2,
                "goals": {
                  "for": 11,
                  "against": 10
                }
              },
              "away": {
                "played": 7,
                "win": 0,
                "draw": 1,
                "lose": 6,
                "goals": {
                  "for": 7,
                  "against": 18
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 15,
              "team": {
                "id": 192,
                "name": "FC Koln",
                "logo": "https:\/\/media.api-sports.io\/football\/teams\/192.png"
              },
              "points": 9,
              "goalsDiff": -14,
              "group": "Bundesliga",
              "form": "WLDDL",
              "status": "same",
              "description": null,
              "all": {
                "played": 13,
                "win": 2,
                "draw": 3,
                "lose": 8,
                "goals": {
                  "for": 10,
                  "against": 24
                }
              },
              "home": {
                "played": 6,
                "win": 1,
                "draw": 1,
                "lose": 4,
                "goals": {
                  "for": 6,
                  "against": 10
                }
              },
              "away": {
                "played": 7,
                "win": 1,
                "draw": 2,
                "lose": 4,
                "goals": {
                  "for": 4,
                  "against": 14
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 16,
              "team": {
                "id": 181,
                "name": "SV Darmstadt 98",
                "logo": "https:\/\/media.api-sports.io\/football\/teams\/181.png"
              },
              "points": 9,
              "goalsDiff": -19,
              "group": "Bundesliga",
              "form": "LDDLL",
              "status": "same",
              "description": "Bundesliga (Relegation)",
              "all": {
                "played": 13,
                "win": 2,
                "draw": 3,
                "lose": 8,
                "goals": {
                  "for": 15,
                  "against": 34
                }
              },
              "home": {
                "played": 7,
                "win": 1,
                "draw": 2,
                "lose": 4,
                "goals": {
                  "for": 10,
                  "against": 15
                }
              },
              "away": {
                "played": 6,
                "win": 1,
                "draw": 1,
                "lose": 4,
                "goals": {
                  "for": 5,
                  "against": 19
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 17,
              "team": {
                "id": 164,
                "name": "FSV Mainz 05",
                "logo": "https:\/\/media.api-sports.io\/football\/teams\/164.png"
              },
              "points": 8,
              "goalsDiff": -14,
              "group": "Bundesliga",
              "form": "LDDWD",
              "status": "same",
              "description": "Relegation - 2. Bundesliga",
              "all": {
                "played": 13,
                "win": 1,
                "draw": 5,
                "lose": 7,
                "goals": {
                  "for": 12,
                  "against": 26
                }
              },
              "home": {
                "played": 6,
                "win": 1,
                "draw": 1,
                "lose": 4,
                "goals": {
                  "for": 5,
                  "against": 11
                }
              },
              "away": {
                "played": 7,
                "win": 0,
                "draw": 4,
                "lose": 3,
                "goals": {
                  "for": 7,
                  "against": 15
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 18,
              "team": {
                "id": 182,
                "name": "Union Berlin",
                "logo": "https:\/\/media.api-sports.io\/football\/teams\/182.png"
              },
              "points": 7,
              "goalsDiff": -15,
              "group": "Bundesliga",
              "form": "DLLLL",
              "status": "same",
              "description": "Relegation - 2. Bundesliga",
              "all": {
                "played": 12,
                "win": 2,
                "draw": 1,
                "lose": 9,
                "goals": {
                  "for": 12,
                  "against": 27
                }
              },
              "home": {
                "played": 6,
                "win": 1,
                "draw": 1,
                "lose": 4,
                "goals": {
                  "for": 5,
                  "against": 13
                }
              },
              "away": {
                "played": 6,
                "win": 1,
                "draw": 0,
                "lose": 5,
                "goals": {
                  "for": 7,
                  "against": 14
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            }
          ]
        ]
      }
    }
  ]
}

export const spainResult:FootballApiStandingReturn = {
  "get": "standings",
  "parameters": {
    "season": "2023",
    "league": "140"
  },
  "errors": [],
  "results": 1,
  "paging": {
    "current": 1,
    "total": 1
  },
  "response": [
    {
      "league": {
        "id": 140,
        "name": "La Liga",
        "country": "Spain",
        "logo": "https:\/\/media-4.api-sports.io\/football\/leagues\/140.png",
        "flag": "https:\/\/media-4.api-sports.io\/flags\/es.svg",
        "season": 2023,
        "standings": [
          [
            {
              "rank": 1,
              "team": {
                "id": 541,
                "name": "Real Madrid",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/541.png"
              },
              "points": 38,
              "goalsDiff": 24,
              "group": "Primera Divisi\u00f3n",
              "form": "WWWDW",
              "status": "same",
              "description": "Promotion - Champions League (Group Stage: )",
              "all": {
                "played": 15,
                "win": 12,
                "draw": 2,
                "lose": 1,
                "goals": {
                  "for": 33,
                  "against": 9
                }
              },
              "home": {
                "played": 7,
                "win": 6,
                "draw": 1,
                "lose": 0,
                "goals": {
                  "for": 17,
                  "against": 3
                }
              },
              "away": {
                "played": 8,
                "win": 6,
                "draw": 1,
                "lose": 1,
                "goals": {
                  "for": 16,
                  "against": 6
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 2,
              "team": {
                "id": 547,
                "name": "Girona",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/547.png"
              },
              "points": 38,
              "goalsDiff": 16,
              "group": "Primera Divisi\u00f3n",
              "form": "WDWWW",
              "status": "same",
              "description": "Promotion - Champions League (Group Stage: )",
              "all": {
                "played": 15,
                "win": 12,
                "draw": 2,
                "lose": 1,
                "goals": {
                  "for": 34,
                  "against": 18
                }
              },
              "home": {
                "played": 8,
                "win": 6,
                "draw": 1,
                "lose": 1,
                "goals": {
                  "for": 18,
                  "against": 10
                }
              },
              "away": {
                "played": 7,
                "win": 6,
                "draw": 1,
                "lose": 0,
                "goals": {
                  "for": 16,
                  "against": 8
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 3,
              "team": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/529.png"
              },
              "points": 34,
              "goalsDiff": 14,
              "group": "Primera Divisi\u00f3n",
              "form": "WDWWL",
              "status": "same",
              "description": "Promotion - Champions League (Group Stage: )",
              "all": {
                "played": 15,
                "win": 10,
                "draw": 4,
                "lose": 1,
                "goals": {
                  "for": 28,
                  "against": 14
                }
              },
              "home": {
                "played": 8,
                "win": 7,
                "draw": 0,
                "lose": 1,
                "goals": {
                  "for": 16,
                  "against": 5
                }
              },
              "away": {
                "played": 7,
                "win": 3,
                "draw": 4,
                "lose": 0,
                "goals": {
                  "for": 12,
                  "against": 9
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 4,
              "team": {
                "id": 530,
                "name": "Atletico Madrid",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/530.png"
              },
              "points": 31,
              "goalsDiff": 17,
              "group": "Primera Divisi\u00f3n",
              "form": "LWWLW",
              "status": "same",
              "description": "Promotion - Champions League (Group Stage: )",
              "all": {
                "played": 14,
                "win": 10,
                "draw": 1,
                "lose": 3,
                "goals": {
                  "for": 30,
                  "against": 13
                }
              },
              "home": {
                "played": 7,
                "win": 7,
                "draw": 0,
                "lose": 0,
                "goals": {
                  "for": 17,
                  "against": 7
                }
              },
              "away": {
                "played": 7,
                "win": 3,
                "draw": 1,
                "lose": 3,
                "goals": {
                  "for": 13,
                  "against": 6
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 5,
              "team": {
                "id": 531,
                "name": "Athletic Club",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/531.png"
              },
              "points": 28,
              "goalsDiff": 12,
              "group": "Primera Divisi\u00f3n",
              "form": "WDWWD",
              "status": "same",
              "description": "Promotion - Europa League (Group Stage: )",
              "all": {
                "played": 15,
                "win": 8,
                "draw": 4,
                "lose": 3,
                "goals": {
                  "for": 30,
                  "against": 18
                }
              },
              "home": {
                "played": 8,
                "win": 5,
                "draw": 2,
                "lose": 1,
                "goals": {
                  "for": 22,
                  "against": 11
                }
              },
              "away": {
                "played": 7,
                "win": 3,
                "draw": 2,
                "lose": 2,
                "goals": {
                  "for": 8,
                  "against": 7
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 6,
              "team": {
                "id": 548,
                "name": "Real Sociedad",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/548.png"
              },
              "points": 26,
              "goalsDiff": 8,
              "group": "Primera Divisi\u00f3n",
              "form": "DWWLD",
              "status": "same",
              "description": "Promotion - Europa Conference League (Qualification: )",
              "all": {
                "played": 15,
                "win": 7,
                "draw": 5,
                "lose": 3,
                "goals": {
                  "for": 26,
                  "against": 18
                }
              },
              "home": {
                "played": 8,
                "win": 5,
                "draw": 2,
                "lose": 1,
                "goals": {
                  "for": 17,
                  "against": 10
                }
              },
              "away": {
                "played": 7,
                "win": 2,
                "draw": 3,
                "lose": 2,
                "goals": {
                  "for": 9,
                  "against": 8
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 7,
              "team": {
                "id": 543,
                "name": "Real Betis",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/543.png"
              },
              "points": 25,
              "goalsDiff": 2,
              "group": "Primera Divisi\u00f3n",
              "form": "DWDWW",
              "status": "same",
              "description": null,
              "all": {
                "played": 15,
                "win": 6,
                "draw": 7,
                "lose": 2,
                "goals": {
                  "for": 18,
                  "against": 16
                }
              },
              "home": {
                "played": 7,
                "win": 5,
                "draw": 2,
                "lose": 0,
                "goals": {
                  "for": 10,
                  "against": 2
                }
              },
              "away": {
                "played": 8,
                "win": 1,
                "draw": 5,
                "lose": 2,
                "goals": {
                  "for": 8,
                  "against": 14
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 8,
              "team": {
                "id": 534,
                "name": "Las Palmas",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/534.png"
              },
              "points": 21,
              "goalsDiff": 0,
              "group": "Primera Divisi\u00f3n",
              "form": "WLDWW",
              "status": "same",
              "description": null,
              "all": {
                "played": 15,
                "win": 6,
                "draw": 3,
                "lose": 6,
                "goals": {
                  "for": 13,
                  "against": 13
                }
              },
              "home": {
                "played": 7,
                "win": 4,
                "draw": 2,
                "lose": 1,
                "goals": {
                  "for": 8,
                  "against": 4
                }
              },
              "away": {
                "played": 8,
                "win": 2,
                "draw": 1,
                "lose": 5,
                "goals": {
                  "for": 5,
                  "against": 9
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 9,
              "team": {
                "id": 532,
                "name": "Valencia",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/532.png"
              },
              "points": 19,
              "goalsDiff": -3,
              "group": "Primera Divisi\u00f3n",
              "form": "LDLWD",
              "status": "same",
              "description": null,
              "all": {
                "played": 15,
                "win": 5,
                "draw": 4,
                "lose": 6,
                "goals": {
                  "for": 17,
                  "against": 20
                }
              },
              "home": {
                "played": 7,
                "win": 4,
                "draw": 1,
                "lose": 2,
                "goals": {
                  "for": 8,
                  "against": 3
                }
              },
              "away": {
                "played": 8,
                "win": 1,
                "draw": 3,
                "lose": 4,
                "goals": {
                  "for": 9,
                  "against": 17
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 10,
              "team": {
                "id": 546,
                "name": "Getafe",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/546.png"
              },
              "points": 19,
              "goalsDiff": -3,
              "group": "Primera Divisi\u00f3n",
              "form": "LWDWD",
              "status": "same",
              "description": null,
              "all": {
                "played": 15,
                "win": 4,
                "draw": 7,
                "lose": 4,
                "goals": {
                  "for": 17,
                  "against": 20
                }
              },
              "home": {
                "played": 7,
                "win": 4,
                "draw": 3,
                "lose": 0,
                "goals": {
                  "for": 8,
                  "against": 4
                }
              },
              "away": {
                "played": 8,
                "win": 0,
                "draw": 4,
                "lose": 4,
                "goals": {
                  "for": 9,
                  "against": 16
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 11,
              "team": {
                "id": 728,
                "name": "Rayo Vallecano",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/728.png"
              },
              "points": 19,
              "goalsDiff": -6,
              "group": "Primera Divisi\u00f3n",
              "form": "LDLDD",
              "status": "same",
              "description": null,
              "all": {
                "played": 15,
                "win": 4,
                "draw": 7,
                "lose": 4,
                "goals": {
                  "for": 16,
                  "against": 22
                }
              },
              "home": {
                "played": 7,
                "win": 1,
                "draw": 4,
                "lose": 2,
                "goals": {
                  "for": 9,
                  "against": 15
                }
              },
              "away": {
                "played": 8,
                "win": 3,
                "draw": 3,
                "lose": 2,
                "goals": {
                  "for": 7,
                  "against": 7
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 12,
              "team": {
                "id": 533,
                "name": "Villarreal",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/533.png"
              },
              "points": 16,
              "goalsDiff": -4,
              "group": "Primera Divisi\u00f3n",
              "form": "DWLLW",
              "status": "same",
              "description": null,
              "all": {
                "played": 15,
                "win": 4,
                "draw": 4,
                "lose": 7,
                "goals": {
                  "for": 22,
                  "against": 26
                }
              },
              "home": {
                "played": 8,
                "win": 2,
                "draw": 1,
                "lose": 5,
                "goals": {
                  "for": 14,
                  "against": 16
                }
              },
              "away": {
                "played": 7,
                "win": 2,
                "draw": 3,
                "lose": 2,
                "goals": {
                  "for": 8,
                  "against": 10
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 13,
              "team": {
                "id": 542,
                "name": "Alaves",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/542.png"
              },
              "points": 16,
              "goalsDiff": -5,
              "group": "Primera Divisi\u00f3n",
              "form": "DWLWL",
              "status": "same",
              "description": null,
              "all": {
                "played": 15,
                "win": 4,
                "draw": 4,
                "lose": 7,
                "goals": {
                  "for": 14,
                  "against": 19
                }
              },
              "home": {
                "played": 7,
                "win": 4,
                "draw": 1,
                "lose": 2,
                "goals": {
                  "for": 10,
                  "against": 9
                }
              },
              "away": {
                "played": 8,
                "win": 0,
                "draw": 3,
                "lose": 5,
                "goals": {
                  "for": 4,
                  "against": 10
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 14,
              "team": {
                "id": 727,
                "name": "Osasuna",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/727.png"
              },
              "points": 15,
              "goalsDiff": -8,
              "group": "Primera Divisi\u00f3n",
              "form": "DLDLL",
              "status": "same",
              "description": null,
              "all": {
                "played": 15,
                "win": 4,
                "draw": 3,
                "lose": 8,
                "goals": {
                  "for": 17,
                  "against": 25
                }
              },
              "home": {
                "played": 8,
                "win": 1,
                "draw": 3,
                "lose": 4,
                "goals": {
                  "for": 7,
                  "against": 12
                }
              },
              "away": {
                "played": 7,
                "win": 3,
                "draw": 0,
                "lose": 4,
                "goals": {
                  "for": 10,
                  "against": 13
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 15,
              "team": {
                "id": 536,
                "name": "Sevilla",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/536.png"
              },
              "points": 13,
              "goalsDiff": 0,
              "group": "Primera Divisi\u00f3n",
              "form": "DLDDD",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 2,
                "draw": 7,
                "lose": 5,
                "goals": {
                  "for": 20,
                  "against": 20
                }
              },
              "home": {
                "played": 8,
                "win": 2,
                "draw": 4,
                "lose": 2,
                "goals": {
                  "for": 13,
                  "against": 10
                }
              },
              "away": {
                "played": 6,
                "win": 0,
                "draw": 3,
                "lose": 3,
                "goals": {
                  "for": 7,
                  "against": 10
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 16,
              "team": {
                "id": 724,
                "name": "Cadiz",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/724.png"
              },
              "points": 12,
              "goalsDiff": -10,
              "group": "Primera Divisi\u00f3n",
              "form": "DDLLD",
              "status": "same",
              "description": null,
              "all": {
                "played": 15,
                "win": 2,
                "draw": 6,
                "lose": 7,
                "goals": {
                  "for": 12,
                  "against": 22
                }
              },
              "home": {
                "played": 7,
                "win": 2,
                "draw": 3,
                "lose": 2,
                "goals": {
                  "for": 7,
                  "against": 8
                }
              },
              "away": {
                "played": 8,
                "win": 0,
                "draw": 3,
                "lose": 5,
                "goals": {
                  "for": 5,
                  "against": 14
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 17,
              "team": {
                "id": 798,
                "name": "Mallorca",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/798.png"
              },
              "points": 11,
              "goalsDiff": -7,
              "group": "Primera Divisi\u00f3n",
              "form": "DDLLD",
              "status": "same",
              "description": null,
              "all": {
                "played": 15,
                "win": 1,
                "draw": 8,
                "lose": 6,
                "goals": {
                  "for": 13,
                  "against": 20
                }
              },
              "home": {
                "played": 7,
                "win": 0,
                "draw": 6,
                "lose": 1,
                "goals": {
                  "for": 4,
                  "against": 5
                }
              },
              "away": {
                "played": 8,
                "win": 1,
                "draw": 2,
                "lose": 5,
                "goals": {
                  "for": 9,
                  "against": 15
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 18,
              "team": {
                "id": 538,
                "name": "Celta Vigo",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/538.png"
              },
              "points": 9,
              "goalsDiff": -10,
              "group": "Primera Divisi\u00f3n",
              "form": "DDLDL",
              "status": "same",
              "description": "Relegation - LaLiga2",
              "all": {
                "played": 15,
                "win": 1,
                "draw": 6,
                "lose": 8,
                "goals": {
                  "for": 15,
                  "against": 25
                }
              },
              "home": {
                "played": 8,
                "win": 0,
                "draw": 4,
                "lose": 4,
                "goals": {
                  "for": 5,
                  "against": 12
                }
              },
              "away": {
                "played": 7,
                "win": 1,
                "draw": 2,
                "lose": 4,
                "goals": {
                  "for": 10,
                  "against": 13
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 19,
              "team": {
                "id": 715,
                "name": "Granada CF",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/715.png"
              },
              "points": 7,
              "goalsDiff": -16,
              "group": "Primera Divisi\u00f3n",
              "form": "LLDLL",
              "status": "same",
              "description": "Relegation - LaLiga2",
              "all": {
                "played": 15,
                "win": 1,
                "draw": 4,
                "lose": 10,
                "goals": {
                  "for": 19,
                  "against": 35
                }
              },
              "home": {
                "played": 7,
                "win": 1,
                "draw": 3,
                "lose": 3,
                "goals": {
                  "for": 11,
                  "against": 15
                }
              },
              "away": {
                "played": 8,
                "win": 0,
                "draw": 1,
                "lose": 7,
                "goals": {
                  "for": 8,
                  "against": 20
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            },
            {
              "rank": 20,
              "team": {
                "id": 723,
                "name": "Almeria",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/723.png"
              },
              "points": 4,
              "goalsDiff": -21,
              "group": "Primera Divisi\u00f3n",
              "form": "DLLLL",
              "status": "same",
              "description": "Relegation - LaLiga2",
              "all": {
                "played": 15,
                "win": 0,
                "draw": 4,
                "lose": 11,
                "goals": {
                  "for": 16,
                  "against": 37
                }
              },
              "home": {
                "played": 8,
                "win": 0,
                "draw": 3,
                "lose": 5,
                "goals": {
                  "for": 10,
                  "against": 18
                }
              },
              "away": {
                "played": 7,
                "win": 0,
                "draw": 1,
                "lose": 6,
                "goals": {
                  "for": 6,
                  "against": 19
                }
              },
              "update": "2023-12-05T00:00:00+00:00"
            }
          ]
        ]
      }
    }
  ]
}
export const franceResult :FootballApiStandingReturn = {
  "get": "standings",
  "parameters": {
    "season": "2023",
    "league": "61"
  },
  "errors": [],
  "results": 1,
  "paging": {
    "current": 1,
    "total": 1
  },
  "response": [
    {
      "league": {
        "id": 61,
        "name": "Ligue 1",
        "country": "France",
        "logo": "https:\/\/media-4.api-sports.io\/football\/leagues\/61.png",
        "flag": "https:\/\/media-4.api-sports.io\/flags\/fr.svg",
        "season": 2023,
        "standings": [
          [
            {
              "rank": 1,
              "team": {
                "id": 85,
                "name": "Paris Saint Germain",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/85.png"
              },
              "points": 33,
              "goalsDiff": 25,
              "group": "Ligue 1",
              "form": "WWWWW",
              "status": "same",
              "description": "Promotion - Champions League (Group Stage: )",
              "all": {
                "played": 14,
                "win": 10,
                "draw": 3,
                "lose": 1,
                "goals": {
                  "for": 36,
                  "against": 11
                }
              },
              "home": {
                "played": 7,
                "win": 5,
                "draw": 1,
                "lose": 1,
                "goals": {
                  "for": 20,
                  "against": 6
                }
              },
              "away": {
                "played": 7,
                "win": 5,
                "draw": 2,
                "lose": 0,
                "goals": {
                  "for": 16,
                  "against": 5
                }
              },
              "update": "2023-12-06T00:00:00+00:00"
            },
            {
              "rank": 2,
              "team": {
                "id": 84,
                "name": "Nice",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/84.png"
              },
              "points": 29,
              "goalsDiff": 9,
              "group": "Ligue 1",
              "form": "LWDWW",
              "status": "same",
              "description": "Promotion - Champions League (Group Stage: )",
              "all": {
                "played": 14,
                "win": 8,
                "draw": 5,
                "lose": 1,
                "goals": {
                  "for": 14,
                  "against": 5
                }
              },
              "home": {
                "played": 7,
                "win": 4,
                "draw": 3,
                "lose": 0,
                "goals": {
                  "for": 7,
                  "against": 1
                }
              },
              "away": {
                "played": 7,
                "win": 4,
                "draw": 2,
                "lose": 1,
                "goals": {
                  "for": 7,
                  "against": 4
                }
              },
              "update": "2023-12-06T00:00:00+00:00"
            },
            {
              "rank": 3,
              "team": {
                "id": 91,
                "name": "Monaco",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/91.png"
              },
              "points": 27,
              "goalsDiff": 10,
              "group": "Ligue 1",
              "form": "WLDWL",
              "status": "same",
              "description": "Promotion - Champions League (Group Stage: )",
              "all": {
                "played": 14,
                "win": 8,
                "draw": 3,
                "lose": 3,
                "goals": {
                  "for": 29,
                  "against": 19
                }
              },
              "home": {
                "played": 7,
                "win": 6,
                "draw": 0,
                "lose": 1,
                "goals": {
                  "for": 15,
                  "against": 4
                }
              },
              "away": {
                "played": 7,
                "win": 2,
                "draw": 3,
                "lose": 2,
                "goals": {
                  "for": 14,
                  "against": 15
                }
              },
              "update": "2023-12-06T00:00:00+00:00"
            },
            {
              "rank": 4,
              "team": {
                "id": 79,
                "name": "Lille",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/79.png"
              },
              "points": 26,
              "goalsDiff": 8,
              "group": "Ligue 1",
              "form": "WWDDW",
              "status": "same",
              "description": "Promotion - Champions League (Qualification: )",
              "all": {
                "played": 14,
                "win": 7,
                "draw": 5,
                "lose": 2,
                "goals": {
                  "for": 19,
                  "against": 11
                }
              },
              "home": {
                "played": 7,
                "win": 5,
                "draw": 1,
                "lose": 1,
                "goals": {
                  "for": 10,
                  "against": 3
                }
              },
              "away": {
                "played": 7,
                "win": 2,
                "draw": 4,
                "lose": 1,
                "goals": {
                  "for": 9,
                  "against": 8
                }
              },
              "update": "2023-12-06T00:00:00+00:00"
            },
            {
              "rank": 5,
              "team": {
                "id": 93,
                "name": "Reims",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/93.png"
              },
              "points": 23,
              "goalsDiff": 1,
              "group": "Ligue 1",
              "form": "WLLWW",
              "status": "same",
              "description": "Promotion - Europa League (Group Stage: )",
              "all": {
                "played": 14,
                "win": 7,
                "draw": 2,
                "lose": 5,
                "goals": {
                  "for": 20,
                  "against": 19
                }
              },
              "home": {
                "played": 7,
                "win": 4,
                "draw": 0,
                "lose": 3,
                "goals": {
                  "for": 9,
                  "against": 9
                }
              },
              "away": {
                "played": 7,
                "win": 3,
                "draw": 2,
                "lose": 2,
                "goals": {
                  "for": 11,
                  "against": 10
                }
              },
              "update": "2023-12-06T00:00:00+00:00"
            },
            {
              "rank": 6,
              "team": {
                "id": 116,
                "name": "Lens",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/116.png"
              },
              "points": 22,
              "goalsDiff": 4,
              "group": "Ligue 1",
              "form": "WWWDW",
              "status": "same",
              "description": "Promotion - Europa Conference League (Qualification: )",
              "all": {
                "played": 14,
                "win": 6,
                "draw": 4,
                "lose": 4,
                "goals": {
                  "for": 19,
                  "against": 15
                }
              },
              "home": {
                "played": 7,
                "win": 4,
                "draw": 2,
                "lose": 1,
                "goals": {
                  "for": 12,
                  "against": 6
                }
              },
              "away": {
                "played": 7,
                "win": 2,
                "draw": 2,
                "lose": 3,
                "goals": {
                  "for": 7,
                  "against": 9
                }
              },
              "update": "2023-12-06T00:00:00+00:00"
            },
            {
              "rank": 7,
              "team": {
                "id": 106,
                "name": "Stade Brestois 29",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/106.png"
              },
              "points": 21,
              "goalsDiff": 3,
              "group": "Ligue 1",
              "form": "WWLLL",
              "status": "same",
              "description": null,
              "all": {
                "played": 13,
                "win": 6,
                "draw": 3,
                "lose": 4,
                "goals": {
                  "for": 17,
                  "against": 14
                }
              },
              "home": {
                "played": 6,
                "win": 3,
                "draw": 2,
                "lose": 1,
                "goals": {
                  "for": 10,
                  "against": 6
                }
              },
              "away": {
                "played": 7,
                "win": 3,
                "draw": 1,
                "lose": 3,
                "goals": {
                  "for": 7,
                  "against": 8
                }
              },
              "update": "2023-12-06T00:00:00+00:00"
            },
            {
              "rank": 8,
              "team": {
                "id": 83,
                "name": "Nantes",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/83.png"
              },
              "points": 18,
              "goalsDiff": -5,
              "group": "Ligue 1",
              "form": "WDLLL",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 5,
                "draw": 3,
                "lose": 6,
                "goals": {
                  "for": 18,
                  "against": 23
                }
              },
              "home": {
                "played": 8,
                "win": 3,
                "draw": 3,
                "lose": 2,
                "goals": {
                  "for": 13,
                  "against": 10
                }
              },
              "away": {
                "played": 6,
                "win": 2,
                "draw": 0,
                "lose": 4,
                "goals": {
                  "for": 5,
                  "against": 13
                }
              },
              "update": "2023-12-06T00:00:00+00:00"
            },
            {
              "rank": 9,
              "team": {
                "id": 81,
                "name": "Marseille",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/81.png"
              },
              "points": 17,
              "goalsDiff": 1,
              "group": "Ligue 1",
              "form": "WDLDL",
              "status": "same",
              "description": null,
              "all": {
                "played": 13,
                "win": 4,
                "draw": 5,
                "lose": 4,
                "goals": {
                  "for": 15,
                  "against": 14
                }
              },
              "home": {
                "played": 6,
                "win": 4,
                "draw": 2,
                "lose": 0,
                "goals": {
                  "for": 9,
                  "against": 1
                }
              },
              "away": {
                "played": 7,
                "win": 0,
                "draw": 3,
                "lose": 4,
                "goals": {
                  "for": 6,
                  "against": 13
                }
              },
              "update": "2023-12-06T00:00:00+00:00"
            },
            {
              "rank": 10,
              "team": {
                "id": 111,
                "name": "LE Havre",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/111.png"
              },
              "points": 16,
              "goalsDiff": -3,
              "group": "Ligue 1",
              "form": "LDDWD",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 3,
                "draw": 7,
                "lose": 4,
                "goals": {
                  "for": 12,
                  "against": 15
                }
              },
              "home": {
                "played": 7,
                "win": 2,
                "draw": 2,
                "lose": 3,
                "goals": {
                  "for": 6,
                  "against": 7
                }
              },
              "away": {
                "played": 7,
                "win": 1,
                "draw": 5,
                "lose": 1,
                "goals": {
                  "for": 6,
                  "against": 8
                }
              },
              "update": "2023-12-06T00:00:00+00:00"
            },
            {
              "rank": 11,
              "team": {
                "id": 112,
                "name": "Metz",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/112.png"
              },
              "points": 16,
              "goalsDiff": -7,
              "group": "Ligue 1",
              "form": "LWWDD",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 4,
                "draw": 4,
                "lose": 6,
                "goals": {
                  "for": 15,
                  "against": 22
                }
              },
              "home": {
                "played": 6,
                "win": 1,
                "draw": 3,
                "lose": 2,
                "goals": {
                  "for": 7,
                  "against": 7
                }
              },
              "away": {
                "played": 8,
                "win": 3,
                "draw": 1,
                "lose": 4,
                "goals": {
                  "for": 8,
                  "against": 15
                }
              },
              "update": "2023-12-06T00:00:00+00:00"
            },
            {
              "rank": 12,
              "team": {
                "id": 94,
                "name": "Rennes",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/94.png"
              },
              "points": 15,
              "goalsDiff": 0,
              "group": "Ligue 1",
              "form": "LWLLD",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 3,
                "draw": 6,
                "lose": 5,
                "goals": {
                  "for": 19,
                  "against": 19
                }
              },
              "home": {
                "played": 8,
                "win": 3,
                "draw": 3,
                "lose": 2,
                "goals": {
                  "for": 17,
                  "against": 12
                }
              },
              "away": {
                "played": 6,
                "win": 0,
                "draw": 3,
                "lose": 3,
                "goals": {
                  "for": 2,
                  "against": 7
                }
              },
              "update": "2023-12-06T00:00:00+00:00"
            },
            {
              "rank": 13,
              "team": {
                "id": 82,
                "name": "Montpellier",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/82.png"
              },
              "points": 13,
              "goalsDiff": -3,
              "group": "Ligue 1",
              "form": "LDLDL",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 3,
                "draw": 5,
                "lose": 6,
                "goals": {
                  "for": 17,
                  "against": 20
                }
              },
              "home": {
                "played": 7,
                "win": 1,
                "draw": 4,
                "lose": 2,
                "goals": {
                  "for": 8,
                  "against": 9
                }
              },
              "away": {
                "played": 7,
                "win": 2,
                "draw": 1,
                "lose": 4,
                "goals": {
                  "for": 9,
                  "against": 11
                }
              },
              "update": "2023-12-06T00:00:00+00:00"
            },
            {
              "rank": 14,
              "team": {
                "id": 96,
                "name": "Toulouse",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/96.png"
              },
              "points": 13,
              "goalsDiff": -4,
              "group": "Ligue 1",
              "form": "DLDLL",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 2,
                "draw": 7,
                "lose": 5,
                "goals": {
                  "for": 14,
                  "against": 18
                }
              },
              "home": {
                "played": 6,
                "win": 1,
                "draw": 4,
                "lose": 1,
                "goals": {
                  "for": 9,
                  "against": 7
                }
              },
              "away": {
                "played": 8,
                "win": 1,
                "draw": 3,
                "lose": 4,
                "goals": {
                  "for": 5,
                  "against": 11
                }
              },
              "update": "2023-12-06T00:00:00+00:00"
            },
            {
              "rank": 15,
              "team": {
                "id": 95,
                "name": "Strasbourg",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/95.png"
              },
              "points": 13,
              "goalsDiff": -7,
              "group": "Ligue 1",
              "form": "LDDDL",
              "status": "same",
              "description": null,
              "all": {
                "played": 13,
                "win": 3,
                "draw": 4,
                "lose": 6,
                "goals": {
                  "for": 11,
                  "against": 18
                }
              },
              "home": {
                "played": 7,
                "win": 2,
                "draw": 3,
                "lose": 2,
                "goals": {
                  "for": 8,
                  "against": 7
                }
              },
              "away": {
                "played": 6,
                "win": 1,
                "draw": 1,
                "lose": 4,
                "goals": {
                  "for": 3,
                  "against": 11
                }
              },
              "update": "2023-12-06T00:00:00+00:00"
            },
            {
              "rank": 16,
              "team": {
                "id": 97,
                "name": "Lorient",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/97.png"
              },
              "points": 12,
              "goalsDiff": -7,
              "group": "Ligue 1",
              "form": "DLLDL",
              "status": "same",
              "description": "Ligue 1 (Promotion - Play Offs: )",
              "all": {
                "played": 14,
                "win": 2,
                "draw": 6,
                "lose": 6,
                "goals": {
                  "for": 18,
                  "against": 25
                }
              },
              "home": {
                "played": 7,
                "win": 2,
                "draw": 3,
                "lose": 2,
                "goals": {
                  "for": 11,
                  "against": 11
                }
              },
              "away": {
                "played": 7,
                "win": 0,
                "draw": 3,
                "lose": 4,
                "goals": {
                  "for": 7,
                  "against": 14
                }
              },
              "update": "2023-12-06T00:00:00+00:00"
            },
            {
              "rank": 17,
              "team": {
                "id": 99,
                "name": "Clermont Foot",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/99.png"
              },
              "points": 10,
              "goalsDiff": -12,
              "group": "Ligue 1",
              "form": "LDLWD",
              "status": "same",
              "description": "Relegation - Ligue 2",
              "all": {
                "played": 14,
                "win": 2,
                "draw": 4,
                "lose": 8,
                "goals": {
                  "for": 9,
                  "against": 21
                }
              },
              "home": {
                "played": 7,
                "win": 1,
                "draw": 1,
                "lose": 5,
                "goals": {
                  "for": 3,
                  "against": 10
                }
              },
              "away": {
                "played": 7,
                "win": 1,
                "draw": 3,
                "lose": 3,
                "goals": {
                  "for": 6,
                  "against": 11
                }
              },
              "update": "2023-12-06T00:00:00+00:00"
            },
            {
              "rank": 18,
              "team": {
                "id": 80,
                "name": "Lyon",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/80.png"
              },
              "points": 7,
              "goalsDiff": -13,
              "group": "Ligue 1",
              "form": "LLWDL",
              "status": "same",
              "description": "Relegation - Ligue 2",
              "all": {
                "played": 13,
                "win": 1,
                "draw": 4,
                "lose": 8,
                "goals": {
                  "for": 11,
                  "against": 24
                }
              },
              "home": {
                "played": 7,
                "win": 0,
                "draw": 3,
                "lose": 4,
                "goals": {
                  "for": 7,
                  "against": 16
                }
              },
              "away": {
                "played": 6,
                "win": 1,
                "draw": 1,
                "lose": 4,
                "goals": {
                  "for": 4,
                  "against": 8
                }
              },
              "update": "2023-12-06T00:00:00+00:00"
            }
          ]
        ]
      }
    }
  ]
}
export const englandResult = {
  "get": "standings",
  "parameters": {
    "season": "2023",
    "league": "39"
  },
  "errors": [],
  "results": 1,
  "paging": {
    "current": 1,
    "total": 1
  },
  "response": [
    {
      "league": {
        "id": 39,
        "name": "Premier League",
        "country": "England",
        "logo": "https:\/\/media-4.api-sports.io\/football\/leagues\/39.png",
        "flag": "https:\/\/media-4.api-sports.io\/flags\/gb.svg",
        "season": 2023,
        "standings": [
          [
            {
              "rank": 1,
              "team": {
                "id": 42,
                "name": "Arsenal",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/42.png"
              },
              "points": 33,
              "goalsDiff": 18,
              "group": "Premier League",
              "form": "WWWLW",
              "status": "same",
              "description": "Promotion - Champions League (Group Stage: )",
              "all": {
                "played": 14,
                "win": 10,
                "draw": 3,
                "lose": 1,
                "goals": {
                  "for": 29,
                  "against": 11
                }
              },
              "home": {
                "played": 8,
                "win": 6,
                "draw": 2,
                "lose": 0,
                "goals": {
                  "for": 20,
                  "against": 8
                }
              },
              "away": {
                "played": 6,
                "win": 4,
                "draw": 1,
                "lose": 1,
                "goals": {
                  "for": 9,
                  "against": 3
                }
              },
              "update": "2023-12-04T00:00:00+00:00"
            },
            {
              "rank": 2,
              "team": {
                "id": 40,
                "name": "Liverpool",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/40.png"
              },
              "points": 31,
              "goalsDiff": 18,
              "group": "Premier League",
              "form": "WDWDW",
              "status": "same",
              "description": "Promotion - Champions League (Group Stage: )",
              "all": {
                "played": 14,
                "win": 9,
                "draw": 4,
                "lose": 1,
                "goals": {
                  "for": 32,
                  "against": 14
                }
              },
              "home": {
                "played": 7,
                "win": 7,
                "draw": 0,
                "lose": 0,
                "goals": {
                  "for": 21,
                  "against": 5
                }
              },
              "away": {
                "played": 7,
                "win": 2,
                "draw": 4,
                "lose": 1,
                "goals": {
                  "for": 11,
                  "against": 9
                }
              },
              "update": "2023-12-04T00:00:00+00:00"
            },
            {
              "rank": 3,
              "team": {
                "id": 50,
                "name": "Manchester City",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/50.png"
              },
              "points": 30,
              "goalsDiff": 20,
              "group": "Premier League",
              "form": "DDDWW",
              "status": "same",
              "description": "Promotion - Champions League (Group Stage: )",
              "all": {
                "played": 14,
                "win": 9,
                "draw": 3,
                "lose": 2,
                "goals": {
                  "for": 36,
                  "against": 16
                }
              },
              "home": {
                "played": 7,
                "win": 5,
                "draw": 2,
                "lose": 0,
                "goals": {
                  "for": 20,
                  "against": 7
                }
              },
              "away": {
                "played": 7,
                "win": 4,
                "draw": 1,
                "lose": 2,
                "goals": {
                  "for": 16,
                  "against": 9
                }
              },
              "update": "2023-12-04T00:00:00+00:00"
            },
            {
              "rank": 4,
              "team": {
                "id": 66,
                "name": "Aston Villa",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/66.png"
              },
              "points": 29,
              "goalsDiff": 13,
              "group": "Premier League",
              "form": "DWWLW",
              "status": "same",
              "description": "Promotion - Champions League (Group Stage: )",
              "all": {
                "played": 14,
                "win": 9,
                "draw": 2,
                "lose": 3,
                "goals": {
                  "for": 33,
                  "against": 20
                }
              },
              "home": {
                "played": 6,
                "win": 6,
                "draw": 0,
                "lose": 0,
                "goals": {
                  "for": 23,
                  "against": 5
                }
              },
              "away": {
                "played": 8,
                "win": 3,
                "draw": 2,
                "lose": 3,
                "goals": {
                  "for": 10,
                  "against": 15
                }
              },
              "update": "2023-12-04T00:00:00+00:00"
            },
            {
              "rank": 5,
              "team": {
                "id": 47,
                "name": "Tottenham",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/47.png"
              },
              "points": 27,
              "goalsDiff": 8,
              "group": "Premier League",
              "form": "DLLLW",
              "status": "same",
              "description": "Promotion - Europa League (Group Stage: )",
              "all": {
                "played": 14,
                "win": 8,
                "draw": 3,
                "lose": 3,
                "goals": {
                  "for": 28,
                  "against": 20
                }
              },
              "home": {
                "played": 6,
                "win": 4,
                "draw": 0,
                "lose": 2,
                "goals": {
                  "for": 10,
                  "against": 8
                }
              },
              "away": {
                "played": 8,
                "win": 4,
                "draw": 3,
                "lose": 1,
                "goals": {
                  "for": 18,
                  "against": 12
                }
              },
              "update": "2023-12-04T00:00:00+00:00"
            },
            {
              "rank": 6,
              "team": {
                "id": 34,
                "name": "Newcastle",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/34.png"
              },
              "points": 26,
              "goalsDiff": 18,
              "group": "Premier League",
              "form": "WWLWD",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 8,
                "draw": 2,
                "lose": 4,
                "goals": {
                  "for": 32,
                  "against": 14
                }
              },
              "home": {
                "played": 8,
                "win": 7,
                "draw": 0,
                "lose": 1,
                "goals": {
                  "for": 19,
                  "against": 4
                }
              },
              "away": {
                "played": 6,
                "win": 1,
                "draw": 2,
                "lose": 3,
                "goals": {
                  "for": 13,
                  "against": 10
                }
              },
              "update": "2023-12-04T00:00:00+00:00"
            },
            {
              "rank": 7,
              "team": {
                "id": 33,
                "name": "Manchester United",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/33.png"
              },
              "points": 24,
              "goalsDiff": -1,
              "group": "Premier League",
              "form": "LWWWL",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 8,
                "draw": 0,
                "lose": 6,
                "goals": {
                  "for": 16,
                  "against": 17
                }
              },
              "home": {
                "played": 7,
                "win": 4,
                "draw": 0,
                "lose": 3,
                "goals": {
                  "for": 8,
                  "against": 10
                }
              },
              "away": {
                "played": 7,
                "win": 4,
                "draw": 0,
                "lose": 3,
                "goals": {
                  "for": 8,
                  "against": 7
                }
              },
              "update": "2023-12-04T00:00:00+00:00"
            },
            {
              "rank": 8,
              "team": {
                "id": 51,
                "name": "Brighton",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/51.png"
              },
              "points": 22,
              "goalsDiff": 4,
              "group": "Premier League",
              "form": "LWDDD",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 6,
                "draw": 4,
                "lose": 4,
                "goals": {
                  "for": 30,
                  "against": 26
                }
              },
              "home": {
                "played": 7,
                "win": 3,
                "draw": 3,
                "lose": 1,
                "goals": {
                  "for": 15,
                  "against": 10
                }
              },
              "away": {
                "played": 7,
                "win": 3,
                "draw": 1,
                "lose": 3,
                "goals": {
                  "for": 15,
                  "against": 16
                }
              },
              "update": "2023-12-04T00:00:00+00:00"
            },
            {
              "rank": 9,
              "team": {
                "id": 48,
                "name": "West Ham",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/48.png"
              },
              "points": 21,
              "goalsDiff": 0,
              "group": "Premier League",
              "form": "DWWLL",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 6,
                "draw": 3,
                "lose": 5,
                "goals": {
                  "for": 24,
                  "against": 24
                }
              },
              "home": {
                "played": 7,
                "win": 3,
                "draw": 2,
                "lose": 2,
                "goals": {
                  "for": 12,
                  "against": 10
                }
              },
              "away": {
                "played": 7,
                "win": 3,
                "draw": 1,
                "lose": 3,
                "goals": {
                  "for": 12,
                  "against": 14
                }
              },
              "update": "2023-12-04T00:00:00+00:00"
            },
            {
              "rank": 10,
              "team": {
                "id": 49,
                "name": "Chelsea",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/49.png"
              },
              "points": 19,
              "goalsDiff": 3,
              "group": "Premier League",
              "form": "WLDWL",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 5,
                "draw": 4,
                "lose": 5,
                "goals": {
                  "for": 25,
                  "against": 22
                }
              },
              "home": {
                "played": 8,
                "win": 2,
                "draw": 3,
                "lose": 3,
                "goals": {
                  "for": 13,
                  "against": 13
                }
              },
              "away": {
                "played": 6,
                "win": 3,
                "draw": 1,
                "lose": 2,
                "goals": {
                  "for": 12,
                  "against": 9
                }
              },
              "update": "2023-12-04T00:00:00+00:00"
            },
            {
              "rank": 11,
              "team": {
                "id": 55,
                "name": "Brentford",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/55.png"
              },
              "points": 19,
              "goalsDiff": 3,
              "group": "Premier League",
              "form": "WLLWW",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 5,
                "draw": 4,
                "lose": 5,
                "goals": {
                  "for": 22,
                  "against": 19
                }
              },
              "home": {
                "played": 8,
                "win": 3,
                "draw": 3,
                "lose": 2,
                "goals": {
                  "for": 15,
                  "against": 12
                }
              },
              "away": {
                "played": 6,
                "win": 2,
                "draw": 1,
                "lose": 3,
                "goals": {
                  "for": 7,
                  "against": 7
                }
              },
              "update": "2023-12-04T00:00:00+00:00"
            },
            {
              "rank": 12,
              "team": {
                "id": 52,
                "name": "Crystal Palace",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/52.png"
              },
              "points": 16,
              "goalsDiff": -5,
              "group": "Premier League",
              "form": "DLLWL",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 4,
                "draw": 4,
                "lose": 6,
                "goals": {
                  "for": 14,
                  "against": 19
                }
              },
              "home": {
                "played": 6,
                "win": 1,
                "draw": 2,
                "lose": 3,
                "goals": {
                  "for": 6,
                  "against": 8
                }
              },
              "away": {
                "played": 8,
                "win": 3,
                "draw": 2,
                "lose": 3,
                "goals": {
                  "for": 8,
                  "against": 11
                }
              },
              "update": "2023-12-04T00:00:00+00:00"
            },
            {
              "rank": 13,
              "team": {
                "id": 39,
                "name": "Wolves",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/39.png"
              },
              "points": 15,
              "goalsDiff": -6,
              "group": "Premier League",
              "form": "LLWLD",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 4,
                "draw": 3,
                "lose": 7,
                "goals": {
                  "for": 19,
                  "against": 25
                }
              },
              "home": {
                "played": 6,
                "win": 2,
                "draw": 2,
                "lose": 2,
                "goals": {
                  "for": 9,
                  "against": 12
                }
              },
              "away": {
                "played": 8,
                "win": 2,
                "draw": 1,
                "lose": 5,
                "goals": {
                  "for": 10,
                  "against": 13
                }
              },
              "update": "2023-12-04T00:00:00+00:00"
            },
            {
              "rank": 14,
              "team": {
                "id": 36,
                "name": "Fulham",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/36.png"
              },
              "points": 15,
              "goalsDiff": -10,
              "group": "Premier League",
              "form": "LWLLD",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 4,
                "draw": 3,
                "lose": 7,
                "goals": {
                  "for": 16,
                  "against": 26
                }
              },
              "home": {
                "played": 6,
                "win": 3,
                "draw": 0,
                "lose": 3,
                "goals": {
                  "for": 7,
                  "against": 9
                }
              },
              "away": {
                "played": 8,
                "win": 1,
                "draw": 3,
                "lose": 4,
                "goals": {
                  "for": 9,
                  "against": 17
                }
              },
              "update": "2023-12-04T00:00:00+00:00"
            },
            {
              "rank": 15,
              "team": {
                "id": 65,
                "name": "Nottingham Forest",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/65.png"
              },
              "points": 13,
              "goalsDiff": -6,
              "group": "Premier League",
              "form": "LLLWL",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 3,
                "draw": 4,
                "lose": 7,
                "goals": {
                  "for": 16,
                  "against": 22
                }
              },
              "home": {
                "played": 7,
                "win": 2,
                "draw": 3,
                "lose": 2,
                "goals": {
                  "for": 10,
                  "against": 9
                }
              },
              "away": {
                "played": 7,
                "win": 1,
                "draw": 1,
                "lose": 5,
                "goals": {
                  "for": 6,
                  "against": 13
                }
              },
              "update": "2023-12-04T00:00:00+00:00"
            },
            {
              "rank": 16,
              "team": {
                "id": 35,
                "name": "Bournemouth",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/35.png"
              },
              "points": 13,
              "goalsDiff": -14,
              "group": "Premier League",
              "form": "DWWLW",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 3,
                "draw": 4,
                "lose": 7,
                "goals": {
                  "for": 16,
                  "against": 30
                }
              },
              "home": {
                "played": 8,
                "win": 2,
                "draw": 3,
                "lose": 3,
                "goals": {
                  "for": 8,
                  "against": 12
                }
              },
              "away": {
                "played": 6,
                "win": 1,
                "draw": 1,
                "lose": 4,
                "goals": {
                  "for": 8,
                  "against": 18
                }
              },
              "update": "2023-12-04T00:00:00+00:00"
            },
            {
              "rank": 17,
              "team": {
                "id": 1359,
                "name": "Luton",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/1359.png"
              },
              "points": 9,
              "goalsDiff": -13,
              "group": "Premier League",
              "form": "LWLDL",
              "status": "same",
              "description": null,
              "all": {
                "played": 14,
                "win": 2,
                "draw": 3,
                "lose": 9,
                "goals": {
                  "for": 13,
                  "against": 26
                }
              },
              "home": {
                "played": 6,
                "win": 1,
                "draw": 2,
                "lose": 3,
                "goals": {
                  "for": 6,
                  "against": 8
                }
              },
              "away": {
                "played": 8,
                "win": 1,
                "draw": 1,
                "lose": 6,
                "goals": {
                  "for": 7,
                  "against": 18
                }
              },
              "update": "2023-12-04T00:00:00+00:00"
            },
            {
              "rank": 18,
              "team": {
                "id": 45,
                "name": "Everton",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/45.png"
              },
              "points": 7,
              "goalsDiff": -5,
              "group": "Premier League",
              "form": "WLWDW",
              "status": "same",
              "description": "Relegation - Championship",
              "all": {
                "played": 14,
                "win": 5,
                "draw": 2,
                "lose": 7,
                "goals": {
                  "for": 15,
                  "against": 20
                }
              },
              "home": {
                "played": 7,
                "win": 1,
                "draw": 1,
                "lose": 5,
                "goals": {
                  "for": 5,
                  "against": 9
                }
              },
              "away": {
                "played": 7,
                "win": 4,
                "draw": 1,
                "lose": 2,
                "goals": {
                  "for": 10,
                  "against": 11
                }
              },
              "update": "2023-12-04T00:00:00+00:00"
            },
            {
              "rank": 19,
              "team": {
                "id": 44,
                "name": "Burnley",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/44.png"
              },
              "points": 7,
              "goalsDiff": -17,
              "group": "Premier League",
              "form": "WLLLL",
              "status": "same",
              "description": "Relegation - Championship",
              "all": {
                "played": 14,
                "win": 2,
                "draw": 1,
                "lose": 11,
                "goals": {
                  "for": 15,
                  "against": 32
                }
              },
              "home": {
                "played": 8,
                "win": 1,
                "draw": 0,
                "lose": 7,
                "goals": {
                  "for": 10,
                  "against": 20
                }
              },
              "away": {
                "played": 6,
                "win": 1,
                "draw": 1,
                "lose": 4,
                "goals": {
                  "for": 5,
                  "against": 12
                }
              },
              "update": "2023-12-04T00:00:00+00:00"
            },
            {
              "rank": 20,
              "team": {
                "id": 62,
                "name": "Sheffield Utd",
                "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/62.png"
              },
              "points": 5,
              "goalsDiff": -28,
              "group": "Premier League",
              "form": "LLDWL",
              "status": "same",
              "description": "Relegation - Championship",
              "all": {
                "played": 14,
                "win": 1,
                "draw": 2,
                "lose": 11,
                "goals": {
                  "for": 11,
                  "against": 39
                }
              },
              "home": {
                "played": 7,
                "win": 1,
                "draw": 1,
                "lose": 5,
                "goals": {
                  "for": 7,
                  "against": 19
                }
              },
              "away": {
                "played": 7,
                "win": 0,
                "draw": 1,
                "lose": 6,
                "goals": {
                  "for": 4,
                  "against": 20
                }
              },
              "update": "2023-12-04T00:00:00+00:00"
            }
          ],
          [{
            "rank": 35,
            "team": {
              "id": 42,
              "name": "Arsenal pipi",
              "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/42.png"
            },
            "points": 33,
            "goalsDiff": 18,
            "group": "Premier League",
            "form": "WWWLW",
            "status": "same",
            "description": "Promotion - Champions League (Group Stage: )",
            "all": {
              "played": 14,
              "win": 10,
              "draw": 3,
              "lose": 1,
              "goals": {
                "for": 29,
                "against": 11
              }
            },
            "home": {
              "played": 8,
              "win": 6,
              "draw": 2,
              "lose": 0,
              "goals": {
                "for": 20,
                "against": 8
              }
            },
            "away": {
              "played": 6,
              "win": 4,
              "draw": 1,
              "lose": 1,
              "goals": {
                "for": 9,
                "against": 3
              }
            },
            "update": "2023-12-04T00:00:00+00:00"
          }]
        ]
      }
    }
  ]
}

export const fixtureResponse: FootballApiFixtureReturn = {
  "get": "fixtures",
  "parameters": {
    "last": "10",
    "team": "42"
  },
  "errors": [],
  "results": 10,
  "paging": {
    "current": 1,
    "total": 1
  },
  "response": [
    {
      "fixture": {
        "id": 1035318,
        "referee": "Samuel Barrott, England",
        "timezone": "UTC",
        "date": "2023-12-05T20:15:00+00:00",
        "timestamp": 1701807300,
        "periods": {
          "first": 1701807300,
          "second": 1701810900
        },
        "venue": {
          "id": 551,
          "name": "Kenilworth Road",
          "city": "Luton, Bedfordshire"
        },
        "status": {
          "long": "Match Finished",
          "short": "FT",
          "elapsed": 90
        }
      },
      "league": {
        "id": 39,
        "name": "Premier League",
        "country": "England",
        "logo": "https:\/\/media-4.api-sports.io\/football\/leagues\/39.png",
        "flag": "https:\/\/media-4.api-sports.io\/flags\/gb.svg",
        "season": 2023,
        "round": "Regular Season - 15"
      },
      "teams": {
        "home": {
          "id": 1359,
          "name": "Luton",
          "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/1359.png",
          "winner": false
        },
        "away": {
          "id": 42,
          "name": "Arsenal",
          "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/42.png",
          "winner": true
        }
      },
      "goals": {
        "home": 3,
        "away": 4
      },
      "score": {
        "halftime": {
          "home": 1,
          "away": 2
        },
        "fulltime": {
          "home": 3,
          "away": 4
        },
        "extratime": {
          "home": null,
          "away": null
        },
        "penalty": {
          "home": null,
          "away": null
        }
      }
    },
    {
      "fixture": {
        "id": 1035305,
        "referee": "Peter Bankes, England",
        "timezone": "UTC",
        "date": "2023-12-02T15:00:00+00:00",
        "timestamp": 1701529200,
        "periods": {
          "first": 1701529200,
          "second": 1701532800
        },
        "venue": {
          "id": 494,
          "name": "Emirates Stadium",
          "city": "London"
        },
        "status": {
          "long": "Match Finished",
          "short": "FT",
          "elapsed": 90
        }
      },
      "league": {
        "id": 39,
        "name": "Premier League",
        "country": "England",
        "logo": "https:\/\/media-4.api-sports.io\/football\/leagues\/39.png",
        "flag": "https:\/\/media-4.api-sports.io\/flags\/gb.svg",
        "season": 2023,
        "round": "Regular Season - 14"
      },
      "teams": {
        "home": {
          "id": 42,
          "name": "Arsenal",
          "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/42.png",
          "winner": true
        },
        "away": {
          "id": 39,
          "name": "Wolves",
          "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/39.png",
          "winner": false
        }
      },
      "goals": {
        "home": 2,
        "away": 1
      },
      "score": {
        "halftime": {
          "home": 2,
          "away": 0
        },
        "fulltime": {
          "home": 2,
          "away": 1
        },
        "extratime": {
          "home": null,
          "away": null
        },
        "penalty": {
          "home": null,
          "away": null
        }
      }
    },
    {
      "fixture": {
        "id": 1126219,
        "referee": "Artur Soares Dias",
        "timezone": "UTC",
        "date": "2023-11-29T20:00:00+00:00",
        "timestamp": 1701288000,
        "periods": {
          "first": 1701288000,
          "second": 1701291600
        },
        "venue": {
          "id": 494,
          "name": "Emirates Stadium",
          "city": "London"
        },
        "status": {
          "long": "Match Finished",
          "short": "FT",
          "elapsed": 90
        }
      },
      "league": {
        "id": 2,
        "name": "UEFA Champions League",
        "country": "World",
        "logo": "https:\/\/media-4.api-sports.io\/football\/leagues\/2.png",
        "flag": null,
        "season": 2023,
        "round": "Group B - 5"
      },
      "teams": {
        "home": {
          "id": 42,
          "name": "Arsenal",
          "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/42.png",
          "winner": true
        },
        "away": {
          "id": 116,
          "name": "Lens",
          "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/116.png",
          "winner": false
        }
      },
      "goals": {
        "home": 6,
        "away": 0
      },
      "score": {
        "halftime": {
          "home": 5,
          "away": 0
        },
        "fulltime": {
          "home": 6,
          "away": 0
        },
        "extratime": {
          "home": null,
          "away": null
        },
        "penalty": {
          "home": null,
          "away": null
        }
      }
    },
    {
      "fixture": {
        "id": 1035294,
        "referee": "Tim Robinson, England",
        "timezone": "UTC",
        "date": "2023-11-25T17:30:00+00:00",
        "timestamp": 1700933400,
        "periods": {
          "first": 1700933400,
          "second": 1700937000
        },
        "venue": {
          "id": 10503,
          "name": "Gtech Community Stadium",
          "city": "Brentford, Middlesex"
        },
        "status": {
          "long": "Match Finished",
          "short": "FT",
          "elapsed": 90
        }
      },
      "league": {
        "id": 39,
        "name": "Premier League",
        "country": "England",
        "logo": "https:\/\/media-4.api-sports.io\/football\/leagues\/39.png",
        "flag": "https:\/\/media-4.api-sports.io\/flags\/gb.svg",
        "season": 2023,
        "round": "Regular Season - 13"
      },
      "teams": {
        "home": {
          "id": 55,
          "name": "Brentford",
          "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/55.png",
          "winner": false
        },
        "away": {
          "id": 42,
          "name": "Arsenal",
          "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/42.png",
          "winner": true
        }
      },
      "goals": {
        "home": 0,
        "away": 1
      },
      "score": {
        "halftime": {
          "home": 0,
          "away": 0
        },
        "fulltime": {
          "home": 0,
          "away": 1
        },
        "extratime": {
          "home": null,
          "away": null
        },
        "penalty": {
          "home": null,
          "away": null
        }
      }
    },
    {
      "fixture": {
        "id": 1035148,
        "referee": "Michael Oliver, England",
        "timezone": "UTC",
        "date": "2023-11-11T15:00:00+00:00",
        "timestamp": 1699714800,
        "periods": {
          "first": 1699714800,
          "second": 1699718400
        },
        "venue": {
          "id": 494,
          "name": "Emirates Stadium",
          "city": "London"
        },
        "status": {
          "long": "Match Finished",
          "short": "FT",
          "elapsed": 90
        }
      },
      "league": {
        "id": 39,
        "name": "Premier League",
        "country": "England",
        "logo": "https:\/\/media-4.api-sports.io\/football\/leagues\/39.png",
        "flag": "https:\/\/media-4.api-sports.io\/flags\/gb.svg",
        "season": 2023,
        "round": "Regular Season - 12"
      },
      "teams": {
        "home": {
          "id": 42,
          "name": "Arsenal",
          "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/42.png",
          "winner": true
        },
        "away": {
          "id": 44,
          "name": "Burnley",
          "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/44.png",
          "winner": false
        }
      },
      "goals": {
        "home": 3,
        "away": 1
      },
      "score": {
        "halftime": {
          "home": 1,
          "away": 0
        },
        "fulltime": {
          "home": 3,
          "away": 1
        },
        "extratime": {
          "home": null,
          "away": null
        },
        "penalty": {
          "home": null,
          "away": null
        }
      }
    },
    {
      "fixture": {
        "id": 1126204,
        "referee": "I. Kovacs",
        "timezone": "UTC",
        "date": "2023-11-08T20:00:00+00:00",
        "timestamp": 1699473600,
        "periods": {
          "first": 1699473600,
          "second": 1699477200
        },
        "venue": {
          "id": 494,
          "name": "Emirates Stadium",
          "city": "London"
        },
        "status": {
          "long": "Match Finished",
          "short": "FT",
          "elapsed": 90
        }
      },
      "league": {
        "id": 2,
        "name": "UEFA Champions League",
        "country": "World",
        "logo": "https:\/\/media-4.api-sports.io\/football\/leagues\/2.png",
        "flag": null,
        "season": 2023,
        "round": "Group B - 4"
      },
      "teams": {
        "home": {
          "id": 42,
          "name": "Arsenal",
          "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/42.png",
          "winner": true
        },
        "away": {
          "id": 536,
          "name": "Sevilla",
          "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/536.png",
          "winner": false
        }
      },
      "goals": {
        "home": 2,
        "away": 0
      },
      "score": {
        "halftime": {
          "home": 1,
          "away": 0
        },
        "fulltime": {
          "home": 2,
          "away": 0
        },
        "extratime": {
          "home": null,
          "away": null
        },
        "penalty": {
          "home": null,
          "away": null
        }
      }
    },
    {
      "fixture": {
        "id": 1035143,
        "referee": "Stuart Attwell, England",
        "timezone": "UTC",
        "date": "2023-11-04T17:30:00+00:00",
        "timestamp": 1699119000,
        "periods": {
          "first": 1699119000,
          "second": 1699122600
        },
        "venue": {
          "id": 562,
          "name": "St. James' Park",
          "city": "Newcastle upon Tyne"
        },
        "status": {
          "long": "Match Finished",
          "short": "FT",
          "elapsed": 90
        }
      },
      "league": {
        "id": 39,
        "name": "Premier League",
        "country": "England",
        "logo": "https:\/\/media-4.api-sports.io\/football\/leagues\/39.png",
        "flag": "https:\/\/media-4.api-sports.io\/flags\/gb.svg",
        "season": 2023,
        "round": "Regular Season - 11"
      },
      "teams": {
        "home": {
          "id": 34,
          "name": "Newcastle",
          "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/34.png",
          "winner": true
        },
        "away": {
          "id": 42,
          "name": "Arsenal",
          "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/42.png",
          "winner": false
        }
      },
      "goals": {
        "home": 1,
        "away": 0
      },
      "score": {
        "halftime": {
          "home": 0,
          "away": 0
        },
        "fulltime": {
          "home": 1,
          "away": 0
        },
        "extratime": {
          "home": null,
          "away": null
        },
        "penalty": {
          "home": null,
          "away": null
        }
      }
    },
    {
      "fixture": {
        "id": 1136342,
        "referee": "S. Hooper",
        "timezone": "UTC",
        "date": "2023-11-01T19:30:00+00:00",
        "timestamp": 1698867000,
        "periods": {
          "first": 1698867000,
          "second": 1698870600
        },
        "venue": {
          "id": 598,
          "name": "London Stadium",
          "city": "London"
        },
        "status": {
          "long": "Match Finished",
          "short": "FT",
          "elapsed": 90
        }
      },
      "league": {
        "id": 48,
        "name": "League Cup",
        "country": "England",
        "logo": "https:\/\/media-4.api-sports.io\/football\/leagues\/48.png",
        "flag": "https:\/\/media-4.api-sports.io\/flags\/gb.svg",
        "season": 2023,
        "round": "Round of 16"
      },
      "teams": {
        "home": {
          "id": 48,
          "name": "West Ham",
          "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/48.png",
          "winner": true
        },
        "away": {
          "id": 42,
          "name": "Arsenal",
          "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/42.png",
          "winner": false
        }
      },
      "goals": {
        "home": 3,
        "away": 1
      },
      "score": {
        "halftime": {
          "home": 1,
          "away": 0
        },
        "fulltime": {
          "home": 3,
          "away": 1
        },
        "extratime": {
          "home": null,
          "away": null
        },
        "penalty": {
          "home": null,
          "away": null
        }
      }
    },
    {
      "fixture": {
        "id": 1035128,
        "referee": "Tim Robinson, England",
        "timezone": "UTC",
        "date": "2023-10-28T14:00:00+00:00",
        "timestamp": 1698501600,
        "periods": {
          "first": 1698501600,
          "second": 1698505200
        },
        "venue": {
          "id": 494,
          "name": "Emirates Stadium",
          "city": "London"
        },
        "status": {
          "long": "Match Finished",
          "short": "FT",
          "elapsed": 90
        }
      },
      "league": {
        "id": 39,
        "name": "Premier League",
        "country": "England",
        "logo": "https:\/\/media-4.api-sports.io\/football\/leagues\/39.png",
        "flag": "https:\/\/media-4.api-sports.io\/flags\/gb.svg",
        "season": 2023,
        "round": "Regular Season - 10"
      },
      "teams": {
        "home": {
          "id": 42,
          "name": "Arsenal",
          "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/42.png",
          "winner": true
        },
        "away": {
          "id": 62,
          "name": "Sheffield Utd",
          "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/62.png",
          "winner": false
        }
      },
      "goals": {
        "home": 5,
        "away": 0
      },
      "score": {
        "halftime": {
          "home": 1,
          "away": 0
        },
        "fulltime": {
          "home": 5,
          "away": 0
        },
        "extratime": {
          "home": null,
          "away": null
        },
        "penalty": {
          "home": null,
          "away": null
        }
      }
    },
    {
      "fixture": {
        "id": 1126180,
        "referee": "G. Nyberg",
        "timezone": "UTC",
        "date": "2023-10-24T19:00:00+00:00",
        "timestamp": 1698174000,
        "periods": {
          "first": 1698174000,
          "second": 1698177600
        },
        "venue": {
          "id": 1494,
          "name": "Estadio Ram\u00f3n S\u00e1nchez Pizju\u00e1n",
          "city": "Sevilla"
        },
        "status": {
          "long": "Match Finished",
          "short": "FT",
          "elapsed": 90
        }
      },
      "league": {
        "id": 2,
        "name": "UEFA Champions League",
        "country": "World",
        "logo": "https:\/\/media-4.api-sports.io\/football\/leagues\/2.png",
        "flag": null,
        "season": 2023,
        "round": "Group B - 3"
      },
      "teams": {
        "home": {
          "id": 536,
          "name": "Sevilla",
          "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/536.png",
          "winner": false
        },
        "away": {
          "id": 42,
          "name": "Arsenal",
          "logo": "https:\/\/media-4.api-sports.io\/football\/teams\/42.png",
          "winner": true
        }
      },
      "goals": {
        "home": 1,
        "away": 2
      },
      "score": {
        "halftime": {
          "home": 0,
          "away": 1
        },
        "fulltime": {
          "home": 1,
          "away": 2
        },
        "extratime": {
          "home": null,
          "away": null
        },
        "penalty": {
          "home": null,
          "away": null
        }
      }
    }
  ]
}

