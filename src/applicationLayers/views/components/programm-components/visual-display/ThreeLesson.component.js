/* eslint-disable max-len */
import {DefaultClass} from '@views/components/programm-components/visual-display/DefaultVisualDisplayClass.js';

class ThreeLesson extends DefaultClass {
  constructor() {
    super('displayThreeLesson', '3');
  }
}

export class ThreeLessonFactory {
  constructor() {
    this.list = {
      success: new ThreeLesson().toSuccess(),
      error: new ThreeLesson().toError(),
      warning: new ThreeLesson().toWarning(),
      default: new ThreeLesson().toDefault(),
    };
  }
  toReady(type = 'error') {
    const MenuClass = this.list[type];
    return MenuClass;
  }
}
