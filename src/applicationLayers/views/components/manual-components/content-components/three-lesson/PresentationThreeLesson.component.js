/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class PresentationThreeLessonComponent extends Component {
  constructor() {
    super('section', {id: 'three-lesson__section-2'}, []);
    this.title = 'Навык презентации себя, компании, продукта';
    this.text = [
      `Это умение рассказывать о себе в рамках подхода JTBD. То есть ответить на немой вопрос клиента: "Для
        решения какой задачи я могу нанять тебя?".`,
      `Это умение рассказывать о компании в рамках подхода JTBD. То есть ответить на немой вопрос клиента:
        "Для решения какой задачи я могу нанять твою компанию?".`,
      `Это умение рассказывать о продукте в рамках подхода JTBD. То есть ответить на немой вопрос клиента:
        "Для решения какой задачи я могу нанять твой продукт?".`,
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
    <section class="lesson-3__section-2">
      <div class="site__manual-column-right-subtitle">
        <h3 class="title-h3">
          <span>
            Навык презентации себя, компании, продукта
          </span>         
        </h3>
      </div>
      <p class="site__manual-column-right-string">
        <span>
          Это умение рассказывать о себе в рамках подхода JTBD. То есть ответить на немой вопрос клиента: "Для
          решения какой задачи я могу нанять тебя?".
        </span>
      </p>
      <p class="site__manual-column-right-string">
        <span>
          Это умение рассказывать о компании в рамках подхода JTBD. То есть ответить на немой вопрос клиента:
          "Для решения какой задачи я могу нанять твою компанию?".
        </span>
      </p>
      <p class="site__manual-column-right-string">
        <span>
          Это умение рассказывать о продукте в рамках подхода JTBD. То есть ответить на немой вопрос клиента:
          "Для решения какой задачи я могу нанять твой продукт?".
        </span>
      </p>
    </section>
    `;
  }
}
