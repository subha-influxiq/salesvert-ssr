import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetaModule } from '@ngx-meta/core';
import { DemoMaterialModule} from '../app/material-module';
import { HttpClientModule } from '@angular/common/http';

/* Page component */
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { PlatformFeaturesComponent } from './platform-features/platform-features.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { ContactusComponent } from './contactus/contactus.component'; 
import { FunnelComponent } from './funnel/funnel.component'
import { RouterModule } from '@angular/router';
import { ReadmoreComponent } from './readmore/readmore.component';
@NgModule({
  declarations: [
    AppComponent,

    /* Page component */
    AboutusComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PlatformFeaturesComponent,
    OurteamComponent,
    ContactusComponent, 
    FunnelComponent, ReadmoreComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,MetaModule.forRoot(),
    RouterModule,
    DemoMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
