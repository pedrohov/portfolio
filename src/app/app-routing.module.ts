import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";

export const ROUTES: Routes = [
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
    RouterModule.forRoot(ROUTES, {
      anchorScrolling: "enabled",
      onSameUrlNavigation: "reload",
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
