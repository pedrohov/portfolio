import { Pipe, PipeTransform } from "@angular/core";
import { Project } from "@core/models/project";
import { Tag } from "@core/models/tag";

@Pipe({
  name: "tagFilter",
})
export class TagFilterPipe implements PipeTransform {
  transform(projects?: Project[], filter?: Tag[]): Project[] {
    if (!projects?.length || !filter?.length) return projects || [];
    return projects.filter((element) =>
      filter.some((tag) => element.tags.indexOf(tag.name) > -1)
    );
  }
}
