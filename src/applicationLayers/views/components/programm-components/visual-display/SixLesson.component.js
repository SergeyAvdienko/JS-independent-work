/* eslint-disable max-len */
import {DefaultClass} from '@views/components/programm-components/visual-display/DefaultVisualDisplayClass.js';

class SixLesson extends DefaultClass {
  constructor() {
    super('displaySixLesson', '6');
  }
}

export class SixLessonFactory {
  constructor() {
    this.list = {
      success: new SixLesson().toSuccess(),
      error: new SixLesson().toError(),
      warning: new SixLesson().toWarning(),
      default: new SixLesson().toDefault(),
    };
  }
  toReady(type = 'error') {
    const MenuClass = this.list[type];
    return MenuClass;
  }
}
