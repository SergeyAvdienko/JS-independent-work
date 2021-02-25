/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class GoalThreeLessonComponent extends Component {
  constructor() {
    super('section', {id: 'three-lesson__section-1'}, []);
    this.title = 'Задачи занятия';
    this.text = [
      `1. Познакомимся с подходом JTBD ("Работа, которая должна быть сделана").`,
      `2. Я расскажу о трех самых важных вопросах, которые клиент задает сам себе при общении с вами.`,
      `3. Изучим цифры и результаты исследований, которые расскажут нам о том, как человек принимает решение.
        Я объясню почему важно готовить человека к защите принятого решения.`,
      `4. Рассмотрим несколько кейсов, где будет отчетливо видно слабое место всех продаж. Зная это место 
        вы сможете понять механизм возникновения "сарафанного радио".`,
    ];
    this.node = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'site__manual-column-right-subtitle'}, children: [
          {tag: 'h3', props: {class: 'title-h3'}, children: [this.title]},
        ]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[0]]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[1]]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[2]]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[3]]},
      ],
    };
  }
  toReady() {
    this.node.parent.children = this.node.children;
    return this.node.parent;
  }
  toHTML() {
    return `
      <section class="lesson-3__section-1">
        <div class="site__manual-column-right-subtitle">
          <h3 class="title-h3">
            <span>    
              Задачи занятия
            </span>         
          </h3>
        </div>
        <p class="site__manual-column-right-string">
          <span>
            1. Познакомимся с подходом JTBD ("Работа, которая должна быть сделана").
          </span>
        </p>
        <p class="site__manual-column-right-string">
          <span>
            2. Я расскажу о трех самых важных вопросах, которые клиент задает сам себе при встрече с вами.
          </span>
        </p>
        <p class="site__manual-column-right-string">
          <span>
            3. Изучим цифры и результаты исследований, которые расскажут нам о том, как человек принимает решение.
            Я объясню почему важно готовить человека к защите принятого решения.
          </span>
        </p>
        <p class="site__manual-column-right-string">
          <span>
            4. Рассмотрим несколько кейсов, где
            будет отчетливо видно слабое место всех продаж. Зная это место вы сможете понять механизм
            возникновения "сарафанного радио".
          </span>
        </p>
      </section>
    `;
  }
}
