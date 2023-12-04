import { Component } from '@angular/core';
import {CountryMenuItem} from "../../models/country-menu-item";

@Component({
  selector: 'app-country-menu',
  templateUrl: './country-menu.component.html',
  styleUrls: ['./country-menu.component.scss']
})
export class CountryMenuComponent {
  countries: CountryMenuItem[] = [
    {label: "England", id: "englandSelect", topLeagueId: 39},
    {label: "Spain", id: "spainSelect", topLeagueId: 140},
    {label: "Germany", id: "germanySelect", topLeagueId: 78},
    {label: "France", id: "franceSelect", topLeagueId: 61},
    {label: "Italy", id: "italySelect", topLeagueId: 135}
  ];

  onCountryClick(country: CountryMenuItem) {
    

  }

}
