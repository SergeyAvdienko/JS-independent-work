/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class MenuIntro extends Component {
  constructor() {
    super('li', {class: 'site__manual-column-left-li', id: 'menuIntro'}, []);
    this.textSpan = 'Введение';
    this.node = {
      parent: this.el,
      children: [
        {tag: 'p', props: {class: 'site__manual-column-left-li-string hover'}, children: [
          {tag: 'span', props: {}, children: [this.textSpan]},
          {tag: 'i', props: {class: 'material-icons'}, children: ['remove']},
        ]},
      ],
    };
    this.nodeActive = {
      parent: this.el,
      children: [
        {tag: 'p', props: {class: 'site__manual-column-left-li-string active'}, children: [
          {tag: 'span', props: {}, children: [this.textSpan]},
          {tag: 'i', props: {class: 'material-icons'}, children: ['expand_more']},
        ]},
        {tag: 'ul', props: {class: 'site__manual-column-left-li-list'}, children: [
          {tag: 'li', props: {class: 'site__manual-column-left-li-list-item'}, children: ['Какую "боль" решает YourHabit?']},
          {tag: 'li', props: {class: 'site__manual-column-left-li-list-item'}, children: ['Что такое YourHabit.ru?']},
          {tag: 'li', props: {class: 'site__manual-column-left-li-list-item'}, children: ['Как начать обучение по программе?']},
          {tag: 'li', props: {class: 'site__manual-column-left-li-list-item'}, children: ['Кто разработчик программы обучения?']},
        ]},
      ],
    };
  }
  toReady() {
    this.node.parent.children = this.node.children;
    return this.node.parent;
  }
  toActive() {
    this.nodeActive.parent.children = this.nodeActive.children;
    return this.nodeActive.parent;
  }
  toHTML() {
    return `
      <p class="site__manual-column-left-li-string hover">
        <span>
          Введение
        </span>
        <i class="material-icons">
          <span>
            expand_more
          </span>
        </i>
      </p>
      <ul class="site__manual-column-left-li-list">
        <li class="site__manual-column-left-li-list-item hover">
          <span>
            Какую "боль" решает YourHabit?
          </span>
        </li>
        <li class="site__manual-column-left-li-list-item hover">
          <span>
            Что такое YourHabit.ru?
          </span>
        </li>
        <li class="site__manual-column-left-li-list-item hover">
          <span>
            Как начать обучение по программе?
          </span>
        </li>
        <li class="site__manual-column-left-li-list-item hover">
          <span>
            Кто разработчик программы обучения?
          </span>
        </li>
      </ul>
    `;
  }
}
