/* eslint-disable max-len */
import {DefaultClass} from '@views/components/schedule-components/clock-button/DefaultClockClass.js';

class Clock16 extends DefaultClass {
  constructor() {
    super({
      title: '16:00 - 17:00',
      class: '16clock',
    });
  }
}

export class Clock16Factory {
  constructor() {
    this.list = {
      success: new Clock16().toSuccess(),
      error: new Clock16().toError(),
      warning: new Clock16().toWarning(),
    };
  }
  toReady(type = 'error') {
    const ClockClass = this.list[type];
    return ClockClass;
  }
}
