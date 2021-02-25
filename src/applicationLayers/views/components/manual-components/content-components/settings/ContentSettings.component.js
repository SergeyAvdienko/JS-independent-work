/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

import {LoginYHComponent} from '@views/components/manual-components/content-components/settings/LoginYH.component.js';
import {SkypeYHComponent} from '@views/components/manual-components/content-components/settings/SkypeYH.component.js';
import {FieldGoogleComponent} from '@views/components/manual-components/content-components/settings/FieldGoogle.component.js';

export class ContentSettingsComponent extends Component {
  constructor(components = [
    new LoginYHComponent().toReady(),
    new SkypeYHComponent().toReady(),
    new FieldGoogleComponent().toReady(),
  ]) {
    super('section', {id: 'default-settings'}, []);
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
