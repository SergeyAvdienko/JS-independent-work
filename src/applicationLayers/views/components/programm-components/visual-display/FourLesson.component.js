/* eslint-disable max-len */
import {DefaultClass} from '@views/components/programm-components/visual-display/DefaultVisualDisplayClass.js';

class FourLesson extends DefaultClass {
  constructor() {
    super('displayFourLesson', '4');
  }
}

export class FourLessonFactory {
  constructor() {
    this.list = {
      success: new FourLesson().toSuccess(),
      error: new FourLesson().toError(),
      warning: new FourLesson().toWarning(),
      default: new FourLesson().toDefault(),
    };
  }
  toReady(type = 'error') {
    const MenuClass = this.list[type];
    return MenuClass;
  }
}
