/* eslint-disable max-len */
import {DefaultClass} from '@views/components/schedule-components/clock-button/DefaultClockClass.js';

class Clock08 extends DefaultClass {
  constructor() {
    super({
      title: '08:00 - 09:00',
      class: '08clock',
    });
  }
}

export class Clock08Factory {
  constructor() {
    this.list = {
      success: new Clock08().toSuccess(),
      error: new Clock08().toError(),
      warning: new Clock08().toWarning(),
    };
  }
  toReady(type = 'error') {
    const ClockClass = this.list[type];
    return ClockClass;
  }
}
