/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class SkypeYHComponent extends Component {
  constructor() {
    super('section', {id: 'default-settings__section-2'}, []);
    this.title = 'Настройка Skype и уточнение логина';
    this.text = [
      `Ваш аккаукт в Skype, нужен для того чтобы я мог позвонить вам в нужное время. Все занятия будут
        проходить в онлайн режиме.`,
      `Если вы не знаете, что такое Skype или он не установлен на вашем устройстве, то кликните по кнопке
        ниже ("Установить и настроить Skype"). В новой вкладке вашего браузера откроется требуемая инструкция.`,
    ];
    this.buttonText = 'Установить и настроить Skype';
    this.node = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'site__manual-column-right-subtitle'}, children: [
          {tag: 'h3', props: {class: 'title-h3'}, children: [this.title]},
        ]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[0]]},
        {tag: 'div', props: {class: 'site__manual-column-right-form-container'}, children: [
          {tag: 'div', props: {class: 'form-container'}, children: [
            {tag: 'div', props: {class: 'form-container__left-column left-column-skype'}, children: [
              {tag: 'span', props: {}, children: ['Логин в Skype']},
            ]},
            {tag: 'div', props: {class: 'form-container__right-column skype'}, children: [
              {tag: 'input', props: {
                type: 'text',
                placeholder: 'Как вас найти в Skype?',
                id: 'inputSkypeLogin',
              }, children: []},
            ]},
            {tag: 'div', props: {class: 'form-container__button form-container-skype'}, children: [
              {tag: 'div', props: {class: 'form-container__button-default'}, children: []},
            ]},
          ]},
        ]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[1]]},
        {tag: 'div', props: {class: 'site__manual-column-right-button'}, children: [
          {tag: 'button', props: {id: 'buttonLinkSkypeSettings'}, children: [this.buttonText]},
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
    <section name="default-settings__section-2">

        <div class="site__manual-column-right-subtitle">
          <h3 class="title-h3">
            <span>
              Настройка Skype и уточнение логина
            </span>         
          </h3>
        </div>

        <p class="site__manual-column-right-string">
          <span>
            Ваш аккаукт в Skype, нужен для того чтобы я мог позвонить вам в нужное время. Все занятия будут
            проходить в онлайн режиме.
          </span>
        </p>

        <div class="site__manual-column-right-form-container">

          <div class="form-container">

            <div class="form-container__left-column">
              <span> 
                <span>    
                  Логин в Skype 
                </span>                
              </span>
            </div>

            <div class="form-container__right-column">
              <input type="text" placeholder="Как вас найти в Skype?" id="inputSkypeLogin">
            </div>

          </div>

        </div>

        <p class="site__manual-column-right-string">
          <span>
            Если вы не знаете, что такое Skype или он не установлен на вашем устройстве, то кликните по кнопке
            ниже ("Установить и настроить Skype"). В новой вкладке вашего браузера откроется требуемая инструкция.
          </span>
        </p>

        <div class="site__manual-column-right-button">

          <button id="buttonLinkSkypeSettings">
            <span>
              Установить и настроить Skype
            </span>        
          </button>

        </div>
      </section>
    `;
  }
}
