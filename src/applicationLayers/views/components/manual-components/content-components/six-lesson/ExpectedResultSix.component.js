/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class ExpectedResultSixComponent extends Component {
  constructor() {
    super('section', {id: 'six-lesson__section-2'}, []);
    this.title = 'Ожидаемый результат 5-6 занятия';
    this.text = [
      `После пятого и шестого занятия мы будем отслеживать два изменения. Во-первых, вы должны
        без длительной паузы отвечать на генерируемые клиентом возражения. Во-вторых, количество взятых
        обязательств клиентами должно существенно прирости (конверсия в районе 12-14%).`,
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
      <section class="lesson-6__section-2">
        <div class="site__manual-column-right-subtitle">
          <h3 class="title-h3">
            <span> 
              Ожидаемый результат 5-6 занятия
            </span>          
          </h3>
        </div>
        <p class="site__manual-column-right-string">
          <span>
            После пятого и шестого занятия мы будем отслеживать два изменения. Во-первых, вы должны
            без длительной паузы отвечать на генерируемые клиентом возражения. Во-вторых, количество взятых
            обязательств клиентами должно существенно прирости (конверсия в районе 12-14%).
          </span>
        </p>
      </section>
    `;
  }
}
