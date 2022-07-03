import {
  Component,
  ElementRef,
  ViewChild,
  HostListener,
  Input,
  AfterViewInit,
  OnDestroy,
} from "@angular/core";
import { geoMercator, geoPath } from "d3-geo";
import { select } from "d3";
import minas from "src/assets/maps/pastagem.json";
import { fromEvent, Subscription } from "rxjs";
import { throttleTime } from "rxjs/operators";

@Component({
  selector: "map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
})
export class MapComponent implements AfterViewInit, OnDestroy {
  @ViewChild("container") containerRef!: ElementRef;
  @Input() color?: string;
  @Input() enableEvents: boolean = false;
  @Input() fadeInDelay: number = 0;

  private chartId: string = Math.random().toString(36).substring(2);
  private subscriptions: Subscription[] = [];
  private isAnimating: boolean = false;

  ngAfterViewInit() {
    this.create();

    this.subscriptions.push(
      fromEvent(window, "resize")
        .pipe(throttleTime(300))
        .subscribe(() => this.create())
    );

    if (!this.enableEvents) return;
    this.subscriptions.push(
      fromEvent(window, "mousemove")
        .pipe(throttleTime(200))
        .subscribe((event: MouseEvent) => {
          this.onMouseMove(event);
        })
    );
  }

  onMouseMove(event: MouseEvent): void {
    const gradient = select(`#animate-gradient`);
    gradient.attr(
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
    if (!this.containerRef) return;
    const el = this.containerRef.nativeElement;
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

    const colors = ["#46105F", "#3A518A", "#59AE6F", "#f02ab3"];

    linearGradient
      .selectAll(".stop")
      .data(colors)
      .enter()
      .append("stop")
      .attr("offset", (_, i) => i / (colors.length - 1))
      .attr("stop-color", (d) => d);

    const projection = geoMercator().fitSize([width, height], minas as any);
    const pathGenerator = geoPath().projection(projection) as any;

    const featureGroup = svg
      .append("g")
      .selectAll("path")
      .data(minas.features)
      .join("path")
      .attr("d", pathGenerator)
      .attr("fill", "url(#animate-gradient)")
      .attr("fill-opacity", 0)
      .attr("stroke", this.color ? this.color : "url(#animate-gradient)")
      .attr("opacity", 0);

    const FADE_IN_DURATION = 600;

    featureGroup
      .transition()
      .delay(this.fadeInDelay)
      .duration(FADE_IN_DURATION)
      .attr("opacity", this.color ? 1 : 0.35);

    if (this.enableEvents) {
      featureGroup.on("pointerover", (event) => {
        if (this.isAnimating) return;
        select(event.target).transition().duration(400).attr("fill-opacity", 1);
      });

      this.isAnimating = true;
      setTimeout(
        () => (this.isAnimating = false),
        this.fadeInDelay + FADE_IN_DURATION
      );
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
