import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProjectCardComponent } from "./project-card/project-card.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "./shared/shared.module";
import { MapComponent } from "./map/map.component";
import { SideProjectComponent } from "./side-project/side-project.component";

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    ProjectDetailsComponent,
    PortfolioComponent,
    HomeComponent,
    MapComponent,
    SideProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
