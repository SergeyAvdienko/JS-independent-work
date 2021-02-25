/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

import {GoalFourLessonComponent} from '@views/components/manual-components/content-components/four-lesson/GoalFourLesson.component.js';
import {ExpectedResultFourComponent} from '@views/components/manual-components/content-components/four-lesson/ExpectedResultFour.component.js';

export class ContentFourComponent extends Component {
  constructor(components = [
    new GoalFourLessonComponent().toReady(),
    new ExpectedResultFourComponent().toReady(),
  ]) {
    super('section', {id: 'four-lesson'}, []);
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
