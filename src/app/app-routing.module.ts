import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';


import { AboutusComponent } from './aboutus/aboutus.component';


/*  */
import { HomeComponent } from '../app/home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlatformFeaturesComponent } from './platform-features/platform-features.component';
import { OurteamComponent } from "./ourteam/ourteam.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { FunnelComponent } from './funnel/funnel.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { AspirePaymentSuiteComponent } from './aspire-payment-suite/aspire-payment-suite.component';
import { SignupforblockchainComponent } from './signupforblockchain/signupforblockchain.component';
import { NexgentestingComponent} from './nexgentesting/nexgentesting.component';
import { AspireLandingComponent } from './aspire-landing/aspire-landing.component';
import { CompchainFunnelComponent } from './compchain-funnel/compchain-funnel.component';
import { AudiodeadlineambassadorfunnelComponent } from './audiodeadlineambassadorfunnel/audiodeadlineambassadorfunnel.component';

import { RecruitmentFunnelComponent } from './recruitment-funnel/recruitment-funnel.component';
import { NmsFunnelDoctorsComponent } from './nms-funnel-doctors/nms-funnel-doctors.component';
import { TrinitiLandingComponent } from './triniti-landing/triniti-landing.component';
import { VivacityRecoverLandingComponent } from './vivacity-recover-landing/vivacity-recover-landing.component';
import { VivacityBalanceLandingComponent } from './vivacity-balance-landing/vivacity-balance-landing.component';
import { CobrazolLandingComponent } from './cobrazol-landing/cobrazol-landing.component';

const appRoutes: Routes = [
    { path: 'about', component: AboutusComponent,data: { meta: { title: 'About US', description: 'Have you seen my rubber duckie?' } } },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'header', component: HeaderComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'platform-features', component: PlatformFeaturesComponent},
    { path: 'ourteam', component: OurteamComponent},
    { path: 'contactus', component: ContactusComponent},
    { path: 'funnel-examples', component: FunnelComponent},  
    { path: 'readmore',  component: ReadmoreComponent},
    { path: 'aspire-payment-suite',  component: AspirePaymentSuiteComponent},
    { path: 'signupforblockchain', component: SignupforblockchainComponent},
    { path: 'nexgentesting', component: NexgentestingComponent},
    { path: 'aspire-landing', component: AspireLandingComponent},
    { path: 'compchain-funnel', component: CompchainFunnelComponent},
    { path: 'audiodeadline-ambassador-funnel', component:AudiodeadlineambassadorfunnelComponent},
    { path: 'recruitment-funnel', component:RecruitmentFunnelComponent},
    { path: 'nms-funnel-doctors', component:NmsFunnelDoctorsComponent},
    { path: 'triniti-landing', component:TrinitiLandingComponent},
    { path: 'vivacity-recover-landing', component:VivacityRecoverLandingComponent},
    { path: 'vivacity-balance-landing', component:VivacityBalanceLandingComponent},    
    { path: 'cobrazol-landing', component:CobrazolLandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
