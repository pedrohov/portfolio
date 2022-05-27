import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProjectCardComponent } from "./project-card/project-card.component";
import { TagComponent } from "./tag/tag.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { AboutComponent } from "./about/about.component";
import { TagFilterPipe } from "./pipes/tag-filter.pipe";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    TagComponent,
    ProjectDetailsComponent,
    PortfolioComponent,
    AboutComponent,
    TagFilterPipe,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
