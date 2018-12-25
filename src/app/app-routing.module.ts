import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, data: { animation: 'Home' } },
    { path: 'projects', component: PortfolioComponent, data: { animation: 'Portfolio' } },
    { path: 'about', component: AboutComponent, data: { animation: 'About' } },
    { path: 'projects/:title', component: ProjectDetailsComponent, data: { animation: 'Portfolio' } },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '*', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
