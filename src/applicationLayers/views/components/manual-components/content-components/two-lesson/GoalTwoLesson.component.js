/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class GoalTwoLessonComponent extends Component {
  constructor() {
    super('section', {id: 'two-lesson__section-1'}, []);
    this.title = 'Задачи занятия';
    this.text = [
      `1. Проверить на практике изученные ранее навыки в кейсах.`,
      `2. Разобрать практические задания выданные для самостоятельной отработки.`,
      `3. Проверить устойчивость поведенческого индикатора - "Способен заканчивать любую свою мысль
        альтернативным вопросом на встрече с клиентом".`,
      `4. Выдать практические задания для проверки результатов обучения.`,
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
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[3]]},
      ],
    };
  }
  toReady() {
    this.node.parent.children = this.node.children;
    return this.node.parent;
  }
  toHTML() {
    return `
    <section class="lesson-2__section-1">
        <div class="site__manual-column-right-subtitle">
          <h3 class="title-h3">
            <span>
              Задачи занятия
            </span>           
          </h3>
        </div>
        <p class="site__manual-column-right-string">
          <span>
            1. Проверить на практике изученные ранее навыки в кейсах.
          </span>
        </p>
        <p class="site__manual-column-right-string">
          <span>
            2. Разобрать практические задания выданные для самостоятельной отработки.
          </span>
        </p>
        <p class="site__manual-column-right-string">
          <span>
            3. Проверить устойчивость поведенческого индикатора - "Способен заканчивать любую свою мысль
            альтернативным вопросом на встрече с клиентом".
          </span>
        </p>
        <p class="site__manual-column-right-string">
          <span>
            4. Выдать практические задания для проверки результатов обучения.
          </span>
        </p>
      </section>
    `;
  }
}
