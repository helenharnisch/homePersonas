import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { CalugasComponent } from './calugas/calugas.component';
import { TabsComponent } from './tabs/tabs.component';
import { DataService } from './data.service';



@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CalugasComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
