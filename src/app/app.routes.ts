import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
//import { BannerComponent } from './banner/banner.component';
import { CalugasComponent } from './calugas/calugas.component';
//import { TabsComponent } from './tabs/tabs.component';


const rutas:Routes = [
    {path:'home', component: HomeComponent},
    {path:'calugas', component: CalugasComponent},
    {path:'landing/:id', component: LandingComponent},
    {path:'', pathMatch: 'full',  redirectTo: 'home'}
]

export const APP_ROUTES = RouterModule.forRoot(rutas);