/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

import {MenuIntro} from '@views/components/manual-components/menu-components/MenuIntro.component.js';
import {MenuDefaultSettings} from '@views/components/manual-components/menu-components/MenuDefaultSettings.component.js';
import {MenuDemoLesson} from '@views/components/manual-components/menu-components/MenuDemoLesson.component.js';
import {MenuLessonOne} from '@views/components/manual-components/menu-components/MenuLessonOne.component.js';
import {MenuLessonTwo} from '@views/components/manual-components/menu-components/MenuLessonTwo.component.js';
import {MenuLessonThree} from '@views/components/manual-components/menu-components/MenuLessonThree.component.js';
import {MenuLessonFour} from '@views/components/manual-components/menu-components/MenuLessonFour.component.js';
import {MenuLessonFive} from '@views/components/manual-components/menu-components/MenuLessonFive.component.js';
import {MenuLessonSix} from '@views/components/manual-components/menu-components/MenuLessonSix.component.js';
import {MenuLessonSeven} from '@views/components/manual-components/menu-components/MenuLessonSeven.component.js';
import {MenuLessonEight} from '@views/components/manual-components/menu-components/MenuLessonEight.component.js';

class ManualMenuComponent extends Component {
  constructor(children) {
    super('div', {class: 'site__manual-column-left'}, []);
    this.textH2 = 'Оглавление';
    this.children = children || [];
    this.node = {
      parent: this.el,
      children: [
        {tag: 'h2', props: {class: 'title-h2'}, children: [this.textH2]},
        {tag: 'ul', props: {class: 'site__manual-column-left-ul'}, children: [...this.children]},
      ],
    };
  }
  toReady() {
    this.node.parent.children = this.node.children;
    return this.node.parent;
  }
}

class ManualMenuActiveIntro extends ManualMenuComponent {
  constructor(children = [
    new MenuIntro().toActive(),
    new MenuDefaultSettings().toReady(),
    new MenuDemoLesson().toReady(),
    new MenuLessonOne().toReady(),
    new MenuLessonTwo().toReady(),
    new MenuLessonThree().toReady(),
    new MenuLessonFour().toReady(),
    new MenuLessonFive().toReady(),
    new MenuLessonSix().toReady(),
    new MenuLessonSeven().toReady(),
    new MenuLessonEight().toReady(),
  ]) {
    super(children);
  }
}

class ManualMenuActiveDefaultSettings extends ManualMenuComponent {
  constructor(children = [
    new MenuDefaultSettings().toActive(),
    new MenuDemoLesson().toReady(),
    new MenuLessonOne().toReady(),
    new MenuLessonTwo().toReady(),
    new MenuLessonThree().toReady(),
    new MenuLessonFour().toReady(),
    new MenuLessonFive().toReady(),
    new MenuLessonSix().toReady(),
    new MenuLessonSeven().toReady(),
    new MenuLessonEight().toReady(),
    new MenuIntro().toReady(),
  ]) {
    super(children);
  }
}

class ManualMenuActiveDemoLesson extends ManualMenuComponent {
  constructor(children = [
    new MenuDemoLesson().toActive(),
    new MenuLessonOne().toReady(),
    new MenuLessonTwo().toReady(),
    new MenuLessonThree().toReady(),
    new MenuLessonFour().toReady(),
    new MenuLessonFive().toReady(),
    new MenuLessonSix().toReady(),
    new MenuLessonSeven().toReady(),
    new MenuLessonEight().toReady(),
    new MenuIntro().toReady(),
    new MenuDefaultSettings().toReady(),
  ]) {
    super(children);
  }
}

class ManualMenuActiveOneLesson extends ManualMenuComponent {
  constructor(children = [
    new MenuLessonOne().toActive(),
    new MenuLessonTwo().toReady(),
    new MenuLessonThree().toReady(),
    new MenuLessonFour().toReady(),
    new MenuLessonFive().toReady(),
    new MenuLessonSix().toReady(),
    new MenuLessonSeven().toReady(),
    new MenuLessonEight().toReady(),
    new MenuIntro().toReady(),
    new MenuDefaultSettings().toReady(),
    new MenuDemoLesson().toReady(),
  ]) {
    super(children);
  }
}

class ManualMenuActiveTwoLesson extends ManualMenuComponent {
  constructor(children = [
    new MenuLessonTwo().toActive(),
    new MenuLessonThree().toReady(),
    new MenuLessonFour().toReady(),
    new MenuLessonFive().toReady(),
    new MenuLessonSix().toReady(),
    new MenuLessonSeven().toReady(),
    new MenuLessonEight().toReady(),
    new MenuIntro().toReady(),
    new MenuDefaultSettings().toReady(),
    new MenuDemoLesson().toReady(),
    new MenuLessonOne().toReady(),
  ]) {
    super(children);
  }
}

