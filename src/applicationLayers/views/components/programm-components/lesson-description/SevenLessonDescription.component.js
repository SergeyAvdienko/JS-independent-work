/* eslint-disable max-len */
import {DefaultClass} from '@views/components/programm-components/lesson-description/DefaultLessonDescriptionClass.js';

const options = {
  number: '7',
  goals: [
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Изучить алгоритм работы с убеждением - "Посыл-Подводка-Факт-Закрепление посыла".',
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Изучить стратегию работы с сомнениями - "Резонанс-Дифференциация-Вера".',
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Рассмотрим несколько практических кейсов для понимания практики использования изученных инструментов.',
    ]},
  ],
  skills: [
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      {tag: 'b', props: {}, children: ['Навык убеждения. ']},
      {tag: 'span', props: {}, children: [
        'Это умение убеждать/переубеждать собеседника/клиента.',
      ]},
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      {tag: 'b', props: {}, children: ['Навык работы с сомнениями. ']},
      {tag: 'span', props: {}, children: [
        'Это умение рассказывать собеседнику наглядную историю, которая развеет его сомнения в отношении требуемого предмета/поведения/события.',
      ]},
    ]},
  ],
  class: 'content__block-lesson-container-default',
};

class SevenLessonDescription extends DefaultClass {
  constructor(lessonClass) {
    super(options, lessonClass);
  }
}

export class SevenLessonDescriptionFactory {
  constructor(lessonClass) {
    this.list = {
      errorLogin: new SevenLessonDescription(lessonClass).toErrorLogin(),
      errorSettings: new SevenLessonDescription(lessonClass).toErrorSettings(),
      errorPay: new SevenLessonDescription(lessonClass).toErrorPay(),
      warning: new SevenLessonDescription(lessonClass).toWarning(),
      success: new SevenLessonDescription(lessonClass).toSuccess(),
      successLast: new SevenLessonDescription(lessonClass).toSuccessLast(),
      default: new SevenLessonDescription(lessonClass).toDefault(),
    };
  }
  toReady(type = 'errorLogin') {
    const LessonClass = this.list[type];
    return LessonClass;
  }
}
