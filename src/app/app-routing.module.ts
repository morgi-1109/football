import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StandingComponent} from "./pages/standing/standing.component";
import {FixturesComponent} from "./pages/fixtures/fixtures.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'standing'},
  {path: 'standing', component: StandingComponent},
  {path: 'standing/:leagueId', component: StandingComponent},
  {path: 'standing/:leagueId/fixture/:teamId', component: FixturesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