class ManualMenuActiveThreeLesson extends ManualMenuComponent {
  constructor(children = [
    new MenuLessonThree().toActive(),
    new MenuLessonFour().toReady(),
    new MenuLessonFive().toReady(),
    new MenuLessonSix().toReady(),
    new MenuLessonSeven().toReady(),
    new MenuLessonEight().toReady(),
    new MenuIntro().toReady(),
    new MenuDefaultSettings().toReady(),
    new MenuDemoLesson().toReady(),
    new MenuLessonOne().toReady(),
    new MenuLessonTwo().toReady(),
  ]) {
    super(children);
  }
}

class ManualMenuActiveFourLesson extends ManualMenuComponent {
  constructor(children = [
    new MenuLessonFour().toActive(),
    new MenuLessonFive().toReady(),
    new MenuLessonSix().toReady(),
    new MenuLessonSeven().toReady(),
    new MenuLessonEight().toReady(),
    new MenuIntro().toReady(),
    new MenuDefaultSettings().toReady(),
    new MenuDemoLesson().toReady(),
    new MenuLessonOne().toReady(),
    new MenuLessonTwo().toReady(),
    new MenuLessonThree().toReady(),
  ]) {
    super(children);
  }
}

class ManualMenuActiveFiveLesson extends ManualMenuComponent {
  constructor(children = [
    new MenuLessonFive().toActive(),
    new MenuLessonSix().toReady(),
    new MenuLessonSeven().toReady(),
    new MenuLessonEight().toReady(),
    new MenuIntro().toReady(),
    new MenuDefaultSettings().toReady(),
    new MenuDemoLesson().toReady(),
    new MenuLessonOne().toReady(),
    new MenuLessonTwo().toReady(),
    new MenuLessonThree().toReady(),
    new MenuLessonFour().toReady(),
  ]) {
    super(children);
  }
}

class ManualMenuActiveSixLesson extends ManualMenuComponent {
  constructor(children = [
    new MenuLessonSix().toActive(),
    new MenuLessonSeven().toReady(),
    new MenuLessonEight().toReady(),
    new MenuIntro().toReady(),
    new MenuDefaultSettings().toReady(),
    new MenuDemoLesson().toReady(),
    new MenuLessonOne().toReady(),
    new MenuLessonTwo().toReady(),
    new MenuLessonThree().toReady(),
    new MenuLessonFour().toReady(),
    new MenuLessonFive().toReady(),
  ]) {
    super(children);
  }
}

class ManualMenuActiveSevenLesson extends ManualMenuComponent {
  constructor(children = [
    new MenuLessonSeven().toActive(),
    new MenuLessonEight().toReady(),
    new MenuIntro().toReady(),
    new MenuDefaultSettings().toReady(),
    new MenuDemoLesson().toReady(),
    new MenuLessonOne().toReady(),
    new MenuLessonTwo().toReady(),
    new MenuLessonThree().toReady(),
    new MenuLessonFour().toReady(),
    new MenuLessonFive().toReady(),
    new MenuLessonSix().toReady(),
  ]) {
    super(children);
  }
}

class ManualMenuActiveEightLesson extends ManualMenuComponent {
  constructor(children = [
    new MenuLessonEight().toActive(),
    new MenuIntro().toReady(),
    new MenuDefaultSettings().toReady(),
    new MenuDemoLesson().toReady(),
    new MenuLessonOne().toReady(),
    new MenuLessonTwo().toReady(),
    new MenuLessonThree().toReady(),
    new MenuLessonFour().toReady(),
    new MenuLessonFive().toReady(),
    new MenuLessonSix().toReady(),
    new MenuLessonSeven().toReady(),
  ]) {
    super(children);
  }
}

export class ManualMenuComponentFactory {
  constructor() {
    this. list = {
      intro: ManualMenuActiveIntro,
      settings: ManualMenuActiveDefaultSettings,
      demo: ManualMenuActiveDemoLesson,
      one: ManualMenuActiveOneLesson,
      two: ManualMenuActiveTwoLesson,
      three: ManualMenuActiveThreeLesson,
      four: ManualMenuActiveFourLesson,
      five: ManualMenuActiveFiveLesson,
      six: ManualMenuActiveSixLesson,
      seven: ManualMenuActiveSevenLesson,
      eight: ManualMenuActiveEightLesson,
    };
  }
  toReady(type = 'intro') {
    const MenuClass = this.list[type];
    return new MenuClass().toReady();
  }
}
