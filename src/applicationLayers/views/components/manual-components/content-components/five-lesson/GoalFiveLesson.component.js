/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class GoalFiveLessonComponent extends Component {
  constructor() {
    super('section', {id: 'five-lesson__section-1'}, []);
    this.title = 'Задачи занятия';
    this.text = [
      `1. Изучить две модели работы с возражениями. Первая с уточняющими вопросами и вторая без каких-либо
        вопросов.`,
      `2. Я расскажу о практике работы с двумя моделями одновременно.`,
      `3. Рассмотрим список из 50+ популярных возражений. Пройдем каждое из них. Плюс мастер-класс тренера на
      возражения вне списка от обучаемого.`,
    ];
    this.node = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'site__manual-column-right-subtitle'}, children: [
          {tag: 'h3', props: {class: 'title-h3'}, children: [this.title]},
        ]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[0]]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[1]]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[2]]},
      ],
    };
  }
  toReady() {
    this.node.parent.children = this.node.children;
    return this.node.parent;
  }
  toHTML() {
    return `
    <section class="lesson-5__section-1">
    <div class="site__manual-column-right-subtitle">
      <h3 class="title-h3">
        <span>     
          Задачи занятия
        </span>          
      </h3>
    </div>
    <p class="site__manual-column-right-string">
      <span>
        1. Изучить две модели работы с возражениями. Первая с уточняющими вопросами и вторая без каких-либо
        вопросов.
      </span>
    </p>
    <p class="site__manual-column-right-string">
      <span>
        2. Я расскажу о практике работы с двумя моделями одновременно.
      </span>
    </p>
    <p class="site__manual-column-right-string">
      <span>     
        3. Рассмотрим список из 50+ популярных возражений. Пройдем каждое из них. Плюс мастер-класс тренера на
        возражения вне списка от обучаемого.
      </span>
    </p>
  </section>
    `;
  }
}
