/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class PersuasionSkillComponent extends Component {
  constructor() {
    super('section', {id: 'seven-lesson__section-2'}, []);
    this.title = 'Навык убеждения';
    this.text = [
      `Это умение убеждать/переубеждать собеседника/клиента.`,
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
    <section class="lesson-7__section-2">
    <div class="site__manual-column-right-subtitle">
      <h3 class="title-h3">
        <span>  
          Навык убеждения
        </span>           
      </h3>
    </div>
    <p class="site__manual-column-right-string">
      <span>
        Это умение убеждать/переубеждать собеседника/клиента.
      </span>
    </p>
  </section>
    `;
  }
}
