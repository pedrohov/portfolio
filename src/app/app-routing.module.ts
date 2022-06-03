import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";

const routes: Routes = [
  {
    path: "projects",
    component: PortfolioComponent,
    data: { animation: "Portfolio" },
  },
  {
    path: "projects/:title",
    component: ProjectDetailsComponent,
    data: { animation: "Portfolio" },
  },
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "**", redirectTo: "/", pathMatch: "full" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
