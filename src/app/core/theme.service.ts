import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export enum Theme {
  Dark = "dark",
  Light = "light",
}

@Injectable({ providedIn: "root" })
export class ThemeService {
  private renderer!: Renderer2;
  private themeChangeBehavior = new BehaviorSubject<Theme>(Theme.Light);
  private changeTheme = this._changeTheme.bind(this);

  get theme() {
    return this.themeChangeBehavior.value;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    window.matchMedia &&
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", this.changeTheme);
    this.changeTheme(
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)")
    );
  }

  private _changeTheme(event) {
    this.switch((event.matches && Theme.Dark) || Theme.Light);
  }

  switch(theme?: Theme) {
    theme =
      theme || this.themeChangeBehavior.value == Theme.Light
        ? Theme.Dark
        : Theme.Light;
    if (theme == this.themeChangeBehavior.value) return;
    const previousTheme = this.themeChangeBehavior.value;
    this.renderer.addClass(this.document.body, `${theme}-theme`);
    this.renderer.removeClass(this.document.body, `${previousTheme}-theme`);
    this.themeChangeBehavior.next(theme);
  }

  ngOnDestroy() {
    window.matchMedia &&
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", this.changeTheme);
  }
}
