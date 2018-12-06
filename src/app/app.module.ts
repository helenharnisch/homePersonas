import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { CalugasComponent } from './calugas/calugas.component';
import { TabsComponent } from './tabs/tabs.component';
import { DataService } from './data.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavInfoComponent } from './nav-info/nav-info.component';
import { IndEconomicosComponent } from './ind-economicos/ind-economicos.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';

import { APP_ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CalugasComponent,
    TabsComponent,
    HeaderComponent,
    FooterComponent,
    NavInfoComponent,
    IndEconomicosComponent,
    LandingComponent,
    HomeComponent,   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    APP_ROUTES,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
