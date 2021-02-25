/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class GoalOneLessonComponent extends Component {
  constructor() {
    super('section', {id: 'one-lesson__section-1'}, []);
    this.title = 'Задачи занятия';
    this.text = [
      `1. Разобраться с понятием этапы продаж. Я покажу поведенческие индикаторы, которые говорят о том, что
        пора заканчивать один этап и переходить к другому. То есть вы будете действовать не интуитивно, а используя
        понятные проявления поведения собеседника.`,
      `2. Разобрать понятие цель продаж. Мы будем исходить из того, что прямой вопрос клиенту, - "Вы будете
        покупать или нет?" является работающей практикой, для крайне примитивного товара. Если ваш
        продукт/услуга примитивен, то все ок. А если нет? Тут нужен sales-процесс. Разработаем его вместе.`,
      `3. Я расскажу о том, как правильно входить в разговор с человеком и устанавливать контакт. Покажу
        все необходимые инструменты, для профессиональной работы с этапом "Установление контакта".`,
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
      ],
    };
  }
  toReady() {
    this.node.parent.children = this.node.children;
    return this.node.parent;
  }
  toHTML() {
    return `
      <section class="lesson-1__section-1">

        <div class="site__manual-column-right-subtitle">
          <h3 class="title-h3">
            <span>    
              Задачи занятия
            </span>           
          </h3>
        </div>

        <p class="site__manual-column-right-string">
          <span>
            1. Разобраться с понятием этапы продаж. Я покажу поведенческие индикаторы, которые говорят о том, что
            пора
            заканчивать один этап и переходить к другому. То есть вы будете действовать не интуитивно, а используя
            понятные проявления поведения собеседника.
          </span>
        </p>

        <p class="site__manual-column-right-string">
          <span>
            2. Разобрать понятие цель продаж. Мы будем исходить из того, что прямой вопрос клиенту, - "Вы будете
            покупать или нет?" является работающей практикой, для крайне примитивного товара. Если ваш
            продукт/услуга примитивен, то все ок. А если нет? Тут нужен sales-процесс. Разработаем его вместе.
          </span>
        </p>

        <p class="site__manual-column-right-string">
          <span>
            3. Я расскажу о том, как правильно входить в разговор с человеком и устанавливать контакт. Покажу
            все необходимые инструменты, для профессиональной работы с этапом "Установление контакта".
          </span>
        </p>
      </section>
    `;
  }
}
