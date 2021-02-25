/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class GoalYHComponent extends Component {
  constructor() {
    super('section', {id: 'intro__section-1'}, []);
    this.title = 'Какую "боль" решает YourHabit.ru?';
    this.text = [
      `Реальность, в которой вы успешно продаете в режиме 24/7 не может появиться сама по себе. 
        Для этого нужно делать одни и те же простые действия, каждый день. Нужно закрепить определенные привычки.`,
      `Закрепление полезных для продавца привычек, вот чем занимается YourHabit.`,
      `Каждое занятие программы включает в себя несколько навыков, которые нужно трансформировать в привычку.
        Подробнее о каждом из них, вы сможете прочитать ниже.`,
    ];
    this.buttonText = 'Сразу к описанию занятий';
    this.node = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'site__manual-column-right-subtitle'}, children: [
          {tag: 'h3', props: {class: 'title-h3'}, children: [this.title]},
        ]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[0]]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [
          {tag: 'b', props: {}, children: [this.text[1]]},
        ]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[2]]},
        {tag: 'div', props: {class: 'site__manual-column-right-button'}, children: [
          {tag: 'button', props: {id: 'buttonLinkLessonBlock'}, children: [this.buttonText]},
        ]},
      ],
    };
  }
  toReady() {
    this.node.parent.children = this.node.children;
    return this.node.parent;
  }
  toHTML() {
    return `
      <section name="intro__section-1" id="intro__section-1">

        <div class="site__manual-column-right-subtitle">
          <h3 class="title-h3">
            <span>
            Какую "боль" решает YourHabit.ru?
            </span>
          </h3>
        </div>

        <p class="site__manual-column-right-string">
          <span>
            Реальность, в которой вы продаете 24/7 не появляется сама по себе. Для этого нужно делать
            одни
            и те же действия, каждый день. Нужно закрепить полезные привычки.
          </span>
        </p>

        <p class="site__manual-column-right-string">
          <b>
            <span>
              Закрепление полезных для продавца привычек, вот чем занимается YourHabit.
            </span>
          </b>
        </p>

        <p class="site__manual-column-right-string">
          <span>
            Каждое занятие программы включает в себя несколько навыков, которые нужно трансформировать в привычку.
            Подробнее о каждом из них, вы сможете прочитать ниже.
          </span>
        </p>

        <div class="site__manual-column-right-button">
          <button id="buttonLinkLessonBlock">
            <span>
              Сразу к описанию занятий
            </span>
          </button>
        </div>

      </section>
    `;
  }
}
