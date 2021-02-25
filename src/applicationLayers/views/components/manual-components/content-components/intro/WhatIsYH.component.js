/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class WhatIsYHComponent extends Component {
  constructor() {
    super('section', {id: 'intro__section-2'}, []);
    this.title = 'Что такое YourHabit.ru?';
    this.text = [
      `Это web-приложение, которое показывает текущее состояние вашего процесса обучения в реальном времени. `,
      `Всё то, что вы видите
        на экране своего устройства, после входа в приложение, является самой свежей, самой полной и самой
        правдивой информацией. Информацией о расписании тренера, ваших записях, домашних заданиях,
        практических мастер-классах и т.д.`,
      `Если вам интересно, как устроен YourHabit с точки зрения архитектуры web-приложения, программного кода
        и прочего, то можете изучить техническую документацию и репозиторий проекта на GitHub.`,
    ];
    this.buttonText = 'К технической документации';
    this.node = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'site__manual-column-right-subtitle'}, children: [
          {tag: 'h3', props: {class: 'title-h3'}, children: [this.title]},
        ]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [
          {tag: 'b', props: {}, children: [this.text[0]]},
          {tag: 'span', props: {}, children: [this.text[1]]},
        ]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[2]]},
        {tag: 'div', props: {class: 'site__manual-column-right-button'}, children: [
          {tag: 'button', props: {id: 'buttonLinkDocs'}, children: [this.buttonText]},
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
    <section name="intro__section-2" id="intro__section-2">

      <div class="site__manual-column-right-subtitle">
        <h3 class="title-h3">
          <span>
            Что такое YourHabit.ru?
          </span>              
        </h3>
      </div>

      <p class="site__manual-column-right-string">
        <span>
          Это 
          <b>
            <span>
              Web-приложение, которое показывает текущее состояние вашего процесса обучения в реальном времени
            </span>
          </b>. 
          Всё то, что вы видите
          на экране своего устройства, после входа в приложение, является самой свежей, самой полной и самой
          правдивой информацией. Информацией о расписании тренера, ваших записях, домашних заданиях,
          практических мастер-классах и т.д.
        </span>
      </p>

      <p class="site__manual-column-right-string">
        <span>
          Если вам интересно, как устроен YourHabit с точки зрения архитектуры web-приложения, программного кода
          и прочего, то можете изучить техническую документацию и репозиторий проекта на GitHub.
        </span> 
      </p>

      <div class="site__manual-column-right-button">
        <button id="buttonLinkDocs">
          <span>  
            К технической документации
          </span>
        </button>
      </div>

    </section>
    `;
  }
}
