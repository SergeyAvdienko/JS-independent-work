/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

import {GoalTwoLessonComponent} from '@views/components/manual-components/content-components/two-lesson/GoalTwoLesson.component.js';
import {ExpectedResultTwoComponent} from '@views/components/manual-components/content-components/two-lesson/ExpectedResultTwo.component.js';

export class ContentTwoComponent extends Component {
  constructor(components = [
    new GoalTwoLessonComponent().toReady(),
    new ExpectedResultTwoComponent().toReady(),
  ]) {
    super('section', {id: 'two-lesson'}, []);
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
