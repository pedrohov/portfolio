import { AfterViewInit, Component, ElementRef, OnDestroy } from "@angular/core";
import { Theme, ThemeService } from "@core/theme.service";
import { select } from "d3";
import { geoMercator, geoPath } from "d3-geo";
import { fromEvent, Subject } from "rxjs";
import { takeUntil, throttleTime } from "rxjs/operators";
import pastagemData from "src/assets/maps/pastagem.json";

@Component({
  selector: "map",
  template: "",
  styleUrls: ["./map.component.scss"],
})
export class MapComponent implements AfterViewInit, OnDestroy {
  colors: Record<Theme, string[]> = {
    [Theme.Dark]: ["#292929", "#3A518A"],
    [Theme.Light]: ["#46105F", "#3A518A", "#59AE6F", "#f02ab3"],
  };

  private chartId: string = Math.random().toString(36).substring(2);

  private isAnimating: boolean = false;
  private readonly FADE_IN_DURATION = 200;

  private isComponentDestroyed$ = new Subject<boolean>();

  constructor(
    private elementRef: ElementRef,
    private themeService: ThemeService
  ) {}

  ngAfterViewInit(): void {
    this.create();

    fromEvent(window, "resize")
      .pipe(throttleTime(300), takeUntil(this.isComponentDestroyed$))
      .subscribe(() => this.create());
    fromEvent(window, "mousemove")
      .pipe(throttleTime(100), takeUntil(this.isComponentDestroyed$))
      .subscribe((event: MouseEvent) => {
        this.onMouseMove(event);
      });

    this.themeService.onThemeChange
      .pipe(takeUntil(this.isComponentDestroyed$))
      .subscribe(() => this.create());
  }

  onMouseMove(event: MouseEvent): void {
    select(`#animate-gradient`).attr(
      "x2",
      `${Math.max(
        ((event.screenX + event.screenY) * 50) / window.innerWidth,
        30
      )}%`
    );
  }

  private create(): void {
    const previousChart = select(`#map-${this.chartId}`);
    if (previousChart) previousChart.remove();
    const el = this.elementRef.nativeElement;
    const height = el.offsetHeight;
    const width = el.offsetWidth;
    const svg = select(el)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("id", `map-${this.chartId}`);

    const defs = svg.append("defs");

    const linearGradient = defs
      .append("linearGradient")
      .attr("id", "animate-gradient")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "50%")
      .attr("y2", "0")
      .attr("gradientTransform", "rotate(-25)");

    linearGradient
      .selectAll(".stop")
      .data(this.colors[this.themeService.theme])
      .enter()
      .append("stop")
      .attr(
        "offset",
        (_, i) => i / (this.colors[this.themeService.theme].length - 1)
      )
      .attr("stop-color", (d) => d);

    const projection = geoMercator().fitSize(
      [width, height],
      pastagemData as any
    );
    const pathGenerator = geoPath().projection(projection) as any;

    const featureGroup = svg
      .append("g")
      .selectAll("path")
      .data(pastagemData.features)
      .join("path")
      .attr("d", pathGenerator)
      .attr("fill", "url(#animate-gradient)")
      .attr("fill-opacity", 0)
      .attr("stroke", "url(#animate-gradient)")
      .attr("opacity", 0);

    featureGroup
      .transition()
      .duration(this.FADE_IN_DURATION)
      .attr("opacity", 0.35);

    featureGroup.on("pointerover", (event) => {
      if (this.isAnimating) return;
      select(event.target).transition().duration(400).attr("fill-opacity", 1);
    });

    this.isAnimating = true;
    setTimeout(() => (this.isAnimating = false), this.FADE_IN_DURATION);
  }

  ngOnDestroy(): void {
    this.isComponentDestroyed$.next(true);
    this.isComponentDestroyed$.complete();
  }
}
