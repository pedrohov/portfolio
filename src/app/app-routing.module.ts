import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

const routes: Routes = [
    { path: '', component: PortfolioComponent, data: {animation: 'Portfolio'} },
    { path: 'project/:title', component: ProjectDetailsComponent, data: {animation: 'Description'} },
    { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
