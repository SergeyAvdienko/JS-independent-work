/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

import {HelperSettingsSkypeFactory} from '@views/components/programm-components/helper-settings/HelperSettingsSkype.component.js';
import {HelperSettingsPathFolderFactory} from '@views/components/programm-components/helper-settings/HelperSettingsPathFolder.component.js';

export class HelperSettingsComponent extends Component {
  constructor(options = {
    skype: 'error',
    field: 'error',
  }) {
    super('div', {class: 'content__block-helper-settings-container'}, []);
    this.options = options;
    this.children = [
      new HelperSettingsSkypeFactory().toReady(this.options.skype),
      new HelperSettingsPathFolderFactory().toReady(this.options.field),
    ];
    this.node = {
      parent: this.el,
      children: [...this.children],
    };
  }
  toReady() {
    this.node.parent.children = this.node.children;
    return this.node.parent;
  }
}
