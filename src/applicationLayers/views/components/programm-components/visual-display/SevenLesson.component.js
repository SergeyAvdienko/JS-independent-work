/* eslint-disable max-len */
import {DefaultClass} from '@views/components/programm-components/visual-display/DefaultVisualDisplayClass.js';

class SevenLesson extends DefaultClass {
  constructor() {
    super('displaySevenLesson', '7');
  }
}

export class SevenLessonFactory {
  constructor() {
    this.list = {
      success: new SevenLesson().toSuccess(),
      error: new SevenLesson().toError(),
      warning: new SevenLesson().toWarning(),
      default: new SevenLesson().toDefault(),
    };
  }
  toReady(type = 'error') {
    const MenuClass = this.list[type];
    return MenuClass;
  }
}
