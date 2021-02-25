/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

import {GoalSixLessonComponent} from '@views/components/manual-components/content-components/six-lesson/GoalSixLesson.component.js';
import {ExpectedResultSixComponent} from '@views/components/manual-components/content-components/six-lesson/ExpectedResultSix.component.js';

export class ContentSixComponent extends Component {
  constructor(components = [
    new GoalSixLessonComponent().toReady(),
    new ExpectedResultSixComponent().toReady(),
  ]) {
    super('section', {id: 'six-lesson'}, []);
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
