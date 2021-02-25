/* eslint-disable max-len */
import {DefaultClass} from '@views/components/schedule-components/clock-button/DefaultClockClass.js';

class Clock15 extends DefaultClass {
  constructor() {
    super({
      title: '15:00 - 16:00',
      class: '15clock',
    });
  }
}

export class Clock15Factory {
  constructor() {
    this.list = {
      success: new Clock15().toSuccess(),
      error: new Clock15().toError(),
      warning: new Clock15().toWarning(),
    };
  }
  toReady(type = 'error') {
    const ClockClass = this.list[type];
    return ClockClass;
  }
}
