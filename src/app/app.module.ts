import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MapComponent } from "./map/map.component";
import { NextProjectComponent } from "./next-project/next-project.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ProjectCardComponent } from "./project-card/project-card.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { SideProjectComponent } from "./side-project/side-project.component";
import { ThemeTogglerComponent } from "./theme-toggler/theme-toggler.component";

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    ProjectDetailsComponent,
    PortfolioComponent,
    HomeComponent,
    MapComponent,
    SideProjectComponent,
    NextProjectComponent,
    ThemeTogglerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
