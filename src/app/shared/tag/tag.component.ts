import { Component, OnInit, Input } from "@angular/core";
import { Tag } from "@core/models/tag";
import { TagService } from "@core/tag.service";

@Component({
  selector: "app-tag",
  templateUrl: "./tag.component.html",
  styleUrls: ["./tag.component.scss"],
})
export class TagComponent implements OnInit {
  @Input() tag: Tag;

  constructor(private tagService: TagService) {}

  ngOnInit() {
    this.getTag(this.tag.name);
  }

  getTag(name: string): void {
    this.tagService.getTag(name).subscribe((tag) => (this.tag = tag));
  }

  toggle() {
    this.tag.selected = !this.tag.selected;
  }
}
