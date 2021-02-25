/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class StartLearningComponent extends Component {
  constructor() {
    super('section', {id: 'intro__section-3'}, []);
    this.title = 'Как начать обучение по программе?';
    this.text = [
      `Начните с базовых настроек. Это два простых пунтка. Сначала нужно войти в приложение используя свой
        Google-аккаунт. А потом заполнить две строки в форме: ваш аккаукт в Skype, чтобы я мог позвонить вам в
        нужное время и ссылку на папку вашего Google диска. В папку я буду складывть все материалы
        (видеозаписи наших занятий, описание практических заданий, обратную связь и т.д.).`,
    ];
    this.buttonText = 'К базовым настройкам';
    this.node = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'site__manual-column-right-subtitle'}, children: [
          {tag: 'h3', props: {class: 'title-h3'}, children: [this.title]},
        ]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[0]]},
        {tag: 'div', props: {class: 'site__manual-column-right-button'}, children: [
          {tag: 'button', props: {id: 'buttonLinkDefaultSettings'}, children: [this.buttonText]},
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
      <section name="intro__section-3" id="intro__section-3">

        <div class="site__manual-column-right-subtitle">
          <h3 class="title-h3">
            <span>
              Как начать обучение по программе?
            </span>        
          </h3>
        </div>

        <p class="site__manual-column-right-string">
          <span>
            Начните с базовых настроек. Это два простых пунтка. Сначала нужно войти в приложение используя свой
            Google-аккаунт. А потом заполнить две строки в форме: ваш аккаукт в Skype, чтобы я мог позвонить вам в
            нужное время и ссылку на папку вашего Google диска. В папку я буду складывть все материалы
            (видеозаписи наших занятий, описание практических заданий, обратную связь и т.д.).
          </span>
        </p>

        <div class="site__manual-column-right-button">
          <button id="buttonLinkDefaultSettings">
            <span>  
              К базовым настройкам
            </span>    
          </button>
        </div>

      </section>
    `;
  }
}
