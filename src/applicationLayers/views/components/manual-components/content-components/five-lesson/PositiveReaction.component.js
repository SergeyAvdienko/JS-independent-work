/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class PositiveReactionComponent extends Component {
  constructor() {
    super('section', {id: 'five-lesson__section-2'}, []);
    this.title = 'Навык позитивной реакции';
    this.text = [
      `Это умение отвечать "Круто! Теперь я знаю, что вам предложить ....", даже если вы попали в самую
        безнадежную ситуацию.`,
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
      <section class="lesson-5__section-2">
        <div class="site__manual-column-right-subtitle">
          <h3 class="title-h3">
            <span>
              Навык позитивной реакции
            </span>        
          </h3>
        </div>
        <p class="site__manual-column-right-string">
          <span>
            Это умение отвечать "Круто! Теперь я знаю, что вам предложить ....", даже если вы попали в самую
            безнадежную ситуацию.
          </span>
        </p>
      </section>
    `;
  }
}
