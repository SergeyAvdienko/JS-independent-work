/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class MenuDefaultSettings extends Component {
  constructor() {
    super('li', {class: 'site__manual-column-left-li'}, []);
    this.textSpan = 'Базовые настройки';
    this.node = {
      parent: this.el,
      children: [
        {tag: 'p', props: {class: 'site__manual-column-left-li-string hover', id: 'menuDefaultSettings'}, children: [
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
          {tag: 'li', props: {class: 'site__manual-column-left-li-list-item'}, children: ['Вход в приложение. Синхронизация Google-аккаунта']},
          {tag: 'li', props: {class: 'site__manual-column-left-li-list-item'}, children: ['Настройка Skype и уточнение логина']},
          {tag: 'li', props: {class: 'site__manual-column-left-li-list-item'}, children: ['Доступ к папке внутри вашего Google диска']},
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
          Базовые настройки
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
          Вход в приложение. Синхронизация Google-аккаунта
        </span>
      </li>
      <li class="site__manual-column-left-li-list-item hover">
        <span>
          Настройка Skype и уточнение логина
        </span>
      </li>
      <li class="site__manual-column-left-li-list-item hover">
        <span>
          Доступ к папке внутри вашего Google диска
        </span>
      </li>
    </ul>
    `;
  }
}
