import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagFilter'
})

export class TagFilterPipe implements PipeTransform {

  transform(projects: any[], filter: any[]): any {
    if(!projects || !filter)
      return projects;

    return projects.filter(function(element, index, array) {
      let hasTag = false;
      filter.forEach((tag) => {
        if(element.tags.indexOf(tag.name) > -1) {
          hasTag = true;
        }
      })
      return hasTag;
    });
  }

}
