/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class ExpectedResultFourComponent extends Component {
  constructor() {
    super('section', {id: 'four-lesson__section-2'}, []);
    this.title = 'Ожидаемый результат 3-4 занятия';
    this.text = [
      `После третьего и четвертого занятия мы будем отслеживать два изменения. Во-первых, вы должны
        демонстрировать устойчивый навык презентации всего чего угодно в рамках подхода JTBD. Во-вторых,
        вы контролируете время контакта с клиентом (удержание на линии в телефонной коммуникации, удержание в
        переговорной комнате при очном общении).`,
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
    <section class="lesson-4__section-2">
        <div class="site__manual-column-right-subtitle">
          <h3 class="title-h3">
            <span>      
              Ожидаемый результат 3-4 занятия
            </span>          
          </h3>
        </div>
        <p class="site__manual-column-right-string">
          <span>
            После третьего и четвертого занятия мы будем отслеживать два изменения. Во-первых, вы должны
            демонстрировать устойчивый навык презентации всего чего угодно в рамках подхода JTBD. Во-вторых,
            вы контролируете время контакта с клиентом (удержание на линии в телефонной коммуникации, удержание в
            переговорной комнате при очном общении).
          </span>
        </p>
      </section>
    `;
  }
}
