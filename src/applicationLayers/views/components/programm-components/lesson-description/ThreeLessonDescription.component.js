/* eslint-disable max-len */
import {DefaultClass} from '@views/components/programm-components/lesson-description/DefaultLessonDescriptionClass.js';

const options = {
  number: '3',
  goals: [
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Познакомимся с подходом JTBD ("Работа, которая должна быть сделана").',
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Я расскажу о трех самых важных вопросах, которые клиент задает сам себе при общении с вами.',
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Изучим цифры и результаты исследований, которые расскажут нам о том, как человек принимает решение. ' +
      'Я объясню почему важно готовить человека к защите принятого решения.',
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Рассмотрим несколько кейсов, где будет отчетливо видно слабое место всех продаж. ' +
      'Зная это место вы сможете понять механизм возникновения "сарафанного радио".',
    ]},
  ],
  skills: [
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      {tag: 'b', props: {}, children: ['Навык презентации себя. ']},
      {tag: 'span', props: {}, children: [
        'Это умение рассказывать о себе в рамках подхода JTBD. То есть ответить на немой вопрос клиента: ' +
        '"Для решения какой задачи я могу нанять тебя?".',
      ]},
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      {tag: 'b', props: {}, children: ['Навык презентации компании. ']},
      {tag: 'span', props: {}, children: [
        'Это умение рассказывать о компании в рамках подхода JTBD. То есть ответить на немой вопрос клиента: ' +
        '"Для решения какой задачи я могу нанять твою компанию?".',
      ]},
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      {tag: 'b', props: {}, children: ['Навык презентации продукта. ']},
      {tag: 'span', props: {}, children: [
        'Это умение рассказывать о продукте в рамках подхода JTBD. То есть ответить на немой вопрос клиента: ' +
        '"Для решения какой задачи я могу нанять твой продукт?".',
      ]},
    ]},
  ],
  class: 'content__block-lesson-container-default',
};

class ThreeLessonDescription extends DefaultClass {
  constructor(lessonClass) {
    super(options, lessonClass);
  }
}

export class ThreeLessonDescriptionFactory {
  constructor(lessonClass) {
    this.list = {
      errorLogin: new ThreeLessonDescription(lessonClass).toErrorLogin(),
      errorSettings: new ThreeLessonDescription(lessonClass).toErrorSettings(),
      errorPay: new ThreeLessonDescription(lessonClass).toErrorPay(),
      warning: new ThreeLessonDescription(lessonClass).toWarning(),
      success: new ThreeLessonDescription(lessonClass).toSuccess(),
      successLast: new ThreeLessonDescription(lessonClass).toSuccessLast(),
      default: new ThreeLessonDescription(lessonClass).toDefault(),
    };
  }
  toReady(type = 'errorLogin') {
    const LessonClass = this.list[type];
    return LessonClass;
  }
}
