import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetaModule } from '@ngx-meta/core';
import { DemoMaterialModule} from '../app/material-module';
import { HttpClientModule } from '@angular/common/http';
//import { ModalModule } from 'ngx-bootstrap/modal';
import {ModalModule} from 'ngx-bootstrap/modal';


/* Page component */
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { PlatformFeaturesComponent, DialogOverviewExampleDialog } from './platform-features/platform-features.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { ContactusComponent } from './contactus/contactus.component'; 
import { FunnelComponent} from './funnel/funnel.component'
import { RouterModule } from '@angular/router';
import { ReadmoreComponent } from './readmore/readmore.component';
import { AspirePaymentSuiteComponent } from './aspire-payment-suite/aspire-payment-suite.component';
import { SignupforblockchainComponent } from './signupforblockchain/signupforblockchain.component';
import { NexgentestingComponent } from './nexgentesting/nexgentesting.component';
import { AspireLandingComponent } from './aspire-landing/aspire-landing.component';
import { CompchainFunnelComponent } from './compchain-funnel/compchain-funnel.component';
import { AudiodeadlineambassadorfunnelComponent } from './audiodeadlineambassadorfunnel/audiodeadlineambassadorfunnel.component';
import { RecruitmentFunnelComponent } from './recruitment-funnel/recruitment-funnel.component';
import { NmsFunnelDoctorsComponent } from './nms-funnel-doctors/nms-funnel-doctors.component';
import { TrinitiLandingComponent } from './triniti-landing/triniti-landing.component';
import { VivacityRecoverLandingComponent } from './vivacity-recover-landing/vivacity-recover-landing.component';
import { VivacityBalanceLandingComponent } from './vivacity-balance-landing/vivacity-balance-landing.component';
import { CobrazolLandingComponent } from './cobrazol-landing/cobrazol-landing.component';

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
    // DialogDataExampleDialog,
    DialogOverviewExampleDialog,
    AspirePaymentSuiteComponent, 
    SignupforblockchainComponent,
    NexgentestingComponent,
    AspireLandingComponent, 
    CompchainFunnelComponent, 
    AudiodeadlineambassadorfunnelComponent,
    FunnelComponent,    
    ReadmoreComponent, 
    RecruitmentFunnelComponent, 
    NmsFunnelDoctorsComponent, 
    TrinitiLandingComponent, 
    VivacityRecoverLandingComponent, 
    VivacityBalanceLandingComponent, CobrazolLandingComponent
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
    ModalModule.forRoot(),
    //ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DialogOverviewExampleDialog, PlatformFeaturesComponent]
})
export class AppModule { }
