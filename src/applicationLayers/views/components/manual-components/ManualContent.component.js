/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';
import {ContentIntroComponent} from '@views/components/manual-components/content-components/intro/ContentIntro.component.js';
import {ContentSettingsComponent} from '@views/components/manual-components/content-components/settings/ContentSettings.component.js';
import {ContentDemoComponent} from '@views/components/manual-components/content-components/demo-lesson/ContentDemo.component.js';
import {ContentOneComponent} from '@views/components/manual-components/content-components/one-lesson/ContentOne.component.js';
import {ContentTwoComponent} from '@views/components/manual-components/content-components/two-lesson/ContentTwo.component.js';
import {ContentThreeComponent} from '@views/components/manual-components/content-components/three-lesson/ContentThree.component.js';
import {ContentFourComponent} from '@views/components/manual-components/content-components/four-lesson/ContentFour.component.js';
import {ContentFiveComponent} from '@views/components/manual-components/content-components/five-lesson/ContentFive.component.js';
import {ContentSixComponent} from '@views/components/manual-components/content-components/six-lesson/ContentSix.component.js';
import {ContentSevenComponent} from '@views/components/manual-components/content-components/seven-lesson/ContentSeven.component.js';
import {ContentEightComponent} from '@views/components/manual-components/content-components/eight-lesson/ContentEight.component.js';

class ManualContentComponent extends Component {
  constructor(children, titleh2) {
    super('div', {class: 'site__manual-column-right'}, []);
    this.titleh2 = titleh2;
    this.children = children || [];
    this.node = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'site__manual-column-right-title'}, children: [
          {tag: 'h2', props: {class: 'title-h2'}, children: [this.titleh2]},
          {tag: 'div', props: {class: 'site__manual-column-right-title-button'}, children: [
            {tag: 'button', props: {class: 'button-menu', id: 'buttonClickMenuOn'}, children: ['Оглавление']},
            {tag: 'button', props: {class: 'button-back', id: 'buttonClickBackHomePage'}, children: ['На главную']},
          ]},
        ]},
        ...this.children,
      ],
    };
  }
  toReady() {
    this.node.parent.children = this.node.children;
    return this.node.parent;
  }
}

class ContentIntroActive extends ManualContentComponent {
  constructor(
      children = [new ContentIntroComponent().toReady()],
      titleh2 = 'Введение',
  ) {
    super(children, titleh2);
  }
}

class ContentSettingsActive extends ManualContentComponent {
  constructor(
      children = [new ContentSettingsComponent().toReady()],
      titleh2 = 'Базовые настройки',
  ) {
    super(children, titleh2);
  }
}

class ContentDemoActive extends ManualContentComponent {
  constructor(
      children = [new ContentDemoComponent().toReady()],
      titleh2 = 'Пробное занятие',
  ) {
    super(children, titleh2);
  }
}

class ContentOneActive extends ManualContentComponent {
  constructor(
      children = [new ContentOneComponent().toReady()],
      titleh2 = 'Первое занятие',
  ) {
    super(children, titleh2);
  }
}

class ContentTwoActive extends ManualContentComponent {
  constructor(
      children = [new ContentTwoComponent().toReady()],
      titleh2 = 'Второе занятие',
  ) {
    super(children, titleh2);
  }
}

class ContentThreeActive extends ManualContentComponent {
  constructor(
      children = [new ContentThreeComponent().toReady()],
      titleh2 = 'Третье занятие',
  ) {
    super(children, titleh2);
  }
}

class ContentFourActive extends ManualContentComponent {
  constructor(
      children = [new ContentFourComponent().toReady()],
      titleh2 = 'Четвертое занятие',
  ) {
    super(children, titleh2);
  }
}

class ContentFiveActive extends ManualContentComponent {
  constructor(
      children = [new ContentFiveComponent().toReady()],
      titleh2 = 'Пятое занятие',
  ) {
    super(children, titleh2);
  }
}

class ContentSixActive extends ManualContentComponent {
  constructor(
      children = [new ContentSixComponent().toReady()],
      titleh2 = 'Шестое занятие',
  ) {
    super(children, titleh2);
  }
}

class ContentSevenActive extends ManualContentComponent {
  constructor(
      children = [new ContentSevenComponent().toReady()],
      titleh2 = 'Седьмое занятие',
  ) {
    super(children, titleh2);
  }
}

class ContentEightActive extends ManualContentComponent {
  constructor(
      children = [new ContentEightComponent().toReady()],
      titleh2 = 'Восьмое занятие',
  ) {
    super(children, titleh2);
  }
}

export class ManualContentComponentFactory {
  constructor() {
    this. list = {
      intro: ContentIntroActive,
      settings: ContentSettingsActive,
      demo: ContentDemoActive,
      one: ContentOneActive,
      two: ContentTwoActive,
      three: ContentThreeActive,
      four: ContentFourActive,
      five: ContentFiveActive,
      six: ContentSixActive,
      seven: ContentSevenActive,
      eight: ContentEightActive,
    };
  }
  toReady(type = 'intro') {
    const ContentClass = this.list[type];
    return new ContentClass().toReady();
  }
}
