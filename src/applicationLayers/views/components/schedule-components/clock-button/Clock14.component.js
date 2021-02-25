/* eslint-disable max-len */
import {DefaultClass} from '@views/components/schedule-components/clock-button/DefaultClockClass.js';

class Clock14 extends DefaultClass {
  constructor() {
    super({
      title: '14:00 - 15:00',
      class: '14clock',
    });
  }
}

export class Clock14Factory {
  constructor() {
    this.list = {
      success: new Clock14().toSuccess(),
      error: new Clock14().toError(),
      warning: new Clock14().toWarning(),
    };
  }
  toReady(type = 'error') {
    const ClockClass = this.list[type];
    return ClockClass;
  }
}
