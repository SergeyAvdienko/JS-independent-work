/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class SkillsWorkingDoubtsComponent extends Component {
  constructor() {
    super('section', {id: 'seven-lesson__section-3'}, []);
    this.title = 'Навык работы с сомнениями';
    this.text = [
      `Это умение рассказывать собеседнику наглядную историю, которая развеет его сомнения в отношении
        требуемого предмета/поведения/события.`,
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
    <section class="lesson-7__section-3">
        <div class="site__manual-column-right-subtitle">
          <h3 class="title-h3">
            <span>
              Навык работы с сомнениями
            </span>            
          </h3>
        </div>
        <p class="site__manual-column-right-string">
          <span>
            Это умение рассказывать собеседнику наглядную историю, которая развеет его сомнения в отношении
            требуемого предмета/поведения/события.
          </span>
        </p>
      </section>
    `;
  }
}
