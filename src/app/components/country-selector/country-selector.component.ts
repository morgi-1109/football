import {Component, EventEmitter, Output} from '@angular/core';
import {CountryMenuItem} from "../../models/interfaces/country-menu-item";

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss']
})
export class CountrySelectorComponent  {

  countryOptions: CountryMenuItem[] = [
    {label: "England", id: "englandSelect", topLeagueId: 39},
    {label: "Spain", id: "spainSelect", topLeagueId: 140},
    {label: "Germany", id: "germanySelect", topLeagueId: 78},
    {label: "France", id: "franceSelect", topLeagueId: 61},
    {label: "Italy", id: "italySelect", topLeagueId: 135}
  ];
}
