/* eslint-disable max-len */
import {DefaultClass} from '@views/components/schedule-components/clock-button/DefaultClockClass.js';

class Clock13 extends DefaultClass {
  constructor() {
    super({
      title: '13:00 - 14:00',
      class: '13clock',
    });
  }
}

export class Clock13Factory {
  constructor() {
    this.list = {
      success: new Clock13().toSuccess(),
      error: new Clock13().toError(),
      warning: new Clock13().toWarning(),
    };
  }
  toReady(type = 'error') {
    const ClockClass = this.list[type];
    return ClockClass;
  }
}
