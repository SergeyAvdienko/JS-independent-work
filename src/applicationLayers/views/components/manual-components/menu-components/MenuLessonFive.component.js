/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class MenuLessonFive extends Component {
  constructor() {
    super('li', {class: 'site__manual-column-left-li'}, []);
    this.textSpan = 'Пятое занятие';
    this.node = {
      parent: this.el,
      children: [
        {tag: 'p', props: {class: 'site__manual-column-left-li-string hover', id: 'menuFiveLesson'}, children: [
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
          {tag: 'li', props: {class: 'site__manual-column-left-li-list-item'}, children: ['Навык позитивной реакции']},
          {tag: 'li', props: {class: 'site__manual-column-left-li-list-item'}, children: ['Навык работы с возражениями']},
          {tag: 'li', props: {class: 'site__manual-column-left-li-list-item'}, children: ['Навык определения потребности']},
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
          Пятое занятие
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
            Навык позитивной реакции
          </span>
        </li>
        <li class="site__manual-column-left-li-list-item hover">
          <span>
            Навык работы с возражениями
          </span>
        </li>
        <li class="site__manual-column-left-li-list-item hover">
          <span>
            Навык определения потребности
          </span>
        </li>
      </ul>
    `;
  }
}
