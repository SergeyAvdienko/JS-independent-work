/* eslint-disable max-len */
import {DefaultClass} from '@views/components/schedule-components/clock-button/DefaultClockClass.js';

class Clock10 extends DefaultClass {
  constructor() {
    super({
      title: '10:00 - 11:00',
      class: '10clock',
    });
  }
}

export class Clock10Factory {
  constructor() {
    this.list = {
      success: new Clock10().toSuccess(),
      error: new Clock10().toError(),
      warning: new Clock10().toWarning(),
    };
  }
  toReady(type = 'error') {
    const ClockClass = this.list[type];
    return ClockClass;
  }
}
