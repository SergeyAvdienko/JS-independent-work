/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';
import {DefaultClass} from '@views/components/track-components/track/DefaultTrackClass.js';

export class TrackComponent {
  constructor(options) {
    this.options = options;
    this.node = {
      parent: {tag: 'div', props: {class: 'site__report-progress-container'}, children: []},
      children: this.childrenGenerator(),
    };
  }
  childrenGenerator() {
    const array = [];
    this.options.forEach((element) => {
      element['class'] = 'line__progress-container line';
      const el = new DefaultClass(element).toReady();
      array.push(el);
    });
    return array;
  }
  toReady() {
    this.node.parent.children = this.node.children;
    return this.node.parent;
  }
}
