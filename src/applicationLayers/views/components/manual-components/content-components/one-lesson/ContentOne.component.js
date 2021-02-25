/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

import {GoalOneLessonComponent} from '@views/components/manual-components/content-components/one-lesson/GoalOneLesson.component.js';
import {ChainEventsComponent} from '@views/components/manual-components/content-components/one-lesson/ChainEvents.component.js';
import {WorkNewsComponent} from '@views/components/manual-components/content-components/one-lesson/WorkNews.component.js';
import {EstablishingContactComponent} from '@views/components/manual-components/content-components/one-lesson/EstablishingContact.component.js';

export class ContentOneComponent extends Component {
  constructor(components = [
    new GoalOneLessonComponent().toReady(),
    new ChainEventsComponent().toReady(),
    new WorkNewsComponent().toReady(),
    new EstablishingContactComponent().toReady(),
  ]) {
    super('section', {id: 'one-lesson'}, []);
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
