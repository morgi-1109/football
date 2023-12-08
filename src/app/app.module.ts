import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CountrySelectorComponent} from './components/country-selector/country-selector.component';
import {LeadStandingTableComponent} from './components/lead-standing-table/lead-standing-table.component';
import {HttpClientModule} from "@angular/common/http";
import {TeamFixturesComponent} from './components/team-fixtures/team-fixtures.component';
import {StandingComponent} from './pages/standing/standing.component';
import {FixturesComponent} from "./pages/fixtures/fixtures.component";
import {
  TeamFixtureDescriptionComponent
} from './components/team-fixture-description/team-fixture-description.component';
import {ToastDirective} from "./directives/toast.directive";
import {LoadingComponent} from "./components/loading/loading.component";

@NgModule({
  declarations: [
    AppComponent,
    CountrySelectorComponent,
    LeadStandingTableComponent,
    FixturesComponent,
    TeamFixturesComponent,
    StandingComponent,
    TeamFixtureDescriptionComponent,
    ToastDirective,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
