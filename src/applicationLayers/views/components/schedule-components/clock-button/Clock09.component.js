/* eslint-disable max-len */
import {DefaultClass} from '@views/components/schedule-components/clock-button/DefaultClockClass.js';

class Clock09 extends DefaultClass {
  constructor() {
    super({
      title: '09:00 - 10:00',
      class: '09clock',
    });
  }
}

export class Clock09Factory {
  constructor() {
    this.list = {
      success: new Clock09().toSuccess(),
      error: new Clock09().toError(),
      warning: new Clock09().toWarning(),
    };
  }
  toReady(type = 'error') {
    const ClockClass = this.list[type];
    return ClockClass;
  }
}
