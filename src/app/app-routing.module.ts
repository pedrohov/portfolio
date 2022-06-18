import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";

export const ROUTES: Routes = [
  {
    path: ":title",
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
