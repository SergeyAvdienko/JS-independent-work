/* eslint-disable max-len */
import {DefaultClass} from '@views/components/schedule-components/clock-button/DefaultClockClass.js';

class Clock11 extends DefaultClass {
  constructor() {
    super({
      title: '11:00 - 12:00',
      class: '11clock',
    });
  }
}

export class Clock11Factory {
  constructor() {
    this.list = {
      success: new Clock11().toSuccess(),
      error: new Clock11().toError(),
      warning: new Clock11().toWarning(),
    };
  }
  toReady(type = 'error') {
    const ClockClass = this.list[type];
    return ClockClass;
  }
}
