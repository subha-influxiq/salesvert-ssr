import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';


import { AboutusComponent } from './aboutus/aboutus.component';
// import { ContactusComponent } from './contactus/contactus.component';


/*  */
import { HomeComponent } from '../app/home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlatformFeaturesComponent } from './platform-features/platform-features.component';
import { OurteamComponent } from "./ourteam/ourteam.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { FunnelComponent } from './funnel/funnel.component';

const appRoutes: Routes = [
    { path: 'about', component: AboutusComponent,data: { meta: { title: 'About US', description: 'Have you seen my rubber duckie?' } } },
    { path: 'contact', component: ContactusComponent, data: { meta: { title: 'Contact Us', description: 'Have you seen my rubber duckie?' } } },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'header', component: HeaderComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'platform-features', component: PlatformFeaturesComponent},
    { path: 'ourteam', component: OurteamComponent},
    { path: 'contactus', component: ContactusComponent},
    { path: 'funnel', component: FunnelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
