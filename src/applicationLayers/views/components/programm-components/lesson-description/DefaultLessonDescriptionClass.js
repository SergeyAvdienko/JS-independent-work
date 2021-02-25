/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class DefaultClass extends Component {
  constructor(options, lessonClass) {
    super('div', {class: options.class}, []);
    this.number = options.number;
    this.goals = options.goals;
    this.skills = options.skills;
    this.titleSecond = options.titleSecond || 'Тренируемые навыки';
    this.lessonClass = lessonClass;
    // buttonCloseLessonContainer
    // buttonNextLessonContainer

    // buttonScrollToUp
    // Войдите на сайт
    // Войти
    this.nodeErrorLogin = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'content__block-lesson-container-header'}, children: [
          {tag: 'div', props: {class: 'content__block-lesson-header-left'}, children: [
            {tag: 'div', props: {class: 'content__block-lesson-header-left-first'}, children: [
              {tag: 'div', props: {class: `content__block-lesson-header-left-second ${this.lessonClass}`}, children: [
                {tag: 'span', props: {class: 'number'}, children: [this.number]},
              ]},
            ]},
          ]},
          {tag: 'div', props: {class: 'content__block-lesson-header-right'}, children: [
            {tag: 'span', props: {class: 'content__block-lesson-header-right-first-button'}, children: [
              {tag: 'i', props: {class: 'material-icons', id: 'buttonCloseLessonContainer'}, children: ['home']},
            ]},
            {tag: 'span', props: {class: 'content__block-lesson-header-right-second-button'}, children: [
              {tag: 'i', props: {class: 'material-icons', id: 'buttonNextLessonContainer'}, children: ['arrow_forward']},
            ]},
          ]},
        ]},
        {tag: 'div', props: {class: 'content__block-lesson-container-body'}, children: [
          {tag: 'p', props: {class: 'content__block-lesson-container-body-alert error'}, children: [
            {tag: 'span', props: {class: 'content__block-lesson-container-body-alert-span-left'}, children: [
              'Войдите чтобы продолжить',
            ]},
            {tag: 'span', props: {class: 'content__block-lesson-container-body-alert-span-right error', id: 'buttonLoginDouble'}, children: [
              'Войти',
            ]},
          ]},
        ]},
        {tag: 'div', props: {class: 'content__block-lesson-container-footer'}, children: [
          {tag: 'p', props: {class: 'content__block-lesson-container-footer-h5-first'}, children: ['Задачи занятия']},
          {tag: 'ol', props: {class: 'content__block-lesson-container-footer-ol'}, children: this.goals},
          {tag: 'p', props: {class: 'content__block-lesson-container-footer-h5-second'}, children: [this.titleSecond]},
          {tag: 'ol', props: {class: 'content__block-lesson-container-footer-ol'}, children: this.skills},
        ]},
      ],
    };
    // buttonLinkToDefaultSettings
    // Завершите настройки
    // Настроить
    this.nodeErrorSettings = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'content__block-lesson-container-header'}, children: [
          {tag: 'div', props: {class: 'content__block-lesson-header-left'}, children: [
            {tag: 'div', props: {class: 'content__block-lesson-header-left-first'}, children: [
              {tag: 'div', props: {class: `content__block-lesson-header-left-second ${this.lessonClass}`}, children: [
                {tag: 'span', props: {class: 'number'}, children: [this.number]},
              ]},
            ]},
          ]},
          {tag: 'div', props: {class: 'content__block-lesson-header-right'}, children: [
            {tag: 'span', props: {class: 'content__block-lesson-header-right-first-button'}, children: [
              {tag: 'i', props: {class: 'material-icons', id: 'buttonCloseLessonContainer'}, children: ['home']},
            ]},
            {tag: 'span', props: {class: 'content__block-lesson-header-right-second-button'}, children: [
              {tag: 'i', props: {class: 'material-icons', id: 'buttonNextLessonContainer'}, children: ['arrow_forward']},
            ]},
          ]},
        ]},
        {tag: 'div', props: {class: 'content__block-lesson-container-body'}, children: [
          {tag: 'p', props: {class: 'content__block-lesson-container-body-alert error'}, children: [
            {tag: 'span', props: {class: 'content__block-lesson-container-body-alert-span-left'}, children: [
              'Завершите настройки',
            ]},
            {tag: 'span', props: {class: 'content__block-lesson-container-body-alert-span-right error', id: 'buttonLinkToDefaultSettings'}, children: [
              'Настроить',
            ]},
          ]},
        ]},
        {tag: 'div', props: {class: 'content__block-lesson-container-footer'}, children: [
          {tag: 'p', props: {class: 'content__block-lesson-container-footer-h5-first'}, children: ['Задачи занятия']},
          {tag: 'ol', props: {class: 'content__block-lesson-container-footer-ol'}, children: this.goals},
          {tag: 'p', props: {class: 'content__block-lesson-container-footer-h5-second'}, children: [this.titleSecond]},
          {tag: 'ol', props: {class: 'content__block-lesson-container-footer-ol'}, children: this.skills},
        ]},
      ],
    };
    // buttonLinkToPayForm
    // Требуется оплата
    // Купить
    this.nodeErrorPay = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'content__block-lesson-container-header'}, children: [
          {tag: 'div', props: {class: 'content__block-lesson-header-left'}, children: [
            {tag: 'div', props: {class: 'content__block-lesson-header-left-first'}, children: [
              {tag: 'div', props: {class: `content__block-lesson-header-left-second ${this.lessonClass}`}, children: [
                {tag: 'span', props: {class: 'number'}, children: [this.number]},
              ]},
            ]},
          ]},
          {tag: 'div', props: {class: 'content__block-lesson-header-right'}, children: [
            {tag: 'span', props: {class: 'content__block-lesson-header-right-first-button'}, children: [
              {tag: 'i', props: {class: 'material-icons', id: 'buttonCloseLessonContainer'}, children: ['home']},
            ]},
            {tag: 'span', props: {class: 'content__block-lesson-header-right-second-button'}, children: [
              {tag: 'i', props: {class: 'material-icons', id: 'buttonNextLessonContainer'}, children: ['arrow_forward']},
            ]},
          ]},
        ]},
        {tag: 'div', props: {class: 'content__block-lesson-container-body'}, children: [
          {tag: 'p', props: {class: 'content__block-lesson-container-body-alert error'}, children: [
            {tag: 'span', props: {class: 'content__block-lesson-container-body-alert-span-left'}, children: [
              'Оплатите занятие',
            ]},
            {tag: 'span', props: {class: 'content__block-lesson-container-body-alert-span-right error', id: 'buttonLinkToPayForm'}, children: [
              'Оплатить',
            ]},
          ]},
        ]},
        {tag: 'div', props: {class: 'content__block-lesson-container-footer'}, children: [
          {tag: 'p', props: {class: 'content__block-lesson-container-footer-h5-first'}, children: ['Задачи занятия']},
          {tag: 'ol', props: {class: 'content__block-lesson-container-footer-ol'}, children: this.goals},
          {tag: 'p', props: {class: 'content__block-lesson-container-footer-h5-second'}, children: [this.titleSecond]},
          {tag: 'ol', props: {class: 'content__block-lesson-container-footer-ol'}, children: this.skills},
        ]},
      ],
    };
    // buttonCancelThisLesson
    // Вы записаны на 12.03.20201
    // Отменить
    this.nodeWarning = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'content__block-lesson-container-header'}, children: [
          {tag: 'div', props: {class: 'content__block-lesson-header-left'}, children: [
            {tag: 'div', props: {class: 'content__block-lesson-header-left-first'}, children: [
              {tag: 'div', props: {class: `content__block-lesson-header-left-second ${this.lessonClass}`}, children: [
                {tag: 'span', props: {class: 'number'}, children: [this.number]},
              ]},
            ]},
          ]},
          {tag: 'div', props: {class: 'content__block-lesson-header-right'}, children: [
            {tag: 'span', props: {class: 'content__block-lesson-header-right-first-button'}, children: [
              {tag: 'i', props: {class: 'material-icons', id: 'buttonCloseLessonContainer'}, children: ['home']},
            ]},
            {tag: 'span', props: {class: 'content__block-lesson-header-right-second-button'}, children: [
              {tag: 'i', props: {class: 'material-icons', id: 'buttonNextLessonContainer'}, children: ['arrow_forward']},
            ]},
          ]},
        ]},
        {tag: 'div', props: {class: 'content__block-lesson-container-body'}, children: [
          {tag: 'p', props: {class: 'content__block-lesson-container-body-alert warning'}, children: [
            {tag: 'span', props: {class: 'content__block-lesson-container-body-alert-span-left'}, children: [
              'Вы записаны на 12.03.20201',
            ]},
            {tag: 'span', props: {class: 'content__block-lesson-container-body-alert-span-right warning', id: 'buttonCancelThisLesson'}, children: [
              'Отменить',
            ]},
          ]},
        ]},
        {tag: 'div', props: {class: 'content__block-lesson-container-footer'}, children: [
          {tag: 'p', props: {class: 'content__block-lesson-container-footer-h5-first'}, children: ['Задачи занятия']},
          {tag: 'ol', props: {class: 'content__block-lesson-container-footer-ol'}, children: this.goals},
          {tag: 'p', props: {class: 'content__block-lesson-container-footer-h5-second'}, children: [this.titleSecond]},
          {tag: 'ol', props: {class: 'content__block-lesson-container-footer-ol'}, children: this.skills},
        ]},
      ],
    };
    // buttonSignUpForThisLesson
    // Запишитесь на занятие
    // Записаться
    this.nodeSuccess = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'content__block-lesson-container-header'}, children: [
          {tag: 'div', props: {class: 'content__block-lesson-header-left'}, children: [
            {tag: 'div', props: {class: 'content__block-lesson-header-left-first'}, children: [
              {tag: 'div', props: {class: `content__block-lesson-header-left-second ${this.lessonClass}`}, children: [
                {tag: 'span', props: {class: 'number'}, children: [this.number]},
              ]},
            ]},
          ]},
          {tag: 'div', props: {class: 'content__block-lesson-header-right'}, children: [
            {tag: 'span', props: {class: 'content__block-lesson-header-right-first-button'}, children: [
              {tag: 'i', props: {class: 'material-icons', id: 'buttonCloseLessonContainer'}, children: ['home']},
            ]},
            {tag: 'span', props: {class: 'content__block-lesson-header-right-second-button'}, children: [
              {tag: 'i', props: {class: 'material-icons', id: 'buttonNextLessonContainer'}, children: ['arrow_forward']},
            ]},
          ]},
        ]},
        {tag: 'div', props: {class: 'content__block-lesson-container-body'}, children: [
          {tag: 'p', props: {class: 'content__block-lesson-container-body-alert success'}, children: [
            {tag: 'span', props: {class: 'content__block-lesson-container-body-alert-span-left'}, children: [
              'Запишитесь на занятие',
            ]},
            {tag: 'span', props: {class: 'content__block-lesson-container-body-alert-span-right success', id: 'buttonSignUpForThisLesson'}, children: [
              'Записаться',
            ]},
          ]},
        ]},
        {tag: 'div', props: {class: 'content__block-lesson-container-footer'}, children: [
          {tag: 'p', props: {class: 'content__block-lesson-container-footer-h5-first'}, children: ['Задачи занятия']},
          {tag: 'ol', props: {class: 'content__block-lesson-container-footer-ol'}, children: this.goals},
          {tag: 'p', props: {class: 'content__block-lesson-container-footer-h5-second'}, children: [this.titleSecond]},
          {tag: 'ol', props: {class: 'content__block-lesson-container-footer-ol'}, children: this.skills},
        ]},
      ],
    };
    // buttonThisLastLesson
    // Прошедшее занятие
    // Выйти
    this.nodeSuccessLast = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'content__block-lesson-container-header'}, children: [
          {tag: 'div', props: {class: 'content__block-lesson-header-left'}, children: [
            {tag: 'div', props: {class: 'content__block-lesson-header-left-first'}, children: [
              {tag: 'div', props: {class: `content__block-lesson-header-left-second ${this.lessonClass}`}, children: [
                {tag: 'span', props: {class: 'number'}, children: [this.number]},
              ]},
            ]},
          ]},
          {tag: 'div', props: {class: 'content__block-lesson-header-right'}, children: [
            {tag: 'span', props: {class: 'content__block-lesson-header-right-first-button'}, children: [
              {tag: 'i', props: {class: 'material-icons', id: 'buttonCloseLessonContainer'}, children: ['home']},
            ]},
            {tag: 'span', props: {class: 'content__block-lesson-header-right-second-button'}, children: [
              {tag: 'i', props: {class: 'material-icons', id: 'buttonNextLessonContainer'}, children: ['arrow_forward']},
            ]},
          ]},
        ]},
        {tag: 'div', props: {class: 'content__block-lesson-container-body'}, children: [
          {tag: 'p', props: {class: 'content__block-lesson-container-body-alert success'}, children: [
            {tag: 'span', props: {class: 'content__block-lesson-container-body-alert-span-left'}, children: [
              'Прошедшее занятие',
            ]},
            {tag: 'span', props: {class: 'content__block-lesson-container-body-alert-span-right success', id: 'buttonThisLastLesson'}, children: [
              'Выйти',
            ]},
          ]},
        ]},
        {tag: 'div', props: {class: 'content__block-lesson-container-footer'}, children: [
          {tag: 'p', props: {class: 'content__block-lesson-container-footer-h5-first'}, children: ['Задачи занятия']},
          {tag: 'ol', props: {class: 'content__block-lesson-container-footer-ol'}, children: this.goals},
          {tag: 'p', props: {class: 'content__block-lesson-container-footer-h5-second'}, children: [this.titleSecond]},
          {tag: 'ol', props: {class: 'content__block-lesson-container-footer-ol'}, children: this.skills},
        ]},
      ],
    };
    this.nodeDefault = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'content__block-lesson-container-header'}, children: [
          {tag: 'div', props: {class: 'content__block-lesson-header-left'}, children: [
            {tag: 'div', props: {class: 'content__block-lesson-header-left-first circle'}, children: [
              {tag: 'div', props: {class: `content__block-lesson-header-left-second ${this.lessonClass}`}, children: [
                {tag: 'span', props: {class: 'number'}, children: [this.number]},
              ]},
            ]},
          ]},
          {tag: 'div', props: {class: 'content__block-lesson-header-right'}, children: [
            {tag: 'span', props: {class: 'content__block-lesson-header-right-first-button'}, children: [
              {tag: 'i', props: {class: 'material-icons', id: 'buttonCloseLessonContainer'}, children: ['home']},
            ]},
            {tag: 'span', props: {class: 'content__block-lesson-header-right-second-button'}, children: [
              {tag: 'i', props: {class: 'material-icons', id: 'buttonNextLessonContainer'}, children: ['arrow_forward']},
            ]},
          ]},
        ]},
        {tag: 'div', props: {class: 'content__block-lesson-container-body'}, children: [
          {tag: 'p', props: {class: 'content__block-lesson-container-body-alert default'}, children: [
            {tag: 'span', props: {class: 'content__block-lesson-container-body-alert-span-left'}, children: [
              'Идет запрос информации',
            ]},
            {tag: 'span', props: {class: 'content__block-lesson-container-body-alert-span-right default'}, children: [
              '.....',
            ]},
          ]},
        ]},
        {tag: 'div', props: {class: 'content__block-lesson-container-footer'}, children: [
          {tag: 'p', props: {class: 'content__block-lesson-container-footer-h5-first'}, children: ['Задачи занятия']},
          {tag: 'ol', props: {class: 'content__block-lesson-container-footer-ol'}, children: this.goals},
          {tag: 'p', props: {class: 'content__block-lesson-container-footer-h5-second'}, children: [this.titleSecond]},
          {tag: 'ol', props: {class: 'content__block-lesson-container-footer-ol'}, children: this.skills},
        ]},
      ],
    };
  }
  toErrorLogin() {
    this.nodeErrorLogin.parent.children = this.nodeErrorLogin.children;
    return this.nodeErrorLogin.parent;
  }
  toErrorSettings() {
    this.nodeErrorSettings.parent.children = this.nodeErrorSettings.children;
    return this.nodeErrorSettings.parent;
  }
  toErrorPay() {
    this.nodeErrorPay.parent.children = this.nodeErrorPay.children;
    return this.nodeErrorPay.parent;
  }
  toWarning() {
    this.nodeWarning.parent.children = this.nodeWarning.children;
    return this.nodeWarning.parent;
  }
  toSuccess() {
    this.nodeSuccess.parent.children = this.nodeSuccess.children;
    return this.nodeSuccess.parent;
  }
  toSuccessLast() {
    this.nodeSuccessLast.parent.children = this.nodeSuccessLast.children;
    return this.nodeSuccessLast.parent;
  }
  toDefault() {
    this.nodeDefault.parent.children = this.nodeDefault.children;
    return this.nodeDefault.parent;
  }
}
