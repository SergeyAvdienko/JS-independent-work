/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class GoalSevenLessonComponent extends Component {
  constructor() {
    super('section', {id: 'seven-lesson__section-1'}, []);
    this.title = 'Задачи занятия';
    this.text = [
      `1. Изучить алгоритм работы с убеждением - "Посыл-подводка-факт-закрепление посыла".`,
      `2. Изучить стратегию работы с сомнениями - "Резонанс-дифференциация-вера".`,
      `3. Рассмотрим несколько практических кейсов для понимания практики использования изученных инструментов.`,
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
    <section class="lesson-7__section-1">
        <div class="site__manual-column-right-subtitle">
          <h3 class="title-h3">
            <span>    
              Задачи занятия
            </span>          
          </h3>
        </div>
        <p class="site__manual-column-right-string">
          <span>
            1. Изучить алгоритм работы с убеждением - "Посыл-подводка-факт-закрепление посыла".
          </span>
        </p>
        <p class="site__manual-column-right-string">
          <span>
            2. Изучить стратегию работы с сомнениями - "Резонанс-дифференциация-вера".
          </span>
        </p>
        <p class="site__manual-column-right-string">
          <span>
            3. Рассмотрим несколько практических кейсов для понимания практики использования изученных инструментов.
          </span>
        </p>
      </section>
    `;
  }
}
