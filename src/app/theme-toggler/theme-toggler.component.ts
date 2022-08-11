import { Component } from "@angular/core";
import { Theme, ThemeService } from "@core/theme.service";

@Component({
  selector: "theme-toggler",
  templateUrl: "./theme-toggler.component.html",
  styleUrls: ["./theme-toggler.component.scss"],
})
export class ThemeTogglerComponent {
  themes = Theme;
  constructor(public themeService: ThemeService) {}
}
