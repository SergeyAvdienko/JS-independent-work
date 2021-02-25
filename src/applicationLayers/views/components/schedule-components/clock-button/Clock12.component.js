/* eslint-disable max-len */
import {DefaultClass} from '@views/components/schedule-components/clock-button/DefaultClockClass.js';

class Clock12 extends DefaultClass {
  constructor() {
    super({
      title: '12:00 - 13:00',
      class: '12clock',
    });
  }
}

export class Clock12Factory {
  constructor() {
    this.list = {
      success: new Clock12().toSuccess(),
      error: new Clock12().toError(),
      warning: new Clock12().toWarning(),
    };
  }
  toReady(type = 'error') {
    const ClockClass = this.list[type];
    return ClockClass;
  }
}
