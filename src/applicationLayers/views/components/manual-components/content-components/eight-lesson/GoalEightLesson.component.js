/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class GoalEightLessonComponent extends Component {
  constructor() {
    super('section', {id: 'eight-lesson__section-1'}, []);
    this.title = 'Задачи занятия';
    this.text = [
      `1. Проверить на практике изученные ранее навыки в кейсах.`,
      `2. Разобрать практические задания выданные для самостоятельной отработки.`,
      `3. Отработать навык убеждения и работы с сомнениями в кейсах с тренером. Будет 1-2 кейса с детальным
        разбором и мастер-классом тренера.`,
      `4. Выдать практические задания для закрепления материалов программы и самостоятельного совершенствования
        изученных навыков.`,
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
      <section class="lesson-8__section-1">
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
            3. Отработать навык убеждения и работы с сомнениями в кейсах с тренером. Будет 1-2 кейса с детальным
            разбором и мастер-классом тренера.
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
