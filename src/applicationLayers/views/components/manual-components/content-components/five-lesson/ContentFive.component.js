/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

import {GoalFiveLessonComponent} from '@views/components/manual-components/content-components/five-lesson/GoalFiveLesson.component.js';
import {PositiveReactionComponent} from '@views/components/manual-components/content-components/five-lesson/PositiveReaction.component.js';
import {WorkObjectionsComponent} from '@views/components/manual-components/content-components/five-lesson/WorkObjections.component.js';
import {FindNeedsComponent} from '@views/components/manual-components/content-components/five-lesson/FindNeeds.component.js';

export class ContentFiveComponent extends Component {
  constructor(components = [
    new GoalFiveLessonComponent().toReady(),
    new PositiveReactionComponent().toReady(),
    new WorkObjectionsComponent().toReady(),
    new FindNeedsComponent().toReady(),
  ]) {
    super('section', {id: 'five-lesson'}, []);
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
