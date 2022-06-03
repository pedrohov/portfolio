import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProjectCardComponent } from "./project-card/project-card.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { TagFilterPipe } from "./pipes/tag-filter.pipe";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    ProjectDetailsComponent,
    PortfolioComponent,
    TagFilterPipe,
    HomeComponent,
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
