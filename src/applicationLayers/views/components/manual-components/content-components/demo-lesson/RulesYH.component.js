/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class RulesYHComponent extends Component {
  constructor() {
    super('section', {id: 'demo-lesson__section-1'}, []);
    this.title = 'Правило пробного занятия';
    this.text = [
      `Правило пробного занятия - это реализация принципа постоплаты. Вы оплачиваете занятие, уже
        после того, как его прошли. Оплатили пройденное занятие - получите доступ к следующему занятию.`,
      `Вы можете прояснить ситуацию и ответить себе на следующие вопросы: Какие занятия пройдены? Какие были
        оплачены? Есть ли у меня доступные для прохождения занятия? Для этого нажмите на кнопку "Проверить
        статус занятий".`,
    ];
    this.buttonText = 'Проверить статус занятий';
    this.node = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'site__manual-column-right-subtitle'}, children: [
          {tag: 'h3', props: {class: 'title-h3'}, children: [this.title]},
        ]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[0]]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[1]]},
        {tag: 'div', props: {class: 'site__manual-column-right-button'}, children: [
          {tag: 'button', props: {id: 'buttonLinkCreateLearningStatus'}, children: [this.buttonText]},
        ]},
      ],
    };
  }
  toReady() {
    this.node.parent.children = this.node.children;
    return this.node.parent;
  }
  toHTML() {
    return `
      <section name="demo-lesson__section-1">
        <div class="site__manual-column-right-subtitle">
          <h3 class="title-h3">
            <span>    
              Правило пробного занятия
            </span>             
          </h3>
        </div>

        <p class="site__manual-column-right-string">
          <span>
            Правило пробного занятия - это реализация принципа постоплаты. Вы оплачиваете занятие, уже
            после того, как его прошли. Оплатили пройденное занятие - получите доступ к следующему занятию.
          </span>
        </p>

        <p class="site__manual-column-right-string">
          <span>
            Вы можете прояснить ситуацию и ответить себе на следующие вопросы: Какие занятия пройдены? Какие были
            оплачены? Есть ли у меня доступные для прохождения занятия? Для этого нажмите на кнопку "Проверить
            статус занятий".
          </span>
        </p>

        <div class="site__manual-column-right-button">
          <button id="buttonLinkCreateLearningStatus">
            <span>
              Проверить статус занятий
            </span>
          </button>
        </div>

      </section>
    `;
  }
}
