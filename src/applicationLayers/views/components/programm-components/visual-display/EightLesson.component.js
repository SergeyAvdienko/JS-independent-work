/* eslint-disable max-len */
import {DefaultClass} from '@views/components/programm-components/visual-display/DefaultVisualDisplayClass.js';

class EightLesson extends DefaultClass {
  constructor() {
    super('displayEightLesson', '8');
  }
}

export class EightLessonFactory {
  constructor() {
    this.list = {
      success: new EightLesson().toSuccess(),
      error: new EightLesson().toError(),
      warning: new EightLesson().toWarning(),
      default: new EightLesson().toDefault(),
    };
  }
  toReady(type = 'error') {
    const MenuClass = this.list[type];
    return MenuClass;
  }
}
