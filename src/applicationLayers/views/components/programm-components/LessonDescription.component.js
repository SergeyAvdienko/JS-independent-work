/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

import {OneLessonDescriptionFactory} from '@views/components/programm-components/lesson-description/OneLessonDescription.component.js';
import {TwoLessonDescriptionFactory} from '@views/components/programm-components/lesson-description/TwoLessonDescription.component.js';
import {ThreeLessonDescriptionFactory} from '@views/components/programm-components/lesson-description/ThreeLessonDescription.component.js';
import {FourLessonDescriptionFactory} from '@views/components/programm-components/lesson-description/FourLessonDescription.component.js';
import {FiveLessonDescriptionFactory} from '@views/components/programm-components/lesson-description/FiveLessonDescription.component.js';
import {SixLessonDescriptionFactory} from '@views/components/programm-components/lesson-description/SixLessonDescription.component.js';
import {SevenLessonDescriptionFactory} from '@views/components/programm-components/lesson-description/SevenLessonDescription.component.js';
import {EightLessonDescriptionFactory} from '@views/components/programm-components/lesson-description/EightLessonDescription.component.js';

export class LessonDescriptionComponent extends Component {
  constructor(options = {
    lesson: 'one',
    lessonClass: 'error',
    type: 'errorLogin',
  }) {
    super('div', {class: 'content__block-lesson-container'}, []);
    this.options = options;
    this.children = {
      one: new OneLessonDescriptionFactory(this.options.lessonClass).toReady(this.options.type),
      two: new TwoLessonDescriptionFactory(this.options.lessonClass).toReady(this.options.type),
      three: new ThreeLessonDescriptionFactory(this.options.lessonClass).toReady(this.options.type),
      four: new FourLessonDescriptionFactory(this.options.lessonClass).toReady(this.options.type),
      five: new FiveLessonDescriptionFactory(this.options.lessonClass).toReady(this.options.type),
      six: new SixLessonDescriptionFactory(this.options.lessonClass).toReady(this.options.type),
      seven: new SevenLessonDescriptionFactory(this.options.lessonClass).toReady(this.options.type),
      eight: new EightLessonDescriptionFactory(this.options.lessonClass).toReady(this.options.type),
    };
    this.node = {
      parent: this.el,
      children: [this.children[`${options.lesson}`]],
    };
  }
  toReady() {
    this.node.parent.children = this.node.children;
    return this.node.parent;
  }
}
