/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class LoginYHComponent extends Component {
  constructor() {
    super('section', {id: 'default-settings__section-1'}, []);
    this.title = 'Вход в приложение. Синхронизация Google-аккаунта';
    this.text = [
      `Для входа в приложение используйте кнопку "Войти", которая находится в верхнем правом углу страницы.`,
      `Если у вас нет Google-аккаунта и в хотите его создать, то кликните по кнопке ниже ("Создать
        Google-аккаунт"). В новой вкладке вашего браузера откроется требуемая инструкция.`,
    ];
    this.buttonText = 'Создать Google-аккаунт';
    this.node = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'site__manual-column-right-subtitle'}, children: [
          {tag: 'h3', props: {class: 'title-h3'}, children: [this.title]},
        ]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[0]]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[1]]},
        {tag: 'div', props: {class: 'site__manual-column-right-button'}, children: [
          {tag: 'button', props: {id: 'buttonLinkCreateGoogleAccount'}, children: [this.buttonText]},
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
    <section name="default-settings__section-1">

      <div class="site__manual-column-right-subtitle">
        <h3 class="title-h3">
          <span>
            Вход в приложение. Синхронизация Google-аккаунта
          </span>        
        </h3>
      </div>

      <p class="site__manual-column-right-string">
        <span>
          Для входа в приложение используйте кнопку "Войти", которая находится в верхнем правом углу страницы.
        </span>
      </p>

      <p class="site__manual-column-right-string">
        <span>
          Если у вас нет Google-аккаунта и в хотите его создать, то кликните по кнопке ниже ("Создать
          Google-аккаунт"). В новой вкладке вашего браузера откроется требуемая инструкция.
        </span>
      </p>

      <div class="site__manual-column-right-button">
        <button id="buttonLinkCreateGoogleAccount">
          <span>
            Создать Google-аккаунт
          </span>     
        </button>
      </div>

    </section>
    `;
  }
}
