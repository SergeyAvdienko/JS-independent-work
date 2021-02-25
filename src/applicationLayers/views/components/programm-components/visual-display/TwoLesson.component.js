/* eslint-disable max-len */
import {DefaultClass} from '@views/components/programm-components/visual-display/DefaultVisualDisplayClass.js';

class TwoLesson extends DefaultClass {
  constructor() {
    super('displayTwoLesson', '2');
  }
}

export class TwoLessonFactory {
  constructor() {
    this.list = {
      success: new TwoLesson().toSuccess(),
      error: new TwoLesson().toError(),
      warning: new TwoLesson().toWarning(),
      default: new TwoLesson().toDefault(),
    };
  }
  toReady(type = 'error') {
    const MenuClass = this.list[type];
    return MenuClass;
  }
}
