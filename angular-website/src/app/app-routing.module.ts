import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FeaturesPageComponent } from './components/features-page/features-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'features', component: FeaturesPageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'detail/:id', component: RestaurantDetailComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
