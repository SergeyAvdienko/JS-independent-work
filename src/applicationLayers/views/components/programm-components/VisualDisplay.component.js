/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

import {OneLessonFactory} from '@views/components/programm-components/visual-display/OneLesson.component.js';
import {TwoLessonFactory} from '@views/components/programm-components/visual-display/TwoLesson.component.js';
import {ThreeLessonFactory} from '@views/components/programm-components/visual-display/ThreeLesson.component.js';
import {FourLessonFactory} from '@views/components/programm-components/visual-display/FourLesson.component.js';
import {FiveLessonFactory} from '@views/components/programm-components/visual-display/FiveLesson.component.js';
import {SixLessonFactory} from '@views/components/programm-components/visual-display/SixLesson.component.js';
import {SevenLessonFactory} from '@views/components/programm-components/visual-display/SevenLesson.component.js';
import {EightLessonFactory} from '@views/components/programm-components/visual-display/EightLesson.component.js';

export class VisualDisplayComponent extends Component {
  constructor(options = {
    one: 'error',
    two: 'error',
    three: 'error',
    four: 'error',
    five: 'error',
    six: 'error',
    seven: 'error',
    eight: 'error',
  }) {
    super('div', {class: 'content__block-visual-display-container'}, []);
    this.options = options;
    this.children = [
      new OneLessonFactory().toReady(this.options.one),
      new TwoLessonFactory().toReady(this.options.two),
      new ThreeLessonFactory().toReady(this.options.three),
      new FourLessonFactory().toReady(this.options.four),
      new FiveLessonFactory().toReady(this.options.five),
      new SixLessonFactory().toReady(this.options.six),
      new SevenLessonFactory().toReady(this.options.seven),
      new EightLessonFactory().toReady(this.options.eight),
    ];
    this.node = {
      parent: this.el,
      children: [...this.children],
    };
  }
  toReady() {
    this.node.parent.children = this.node.children;
    return this.node.parent;
  }
}
