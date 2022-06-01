import { Component, Input } from "@angular/core";
import { Tag } from "@core/models/tag";

@Component({
  selector: "app-tag",
  templateUrl: "./tag.component.html",
  styleUrls: ["./tag.component.scss"],
})
export class TagComponent {
  @Input() tag: Tag;

  toggle() {
    this.tag.selected = !this.tag.selected;
  }
}
