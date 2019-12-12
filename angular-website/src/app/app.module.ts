import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

// Our Pages
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FeaturesPageComponent } from './components/features-page/features-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// HTTP Modules
import { HttpClientModule } from '@angular/common/http';
import { FoodModalComponent } from './components/food-modal/food-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    FeaturesPageComponent,
    AboutUsComponent,
    FoodModalComponent,
    RestaurantDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
