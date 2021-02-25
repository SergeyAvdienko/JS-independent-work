/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

import {GoalSevenLessonComponent} from '@views/components/manual-components/content-components/seven-lesson/GoalSevenLesson.component.js';
import {PersuasionSkillComponent} from '@views/components/manual-components/content-components/seven-lesson/PersuasionSkill.component.js';
import {SkillsWorkingDoubtsComponent} from '@views/components/manual-components/content-components/seven-lesson/SkillsWorkingDoubts.component.js';

export class ContentSevenComponent extends Component {
  constructor(components = [
    new GoalSevenLessonComponent().toReady(),
    new PersuasionSkillComponent().toReady(),
    new SkillsWorkingDoubtsComponent().toReady(),
  ]) {
    super('section', {id: 'seven-lesson'}, []);
    this.compontnts = components;
    this.node = {
      parent: this.el,
      children: [...this.compontnts],
    };
  }
  toReady() {
    this.node.parent.children = this.node.children;
    return this.node.parent;
  }
}
