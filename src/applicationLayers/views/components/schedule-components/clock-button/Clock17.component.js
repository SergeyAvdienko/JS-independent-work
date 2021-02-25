/* eslint-disable max-len */
import {DefaultClass} from '@views/components/schedule-components/clock-button/DefaultClockClass.js';

class Clock17 extends DefaultClass {
  constructor() {
    super({
      title: '17:00 - 18:00',
      class: '17clock',
    });
  }
}

export class Clock17Factory {
  constructor() {
    this.list = {
      success: new Clock17().toSuccess(),
      error: new Clock17().toError(),
      warning: new Clock17().toWarning(),
    };
  }
  toReady(type = 'error') {
    const ClockClass = this.list[type];
    return ClockClass;
  }
}
