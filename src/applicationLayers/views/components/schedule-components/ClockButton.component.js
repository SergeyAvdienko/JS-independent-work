/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

import {Clock08Factory} from '@views/components/schedule-components/clock-button/Clock08.component.js';
import {Clock09Factory} from '@views/components/schedule-components/clock-button/Clock09.component.js';
import {Clock10Factory} from '@views/components/schedule-components/clock-button/Clock10.component.js';
import {Clock11Factory} from '@views/components/schedule-components/clock-button/Clock11.component.js';
import {Clock12Factory} from '@views/components/schedule-components/clock-button/Clock12.component.js';
import {Clock13Factory} from '@views/components/schedule-components/clock-button/Clock13.component.js';
import {Clock14Factory} from '@views/components/schedule-components/clock-button/Clock14.component.js';
import {Clock15Factory} from '@views/components/schedule-components/clock-button/Clock15.component.js';
import {Clock16Factory} from '@views/components/schedule-components/clock-button/Clock16.component.js';
import {Clock17Factory} from '@views/components/schedule-components/clock-button/Clock17.component.js';

export class ClockComponent extends Component {
  constructor(options = {
    clock08: 'error',
    clock09: 'error',
    clock10: 'error',
    clock11: 'error',
    clock12: 'error',
    clock13: 'error',
    clock14: 'error',
    clock15: 'error',
    clock16: 'error',
    clock17: 'error',
  }) {
    super('ul', {class: 'list__ul'}, []);
    this.options = options;
    this.children = [
      new Clock08Factory().toReady(options.clock08),
      new Clock09Factory().toReady(options.clock09),
      new Clock10Factory().toReady(options.clock10),
      new Clock11Factory().toReady(options.clock11),
      new Clock12Factory().toReady(options.clock12),
      new Clock13Factory().toReady(options.clock13),
      new Clock14Factory().toReady(options.clock14),
      new Clock15Factory().toReady(options.clock15),
      new Clock16Factory().toReady(options.clock16),
      new Clock17Factory().toReady(options.clock17),
    ];
    this.node = {
      parent: this.el,
      children: this.children,
    };
  }
  toReady() {
    this.node.parent.children = this.node.children;
    return this.node.parent;
  }
}
