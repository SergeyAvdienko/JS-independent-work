/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class ExpectedResultEightComponent extends Component {
  constructor() {
    super('section', {id: 'eight-lesson__section-2'}, []);
    this.title = 'Ожидаемый результат 7-8 занятия';
    this.text = [
      `После седьмого и восьмого занятия мы будем отслеживать два изменения. Во-первых, вы способны
        сформировать точку зрения на вопрос/предмет/ситуацию у собеседника. Во-вторых, прирост количества 
        испольненных обязательств клиентами.`,
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
    <section class="lesson-8__section-2">
        <div class="site__manual-column-right-subtitle">
          <h3 class="title-h3">
            <span>  
              Ожидаемый результат 7-8 занятия
            </span>         
          </h3>
        </div>
        <p class="site__manual-column-right-string">
          <span>
            После седьмого и восьмого занятия мы будем отслеживать два изменения. Во-первых, вы способны
            сформировать точку зрения на вопрос/предмет/ситуацию у собеседника.
            Во-вторых, прирост количества испольненных обязательств клиентами.
          </span>
        </p>
      </section>
    `;
  }
}
