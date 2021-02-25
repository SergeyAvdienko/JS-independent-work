/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

import {GoalThreeLessonComponent} from '@views/components/manual-components/content-components/three-lesson/GoalThreeLesson.component.js';
import {PresentationThreeLessonComponent} from '@views/components/manual-components/content-components/three-lesson/PresentationThreeLesson.component.js';

export class ContentThreeComponent extends Component {
  constructor(components = [
    new GoalThreeLessonComponent().toReady(),
    new PresentationThreeLessonComponent().toReady(),
  ]) {
    super('section', {id: 'three-lesson'}, []);
    this.compontnts = components;
    this.node = {
      parent: this.el,
      children: [...this.compontnts],
    };
  }
  toReady() {
    this.node.parent.children = this.node.children;
    return this.node.parent;
  }
}
