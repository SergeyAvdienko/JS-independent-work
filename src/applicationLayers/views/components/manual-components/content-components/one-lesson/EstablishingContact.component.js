/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class EstablishingContactComponent extends Component {
  constructor() {
    super('section', {id: 'one-lesson__section-4'}, []);
    this.title = 'Навык установления контакта';
    this.text = [
      `Мы научимся начинать беседу с вопросов, которые будут заставлять человека вспомнить что-то. И будем
        делать все, чтобы на этом этапе вы перестали задавать клиенту вопросы, которые заставляют его думать.
        Это тот ключ, который позволит вам сделать разговор живым и интересным для всех его участников.`,
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
      <section class="lesson-1__section-4">
        <div class="site__manual-column-right-subtitle">
          <h3 class="title-h3">
            <span>
              Навык установления контакта
            </span>       
          </h3>
        </div>
        <p class="site__manual-column-right-string">
          <span>
            Мы научимся начинать беседу с вопросов, которые будут заставлять человека вспомнить что-то. И будем
            делать все, чтобы на этом этапе вы перестали задавать клиенту вопросы, которые заставляют его думать.
            Это тот ключ, который позволит вам сделать разговор живым и интересным для всех его участников.
          </span>
        </p>
      </section>
    `;
  }
}
