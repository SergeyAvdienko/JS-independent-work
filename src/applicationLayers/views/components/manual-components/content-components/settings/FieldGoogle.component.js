/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class FieldGoogleComponent extends Component {
  constructor() {
    super('section', {id: 'default-settings__section-3'}, []);
    this.title = 'Доступ к папке внутри вашего Google диска';
    this.text = [
      `Работа над структурированием и передачей информации является моей обязанностью. Вам остается
        указать место, где я буду аккуратно складывать все материалы, которые будут проработаны нами в 
        течении программы. Это видеозаписи встреч в Skype, условия кейсов, обратная связь и т.д.`,
      `Если вы не знаете, как создать папку внутри вашего Google диска, то кликните по кнопке ниже ("Создать
        папку Google диска"). В новой вкладке вашего браузера откроется требуемая инструкция.`,
      `Если вы не знаете, как получить ссылку на папку внутри Google диска и поделиться ей, то кликните по
        кнопке ниже ("Получить ссылку на папку"). В новой вкладке вашего браузера откроется требуемая
        инструкция.`,
    ];
    this.buttonText1 = 'Создать папку Google диска';
    this.buttonText2 = 'Получить ссылку на папку';
    this.node = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'site__manual-column-right-subtitle'}, children: [
          {tag: 'h3', props: {class: 'title-h3'}, children: [this.title]},
        ]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[0]]},
        {tag: 'div', props: {class: 'site__manual-column-right-form-container'}, children: [
          {tag: 'div', props: {class: 'form-container'}, children: [
            {tag: 'div', props: {class: 'form-container__left-column left-column-google-field'}, children: [
              {tag: 'span', props: {}, children: ['Ссылка на папку']},
            ]},
            {tag: 'div', props: {class: 'form-container__right-column google-field'}, children: [
              {tag: 'input', props: {
                type: 'text',
                placeholder: 'Куда вам складывать материал?',
                id: 'inputPathGoogleField',
              }, children: []},
            ]},
            {tag: 'div', props: {class: 'form-container__button form-container-google-field'}, children: [
              {tag: 'div', props: {class: 'form-container__button-default'}, children: []},
            ]},
          ]},
        ]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[1]]},
        {tag: 'div', props: {class: 'site__manual-column-right-button'}, children: [
          {tag: 'button', props: {id: 'buttonLinkCreateFolderInGoogleDesk'}, children: [this.buttonText1]},
        ]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[2]]},
        {tag: 'div', props: {class: 'site__manual-column-right-button'}, children: [
          {tag: 'button', props: {id: 'buttonLinkGetFolderInGoogleDesk'}, children: [this.buttonText2]},
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
    <section name="default-settings__section-3">

      <div class="site__manual-column-right-subtitle">
        <h3 class="title-h3">
          <span>
            Доступ к папке внутри вашего Google диска
          </span>          
        </h3>
      </div>

      <p class="site__manual-column-right-string">
        <span>
          Работа над структурированием и передачей информации является моей обязанностью. Вам остается
          указать место, где я буду аккуратно складывать все материалы, которые будут проработаны нами в 
          течении программы. Это видеозаписи встреч в Skype, условия кейсов, обратная связь и т.д.
        </span>
      </p>

      <div class="site__manual-column-right-form-container">

        <div class="form-container">

          <div class="form-container__left-column">
            <span>
              <span> 
                Ссылка на папку 
              </span>          
            </span>
          </div>

          <div class="form-container__right-column">
            <input type="text" placeholder="Куда мне складывать материал?" id="inputSkypeLogin">
          </div>

        </div>

      </div>

      <p class="site__manual-column-right-string">
        <span>
          Если вы не знаете, как создать папку внутри вашего Google диска, то кликните по кнопке ниже ("Создать
          папку Google диска"). В новой вкладке вашего браузера откроется требуемая инструкция.
        </span>
      </p>

      <div class="site__manual-column-right-button">
        <button id="buttonLinkCreateFolderInGoogleDesk">
          <span>
            Создать папку Google диска
          </span>           
        </button>
      </div>

      <p class="site__manual-column-right-string">
        <span>
          Если вы не знаете, как получить ссылку на папку внутри Google диска и поделиться ей, то кликните по
          кнопке ниже ("Получить ссылку на папку"). В новой вкладке вашего браузера откроется требуемая
          инструкция.
        </span>
      </p>

      <div class="site__manual-column-right-button">
        <button id="buttonLinkGetFolderInGoogleDesk">
          <span>
            Получить ссылку на папку
          </span>           
        </button>
      </div>
      
    </section>
    `;
  }
}
