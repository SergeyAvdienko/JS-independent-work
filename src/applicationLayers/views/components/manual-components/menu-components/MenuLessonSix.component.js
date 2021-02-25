/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class MenuLessonSix extends Component {
  constructor() {
    super('li', {class: 'site__manual-column-left-li'}, []);
    this.textSpan = 'Шестое занятие';
    this.node = {
      parent: this.el,
      children: [
        {tag: 'p', props: {class: 'site__manual-column-left-li-string hover', id: 'menuSixLesson'}, children: [
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
          {tag: 'li', props: {class: 'site__manual-column-left-li-list-item'}, children: ['Задачи занятия']},
          {tag: 'li', props: {class: 'site__manual-column-left-li-list-item'}, children: ['Ожидаемый результат 5-6 занятия']},
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
          Шестое занятие
        </span>
        <i class="material-icons">
          <span>
            remove
          </span>
        </i>
      </p>
      <ul class="site__manual-column-left-li-list">
        <li class="site__manual-column-left-li-list-item hover">
          <span>
            Задачи занятия
          </span>
        </li>
        <li class="site__manual-column-left-li-list-item hover">
          <span>
            Ожидаемый результат 5-6 занятия
          </span>
        </li>
      </ul>
    `;
  }
}
