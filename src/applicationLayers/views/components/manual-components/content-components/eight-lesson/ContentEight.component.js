/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

import {GoalEightLessonComponent} from '@views/components/manual-components/content-components/eight-lesson/GoalEightLesson.component.js';
import {ExpectedResultEightComponent} from '@views/components/manual-components/content-components/eight-lesson/ExpectedResultEight.component.js';

export class ContentEightComponent extends Component {
  constructor(components = [
    new GoalEightLessonComponent().toReady(),
    new ExpectedResultEightComponent().toReady(),
  ]) {
    super('section', {id: 'eight-lesson'}, []);
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
