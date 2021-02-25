/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

import {GoalYHComponent} from '@views/components/manual-components/content-components/intro/GoalYH.component.js';
import {WhatIsYHComponent} from '@views/components/manual-components/content-components/intro/WhatIsYH.component.js';
import {StartLearningComponent} from '@views/components/manual-components/content-components/intro/StartLearning.component.js';
import {DeveloperYHComponent} from '@views/components/manual-components/content-components/intro/DeveloperYH.component.js';

export class ContentIntroComponent extends Component {
  constructor(components = [
    new GoalYHComponent().toReady(),
    new WhatIsYHComponent().toReady(),
    new StartLearningComponent().toReady(),
    new DeveloperYHComponent().toReady(),
  ]) {
    super('section', {id: 'intro'}, []);
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
