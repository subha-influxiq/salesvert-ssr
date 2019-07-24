import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetaModule } from '@ngx-meta/core';
import { DemoMaterialModule} from '../app/material-module';
import { HttpClientModule } from '@angular/common/http';
//import { ModalModule } from 'ngx-bootstrap/modal';


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
import { FunnelComponent, DialogDataExampleDialog} from './funnel/funnel.component'
import { RouterModule } from '@angular/router';
import { ReadmoreComponent } from './readmore/readmore.component';
import { AspirePaymentSuiteComponent } from './aspire-payment-suite/aspire-payment-suite.component';
import { SignupforblockchainComponent } from './signupforblockchain/signupforblockchain.component';
<<<<<<< HEAD
import { NexgentestingComponent } from './nexgentesting/nexgentesting.component';
 
=======
import { AspireLandingComponent } from './aspire-landing/aspire-landing.component';
>>>>>>> c4fa57510a8c20b5f0dee79b0ab817b7335a62c3

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
<<<<<<< HEAD
    FunnelComponent, ReadmoreComponent, DialogDataExampleDialog, AspirePaymentSuiteComponent, SignupforblockchainComponent, NexgentestingComponent
=======
    FunnelComponent, ReadmoreComponent, DialogDataExampleDialog, AspirePaymentSuiteComponent, SignupforblockchainComponent, AspireLandingComponent
>>>>>>> c4fa57510a8c20b5f0dee79b0ab817b7335a62c3
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
    HttpClientModule,
    //ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DialogDataExampleDialog]
})
export class AppModule { }
