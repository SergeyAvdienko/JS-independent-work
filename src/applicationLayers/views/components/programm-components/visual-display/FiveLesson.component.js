/* eslint-disable max-len */
import {DefaultClass} from '@views/components/programm-components/visual-display/DefaultVisualDisplayClass.js';

class FiveLesson extends DefaultClass {
  constructor() {
    super('displayFiveLesson', '5');
  }
}

export class FiveLessonFactory {
  constructor() {
    this.list = {
      success: new FiveLesson().toSuccess(),
      error: new FiveLesson().toError(),
      warning: new FiveLesson().toWarning(),
      default: new FiveLesson().toDefault(),
    };
  }
  toReady(type = 'error') {
    const MenuClass = this.list[type];
    return MenuClass;
  }
}
