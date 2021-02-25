/* eslint-disable max-len */
import {DefaultClass} from '@views/components/programm-components/visual-display/DefaultVisualDisplayClass.js';

class OneLesson extends DefaultClass {
  constructor() {
    super('displayOneLesson', '1');
  }
}

export class OneLessonFactory {
  constructor() {
    this.list = {
      success: new OneLesson().toSuccess(),
      error: new OneLesson().toError(),
      warning: new OneLesson().toWarning(),
      default: new OneLesson().toDefault(),
    };
  }
  toReady(type = 'error') {
    const MenuClass = this.list[type];
    return MenuClass;
  }
}
