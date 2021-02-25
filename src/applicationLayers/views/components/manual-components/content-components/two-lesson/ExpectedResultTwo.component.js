/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class ExpectedResultTwoComponent extends Component {
  constructor() {
    super('section', {id: 'two-lesson__section-2'}, []);
    this.title = 'Ожидаемый результат 1-2 занятия';
    this.text = [
      `После первого и второго занятия мы должны заметить два изменения. Во-первых, вы должны научиться
        заканчивать любую свою мысль альтернативным вопросом. Во-вторых, количество людей отвечающих вам
        "ни-да-ни-нет" должно стремиться к 0.`,
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
    <section class="lesson-2__section-2">
        <div class="site__manual-column-right-subtitle">
          <h3 class="title-h3">
            <span> 
              Ожидаемый результат 1-2 занятия
            </span>           
          </h3>
        </div>
        <p class="site__manual-column-right-string">
          <span>
            После первого и второго занятия мы должны заметить два изменения. Во-первых, вы должны научиться
            заканчивать любую свою мысль альтернативным вопросом. Во-вторых, количество людей отвечающих вам
            "ни-да-ни-нет" должно стремиться к 0.
          </span>
        </p>
      </section>
    `;
  }
}
