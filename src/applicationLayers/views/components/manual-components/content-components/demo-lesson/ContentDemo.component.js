/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

import {RulesYHComponent} from '@views/components/manual-components/content-components/demo-lesson/RulesYH.component.js';

export class ContentDemoComponent extends Component {
  constructor(components = [
    new RulesYHComponent().toReady(),
  ]) {
    super('section', {id: 'demo-lesson'}, []);
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
