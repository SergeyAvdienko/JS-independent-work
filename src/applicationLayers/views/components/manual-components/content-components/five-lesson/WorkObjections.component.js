/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class WorkObjectionsComponent extends Component {
  constructor() {
    super('section', {id: 'five-lesson__section-3'}, []);
    this.title = 'Навык работы с возражениями';
    this.text = [
      `Это умение безошибочно определять тип возражения и отвечать на него используя две модели (с вопросами
        и без них).`,
    ];
    this.node = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'site__manual-column-right-subtitle'}, children: [
          {tag: 'h3', props: {class: 'title-h3'}, children: [this.title]},
        ]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[0]]},
      ],
    };
  }
  toReady() {
    this.node.parent.children = this.node.children;
    return this.node.parent;
  }
  toHTML() {
    return `
    <section class="lesson-5__section-3">
      <div class="site__manual-column-right-subtitle">
        <h3 class="title-h3">
          <span>
            Навык работы с возражениями
          </span>         
        </h3>
      </div>
      <p class="site__manual-column-right-string">
        <span>
          Это умение безошибочно определять тип возражения и отвечать на него используя две модели (с вопросами
          и без них).
        </span>
      </p>
    </section>
    `;
  }
}
