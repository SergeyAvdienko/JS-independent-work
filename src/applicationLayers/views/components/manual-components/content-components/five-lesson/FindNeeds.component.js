/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class FindNeedsComponent extends Component {
  constructor() {
    super('section', {id: 'five-lesson__section-4'}, []);
    this.title = 'Навык определения потребности';
    this.text = [
      `Это умение обьяснять какая истинная потребность лежит в основе озвученного клиентом возражения.`,
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
      <section class="lesson-5__section-4">
        <div class="site__manual-column-right-subtitle">
          <h3 class="title-h3">
            <span> 
              Навык определения потребности
            </span>           
          </h3>
        </div>
        <p class="site__manual-column-right-string">
          <span>
            Это умение обьяснять какая истинная потребность лежит в основе озвученного клиентом возражения.
          </span>
        </p>
      </section>
    `;
  }
}
