import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdBannerComponent } from './ad-banner.component';
import { AdDirective } from './ad.directive';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdService } from './ad.service';

@NgModule({
  declarations: [
    AppComponent,
    AdBannerComponent,
    AdDirective,
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  providers: [AdService],
  imports: [
    BrowserModule
  ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
