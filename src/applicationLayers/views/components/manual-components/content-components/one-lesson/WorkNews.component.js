/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class WorkNewsComponent extends Component {
  constructor() {
    super('section', {id: 'one-lesson__section-3'}, []);
    this.title = 'Навык работы с новостями';
    this.text = [
      `Вы сможете доносить информацию для клиента в любой момент общения. В любом канале коммуникации будь
        это социальные сети или живое общение. Мы будем учиться делать это на
        основе одного из инструментов журналистики "Перевернутая пирамида". Этот навык особенно важен тем, кто
        не знает, как поддерживать беседу нужное количество времени.`,
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
    <section class="lesson-1__section-3">
      <div class="site__manual-column-right-subtitle">
        <h3 class="title-h3">
          <span> 
            Навык работы с новостями
          </span>        
        </h3>
      </div>
      <p class="site__manual-column-right-string">
        <span>
          Вы сможете доносить информацию для клиента в любой момент общения. В любом канале коммуникации будь
          это социальные сети или живое общение. Мы будем учиться делать это на
          основе одного из инструментов журналистики "Перевернутая пирамида". Этот навык особенно важен тем, кто
          не знает, как поддерживать беседу нужное количество времени.
        </span>
      </p>
    </section>
    `;
  }
}
